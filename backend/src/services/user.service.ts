import prisma from "./client";

export const getUserById = async (id: string) => {
    return prisma.user.findUnique({
        where: { id },
        select: {
            id: true,
            email: true,
            googleId: true,
            profession: true,
            createdAt: true,
            updatedAt: true,
            editsThisWeek: true,
            lastEditReset: true,
            freePlanStart: true,
            contentHistories: {
                select: {
                    id: true,
                    theme: true,
                    createdAt: true,
                },
            },
        },
    });
};



export const getAllUsers = async (profession?: string) => {
    return prisma.user.findMany({
        where: profession ? { profession } : {},
        select: {
            id: true,
            email: true,
            googleId: true,
            profession: true,
            createdAt: true,
            updatedAt: true,
        },
        orderBy: { createdAt: "desc" },
    });
};

export const updateUserProfession = async (userId: string, profession: string) => {
    return prisma.user.update({
        where: { id: userId },
        data: { profession },
        select: { id: true, email: true, profession: true },
    });
};

export const resetWeeklyEdits = async (userId: string) => {
    return prisma.user.update({
        where: { id: userId },
        data: { editsThisWeek: 0, lastEditReset: new Date() },
    });
};

export const incrementWeeklyEdits = async (userId: string) => {
    return prisma.user.update({
        where: { id: userId },
        data: { editsThisWeek: { increment: 1 } },
    });
};
