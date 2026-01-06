import { Request, Response } from "express";
import { z } from "zod";
import * as userService from "../services/user.service";
import * as contentPlanService from "../services/contentPlan.service";
import * as contentHistoryService from "../services/contentHistory.service"

const generateWeekBodySchema = z.object({ userId: z.string().uuid() });

// In your generateWeek controller
export const generateWeek = async (req: Request, res: Response) => {
    const parseBody = generateWeekBodySchema.safeParse(req.body);
    if (!parseBody.success) return res.status(400).json({ error: parseBody.error.format() });

    const { userId } = parseBody.data;

    const user = await userService.getUserById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });
    const lastPlan = await contentPlanService.getLatestContentPlan(userId);

    const now = new Date();
    if (lastPlan) {
        const lastWeekStart = new Date(lastPlan.weekStart);
        const diff = now.getTime() - lastWeekStart.getTime();
        if (diff < 7 * 24 * 60 * 60 * 1000) {
            return res.status(403).json({
                error: "Free plan users can only generate a new weekly plan once every 7 days"
            });
        }
    }
    try {
        const planData = await contentPlanService.generateWeeklyPlan(user);

        // FIXED: Always get the NEXT Monday (or today if Monday)
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
        const daysUntilNextMonday = dayOfWeek === 1
            ? 0  // It's Monday → start this week
            : dayOfWeek === 0
                ? 1  // It's Sunday → next Monday is tomorrow
                : 8 - dayOfWeek; // Otherwise: count days to next Monday

        const weekStart = new Date(today);
        weekStart.setDate(today.getDate() + daysUntilNextMonday);
        weekStart.setHours(0, 0, 0, 0);

        console.log("Generating plan for upcoming week starting:", weekStart.toISOString());

        const contentPlan = await contentPlanService.createWeeklyContentPlan(userId, weekStart, planData);

        return res.json({ contentPlan });
    } catch (err: any) {
        console.error("Generate week error:", err);
        return res.status(500).json({ error: err.message || "Failed to generate weekly plan" });
    }
};
// GET /api/content/weekly-plan/:userId
export const getWeeklyPlan = async (req: Request, res: Response) => {
    const userId = req.params.userId;

    try {
        const plans = await contentPlanService.getContentPlansByUser(userId);
        return res.json(plans);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to fetch weekly plan" });
    }
};

// GET /api/content/history/:userId
export const getHistory = async (req: Request, res: Response) => {
    const userId = req.params.userId;

    try {
        const history = await contentHistoryService.getContentHistoryByUser(userId);
        return res.json(history);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to fetch history" });
    }
};

// ✅ NEW: PATCH /api/content/toggle-complete
const toggleCompleteSchema = z.object({
    userId: z.string().uuid(),
    postId: z.string(),
    completed: z.boolean()
});

export const toggleComplete = async (req: Request, res: Response) => {
    const parseBody = toggleCompleteSchema.safeParse(req.body);
    if (!parseBody.success) {
        return res.status(400).json({ error: parseBody.error.format() });
    }

    const { userId, postId, completed } = parseBody.data;

    try {
        const updatedPost = await contentPlanService.updatePostCompletion(userId, postId, completed);

        if (!updatedPost) {
            return res.status(404).json({ error: "Post not found" });
        }

        return res.json({ success: true, post: updatedPost });
    } catch (err) {
        console.error("Error toggling completion:", err);
        return res.status(500).json({ error: "Failed to update completion status" });
    }
};

// ✅ NEW: PATCH /api/content/edit-post
const editPostSchema = z.object({
    userId: z.string().uuid(),
    postId: z.string(),
    idea: z.string().min(1)
});

export const editPost = async (req: Request, res: Response) => {
    const parseBody = editPostSchema.safeParse(req.body);
    if (!parseBody.success) {
        return res.status(400).json({ error: parseBody.error.format() });
    }

    const { userId, postId, idea } = parseBody.data;

    try {
        // 1️⃣ Fetch the user
        const user = await userService.getUserById(userId);
        if (!user) return res.status(404).json({ error: "User not found" });

        const now = new Date();

        // 2️⃣ Reset weekly edits if >7 days passed
        if (!user.lastEditReset || now.getTime() - new Date(user.lastEditReset).getTime() > 7 * 24 * 60 * 60 * 1000) {
            await userService.resetWeeklyEdits(userId);
            user.editsThisWeek = 0; // reset locally for logic below
        }

        // 3️⃣ Enforce free plan edit limit
        if (user.editsThisWeek >= 1) {
            return res.status(403).json({
                error: "Free plan users can only edit each post once per week",
            });
        }

        // 4️⃣ Apply the edit
        const updatedPost = await contentPlanService.updatePostIdea(userId, postId, idea);
        if (!updatedPost) {
            return res.status(404).json({ error: "Post not found" });
        }

        // 5️⃣ Increment user's weekly edit count
        await userService.incrementWeeklyEdits(userId);

        return res.json({ success: true, post: updatedPost });
    } catch (err) {
        console.error("Error editing post:", err);
        return res.status(500).json({ error: "Failed to edit post" });
    }
};
