import { Request, Response } from "express";
import { AuthenticatedRequest } from "../routes/middleware/authMiddleware";
import * as userService from "../services/user.service";
import * as contentPlanService from "../services/contentPlan.service";
import * as contentHistoryService from "../services/contentHistory.service";

// Get a user by ID
export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user = await userService.getUserById(id);
        if (!user) return res.status(404).json({ error: "User not found" });
        res.json({ user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error getting user" });
    }
};
export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await userService.getAllUsers();
        if (!users) return res.status(404).json({ error: "Users not found" });
        res.json({ users });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error getting users" });
    }
};
// Get a user's content plans
export const getUserContentPlans = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const plans = await contentPlanService.getContentPlansByUser(id);
        res.json({ plans });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch content plans" });
    }
};

// Get a user's content history
export const getUserContentHistory = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const histories = await contentHistoryService.getContentHistoryByUser(id);
        res.json({ histories });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch content history" });
    }
};

// Update user's profession (authenticated route)
export const updateProfession = async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ error: "Unauthorized" });

    const { profession } = req.body;
    if (!profession) return res.status(400).json({ error: "Must provide a profession" });

    try {
        const user = await userService.updateUserProfession(userId, profession);
        res.json({ success: true, user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to update profession" });
    }
};
