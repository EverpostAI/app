import prisma from "./client";
import { callOpenAI } from "./openai.service";
import { dayToEnum, platformToEnum, contentTypeToEnum } from "../utils/enums";

export const getContentPlansByUser = async (userId: string) => {
    return prisma.contentPlan.findMany({
        where: { userId },
        select: {
            id: true,
            weekStart: true,
            posts: {
                select: {
                    id: true,
                    day: true,
                    platform: true,
                    contentType: true,
                    idea: true,
                    hook: true,
                    completed: true,
                    scheduledFor: true,
                },
            },
        },
    });
}

export const createContentPlan = async (userId: string, weekStart: Date) => {
    return prisma.contentPlan.create({
        data: {
            userId,
            weekStart,
        },
    });
};
export const createEmptyWeek = () => {
    const days = [
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY",
        "SATURDAY",
        "SUNDAY",
    ];

    return days.map((day) => ({
        day,
        platform: null,        // or a default if Prisma requires enum
        contentType: null,     // same here
        idea: "",
        hook: "",
        optimalTime: "09:00",  // default so scheduling logic works
        completed: false,
        isManual: true,
    }));
};

export const generateWeeklyPlan = async (user: any) => {
    const histories = user.contentHistories ?? [];

    const historyContext = histories.length
        ? `\n\nPrevious content themes to avoid repeating:\n${histories.map((h: any) => h.theme).join("\n")}`
        : "";

    // ✅ Improved prompt with clear JSON structure and example
    const prompt = `You are a social media strategist for a ${user.profession}.

Create a 7-day content calendar as a JSON array. Each item must have these exact fields:

{
  "day": "Monday" (or Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday),
  "platform": "INSTAGRAM" (or TWITTER, LINKEDIN, TIKTOK, YOUTUBE),
  "contentType": "VIDEO" (or IMAGE, TEXT, THREAD, REEL),
  "idea": "Content idea description",
  "hook": "Attention-grabbing opening line",
  "optimalTime": "HH:MM" (24-hour format, best posting time for that platform)
}

Platform optimal times:
- Instagram: 11:00, 14:00, 19:00
- Twitter: 09:00, 12:00, 17:00
- LinkedIn: 08:00, 12:00, 17:00
- TikTok: 18:00, 21:00
- YouTube: 14:00, 20:00

Example item:
{
  "day": "Monday",
  "platform": "INSTAGRAM",
  "contentType": "REEL",
  "idea": "Quick morning routine that boosts productivity",
  "hook": "This 5-minute habit changed my life",
  "optimalTime": "11:00"
}
${historyContext}

Return ONLY the JSON array with 7 items, one for each day. No markdown, no explanation, just the raw JSON array.`;

    const aiResponse = await callOpenAI(prompt, 3000); // Increased token limit
    if (!aiResponse) throw new Error("No response from OpenAI");

    // Clean up any markdown formatting
    let cleanedResponse = aiResponse.trim();
    cleanedResponse = cleanedResponse.replace(/```json\n?/g, '').replace(/```\n?/g, '');

    console.log('AI Response:', cleanedResponse); // Debug log

    const generatedPlan = JSON.parse(cleanedResponse);

    return generatedPlan.map((item: any) => {
        // ✅ Validate optimalTime exists, default to 09:00 if missing
        const optimalTime = item.optimalTime || "09:00";

        return {
            day: dayToEnum(item.day),
            platform: platformToEnum(item.platform),
            contentType: contentTypeToEnum(item.contentType),
            idea: item.idea || "AI did not provide an idea",
            hook: item.hook || "AI did not provide a hook",
            optimalTime: optimalTime,
            completed: false,
        };
    });
};

export const createWeeklyContentPlan = async (userId: string, weekStart: Date, planData: any[], options?: { isManual?: boolean }) => {
    return prisma.$transaction(async (tx) => {
        const existing = await tx.contentPlan.findUnique({ where: { userId_weekStart: { userId, weekStart } } });
        if (existing) await tx.contentPlan.delete({ where: { id: existing.id } });

        // ✅ Map optimal time to actual DateTime for each post
        const postsWithScheduledTime = planData.map((item) => {
            console.log('Creating post with time:', item.day, item.optimalTime); // Debug log
            const scheduledDate = calculateScheduledDateTime(weekStart, item.day, item.optimalTime);
            console.log('Calculated scheduledFor:', scheduledDate); // Debug log

            return {
                day: item.day,
                platform: item.platform,
                contentType: item.contentType,
                idea: item.idea,
                hook: item.hook,
                completed: item.completed,
                scheduledFor: scheduledDate,
            };
        });

        const plan = await tx.contentPlan.create({
            data: {
                userId,
                weekStart,
                posts: { create: postsWithScheduledTime },
            },
            include: { posts: true },
        });
        // Update user's freePlanStart
        await tx.user.update({
            where: { id: userId },
            data: { freePlanStart: new Date() },
        });

        await tx.contentHistory.createMany({
            data: planData.map((item) => ({ userId, theme: item.idea })),
        });

        return plan;
    });
};

// ✅ Helper function to convert day + time to DateTime
function calculateScheduledDateTime(weekStart: Date, day: string, time: string): Date {
    const dayOffsets: Record<string, number> = {
        MONDAY: 0,
        TUESDAY: 1,
        WEDNESDAY: 2,
        THURSDAY: 3,
        FRIDAY: 4,
        SATURDAY: 5,
        SUNDAY: 6,
    };

    // Parse time (handle both "HH:MM" and "H:MM" formats)
    const [hours, minutes] = time.split(':').map(Number);

    const scheduledDate = new Date(weekStart);
    scheduledDate.setDate(weekStart.getDate() + dayOffsets[day]);
    scheduledDate.setHours(hours, minutes, 0, 0);

    console.log(`Scheduling ${day} at ${time}:`, scheduledDate); // Debug log

    return scheduledDate;
}

// ✅ Update post completion status
export const updatePostCompletion = async (
    userId: string,
    postId: string,
    completed: boolean
) => {
    try {
        const post = await prisma.post.findFirst({
            where: {
                id: postId,
                plan: {
                    userId: userId
                }
            }
        });

        if (!post) {
            return null;
        }

        const updatedPost = await prisma.post.update({
            where: {
                id: postId
            },
            data: {
                completed
            }
        });

        return updatedPost;
    } catch (error) {
        console.error("Error updating post completion:", error);
        throw error;
    }
};

// ✅ Update post idea/content
export const updatePostIdea = async (
    userId: string,
    postId: string,
    idea: string
) => {
    try {
        const post = await prisma.post.findFirst({
            where: {
                id: postId,
                plan: {
                    userId: userId
                }
            }
        });

        if (!post) {
            return null;
        }

        const updatedPost = await prisma.post.update({
            where: {
                id: postId
            },
            data: {
                idea
            }
        });

        return updatedPost;
    } catch (error) {
        console.error("Error updating post idea:", error);
        throw error;
    }
};
export const getLatestContentPlan = async (userId: string) => {
    return prisma.contentPlan.findFirst({
        where: { userId },
        orderBy: { weekStart: 'desc' },
        include: {
            posts: {
                select: {
                    id: true,
                    day: true,
                    platform: true,
                    contentType: true,
                    idea: true,
                    hook: true,
                    completed: true,
                    scheduledFor: true,
                },
            },
        },
    });
};
