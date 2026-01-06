import prisma from "./client";

export const getContentHistoryByUser = async (userId: string) => {
    return prisma.contentHistory.findMany({
        where: { userId },
        select: {
            id: true,
            theme: true,
            createdAt: true,
            updatedAt: true,
        },
    });
};

export const addContentHistoryBulk = async (userId: string, generatedPlan: any[]) => {
    return prisma.contentHistory.createMany({
        data: generatedPlan.map((item) => ({
            userId,
            theme: item.idea,
        })),
    });
};
export const addContentHistory = async (userId: string, theme: string) => {
    return prisma.contentHistory.create({
        data: {
            userId,
            theme,
        },
    });
};

