"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export interface ContentItem {
    id: string;
    day: string;
    platform: string;
    contentType: string;
    idea: string;
    hook: string;
    completed: boolean;
    scheduledFor?: string | null; // optional specific datetime
    isManual?: boolean;
}

interface WeeklyContentPlan {
    weekStart: string; // ISO string of the Monday (e.g., "2025-11-17T00:00:00.000Z")
    posts: ContentItem[];
}

interface UserContentContextType {
    hydrated: boolean;
    userId: any;
    setUserId: (id: string | null) => void;
    userProfession: string | null;
    setUserProfession: (p: string | null) => void;
    hasOnboarded: boolean;
    setHasOnboarded: (b: boolean) => void;

    // Weekly plan + its weekStart
    weeklyPlan: ContentItem[];
    weekStartMonday: Date | null; // ← NEW: the actual Monday this plan belongs to
    currentPlanId?: string;       // optional: useful for future edits

    contentHistory: string[];
    fullContentHistory: any;
    planLockedMessage: any;
    setPlanLockedMessage: any;
    generateWeeklyPlan: (isManual?: boolean) => Promise<void>;
    createEmptyWeek: () => void;
    regenerateSingle: (index: number) => Promise<void>;
    saveEdit: (index: number, content: string) => void;
    toggleComplete: (index: number) => void;

    setWeeklyPlan: (plan: ContentItem[]) => void;
    setContentHistory: (history: string[]) => void;

    isGenerating: boolean;
    regeneratingIndex: number | null;
}

const UserContentContext = createContext<UserContentContextType | undefined>(undefined);

export const UserContentProvider = ({ children }: { children: ReactNode }) => {
    const [hydrated, setHydrated] = useState(false);
    const [userId, setUserId] = useState<string | null | undefined>(undefined);
    const [userProfession, setUserProfession] = useState<string | null>(null);
    const [hasOnboarded, setHasOnboarded] = useState(false);
    const [freePlanStart, setFreePlanStart] = useState<Date | null>(null);
    // Full plan object (includes weekStart)
    const [currentWeeklyPlan, setCurrentWeeklyPlan] = useState<WeeklyContentPlan | null>(null);
    const [editsThisWeek, setEditsThisWeek] = useState<number>(0);
    const [planLockedMessage, setPlanLockedMessage] = useState<string | null>(null);

    const [contentHistory, setContentHistory] = useState<string[]>([]);
    const [fullContentHistory, setFullContentHistory] = useState();
    const [isGenerating, setIsGenerating] = useState(false);
    const [regeneratingIndex, setRegeneratingIndex] = useState<number | null>(null);

    // Derived values for easier consumption
    const weeklyPlan = currentWeeklyPlan?.posts || [];
    const weekStartMonday = currentWeeklyPlan
        ? new Date(currentWeeklyPlan.weekStart)
        : null;

    // 1. Hydrate userId
    useEffect(() => {
        const stored = localStorage.getItem("userId");
        setUserId(stored || null);
        setHydrated(true);
    }, []);


    // 2. Persist userId
    useEffect(() => {
        if (userId) localStorage.setItem("userId", userId);
        else localStorage.removeItem("userId");
    }, [userId]);

    // 3. Fetch user data + latest weekly plan
    useEffect(() => {
        if (!userId) return;

        const fetchUserData = async () => {
            try {
                const [planRes, historyRes, userRes] = await Promise.all([
                    fetch(`http://localhost:3001/api/content/weekly-plan/${userId}`),
                    fetch(`http://localhost:3001/api/content/history/${userId}`),
                    fetch(`http://localhost:3001/api/user/${userId}`),
                ]);

                // ——— Weekly Plan (with weekStart) ———
                const plans = await planRes.json();
                let activePlan: WeeklyContentPlan | null = null;

                if (Array.isArray(plans) && plans.length > 0) {
                    // Sort by weekStart descending → newest first
                    const sorted = plans.sort((a: any, b: any) =>
                        new Date(b.weekStart).getTime() - new Date(a.weekStart).getTime()
                    );
                    const latest = sorted[0];

                    if (latest.weekStart && Array.isArray(latest.posts)) {
                        activePlan = {
                            weekStart: latest.weekStart,
                            posts: latest.posts.map((p: any) => ({
                                ...p,
                                completed: p.completed ?? false,
                            })),
                        };
                    }
                }
                setCurrentWeeklyPlan(activePlan);

                // ——— History ———
                const history = await historyRes.json();
                setContentHistory(history.map((h: any) => h.theme || h.idea || h));
                setFullContentHistory(
                    history.map((h: any) => ({
                        id: h.id,
                        text: h.theme || h.idea || "", // fallback to empty string if none
                        createdAt: h.createdAt,
                    }))
                );

                // ——— User profession ———
                const userData = await userRes.json();
                setUserProfession(userData.user.profession ?? null);
                setEditsThisWeek(userData.user.editsThisWeek ?? 0);
                console.log("Parsed freePlanStart:", userData.user.freePlanStart);
                const fpStart = userData.user.freePlanStart ? new Date(userData.user.freePlanStart) : null;
                setFreePlanStart(fpStart);
                console.log("Parsed freePlanStart:", fpStart);
                console.log("RAW PLAN START", userData.user.freePlanStart)
                console.log("Sending user data to frontend:", userData.user);
            } catch (err) {
                console.error("Failed to fetch user data:", err);
            }
        };

        fetchUserData();
    }, [userId]);

    // Generate full weekly plan
    const generateWeeklyPlan = async (isManual = true) => {
        if (!userId) return;
        setIsGenerating(true);

        try {
            const res = await fetch("http://localhost:3001/api/content/generate-week", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId, profession: userProfession }),
            });

            const data = await res.json();

            if (!res.ok) {
                // If the server sends a 403 or 400, show that message
                throw new Error(data.error || "Failed to generate plan");
            }

            const plan = data.contentPlan;

            if (plan?.weekStart && Array.isArray(plan.posts)) {
                const newPlan: WeeklyContentPlan = {
                    weekStart: plan.weekStart,
                    posts: plan.posts.map((item: any) => ({
                        ...item,
                        completed: false,
                    })),
                };

                setCurrentWeeklyPlan(newPlan);

                // Add new ideas to history
                const newThemes = plan.posts.map((p: any) => p.idea);
                setContentHistory((prev) => [...prev, ...newThemes]);

                // Reset the plan locked message
                setPlanLockedMessage(null);
            }
        } catch (err: any) {
            console.error("Failed to generate weekly plan:", err);
            // Show the exact message from backend
            setPlanLockedMessage(err.message);
        } finally {
            setIsGenerating(false);
        }
    };
    const createEmptyWeek = () => {
        const monday = new Date();
        monday.setHours(0, 0, 0, 0);

        // normalize to Monday
        const day = monday.getDay();
        const diff = monday.getDate() - day + (day === 0 ? -6 : 1);
        monday.setDate(diff);

        const emptyPosts: ContentItem[] = Array.from({ length: 7 }).map((_, i) => ({
            id: crypto.randomUUID(),
            day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][i],
            platform: "",
            contentType: "",
            idea: "",
            hook: "",
            completed: false,
            isManual: true,
        }));

        setCurrentWeeklyPlan({
            weekStart: monday.toISOString(),
            posts: emptyPosts,
        });

        // Manual weeks should not be locked
        setPlanLockedMessage(null);
    };


    const regenerateSingle = async (index: number) => {
        if (!userId || !currentWeeklyPlan) return;
        setRegeneratingIndex(index);

        try {
            const res = await fetch("http://localhost:3001/api/content/generate-week", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId, profession: userProfession }),
            });

            const data = await res.json();
            const newPosts = data.contentPlan?.posts || [];
            const randomNewItem = newPosts[Math.floor(Math.random() * newPosts.length)];

            setCurrentWeeklyPlan((prev) => {
                if (!prev) return prev;
                const updated = [...prev.posts];
                updated[index] = {
                    ...randomNewItem,
                    day: updated[index].day,
                    completed: updated[index].completed,
                };
                return { ...prev, posts: updated };
            });

            setContentHistory((prev) => [...prev, randomNewItem.idea]);
        } catch (err) {
            console.error("Failed to regenerate single post:", err);
        } finally {
            setRegeneratingIndex(null);
        }
    };

    const toggleComplete = async (index: number) => {
        if (!userId || !currentWeeklyPlan) return;

        const item = currentWeeklyPlan.posts[index];
        const newCompleted = !item.completed;

        // Optimistic UI
        setCurrentWeeklyPlan((prev) => {
            if (!prev) return prev;
            const updated = [...prev.posts];
            updated[index] = { ...updated[index], completed: newCompleted };
            return { ...prev, posts: updated };
        });

        try {
            await fetch(`http://localhost:3001/api/content/toggle-complete`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userId,
                    postId: item.id,
                    completed: newCompleted,
                }),
            });
        } catch (err) {
            console.error("Failed to toggle complete:", err);
            // Rollback
            setCurrentWeeklyPlan((prev) => {
                if (!prev) return prev;
                const updated = [...prev.posts];
                updated[index] = { ...updated[index], completed: !newCompleted };
                return { ...prev, posts: updated };
            });
        }
    };

    const saveEdit = async (index: number, content: string) => {
        if (!userId || !currentWeeklyPlan) return;

        // Free plan: only 1 edit per week
        if (editsThisWeek >= 1) {
            alert("Free plan users can only edit a post once per week");
            return;
        }

        const item = currentWeeklyPlan.posts[index];

        // Optimistic UI
        setCurrentWeeklyPlan((prev) => {
            if (!prev) return prev;
            const updated = [...prev.posts];
            updated[index] = { ...updated[index], idea: content };
            return { ...prev, posts: updated };
        });

        try {
            await fetch(`http://localhost:3001/api/content/edit-post`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userId,
                    postId: item.id,
                    idea: content,
                }),
            });

            // Increment local edit count
            setEditsThisWeek((prev) => prev + 1);
        } catch (err) {
            console.error("Failed to save edit:", err);
            // rollback if needed
            setCurrentWeeklyPlan((prev) => {
                if (!prev) return prev;
                const updated = [...prev.posts];
                updated[index] = { ...updated[index], idea: item.idea };
                return { ...prev, posts: updated };
            });
        }
    };

    return (
        <UserContentContext.Provider
            value={{
                hydrated,
                userId,
                setUserId,
                userProfession,
                setUserProfession,
                hasOnboarded,
                setHasOnboarded,

                weeklyPlan,
                weekStartMonday,
                currentPlanId: currentWeeklyPlan?.weekStart || undefined,

                contentHistory,
                setWeeklyPlan: (posts) =>
                    setCurrentWeeklyPlan((prev) =>
                        prev ? { ...prev, posts } : { weekStart: new Date().toISOString(), posts }
                    ),
                fullContentHistory,
                setContentHistory,
                setPlanLockedMessage,
                planLockedMessage,
                generateWeeklyPlan,
                createEmptyWeek,
                regenerateSingle,
                saveEdit,
                toggleComplete,

                isGenerating,
                regeneratingIndex,
            }}
        >
            {children}
        </UserContentContext.Provider>
    );
};

export const useUserContent = () => {
    const context = useContext(UserContentContext);
    if (!context) throw new Error("useUserContent must be used within UserContentProvider");
    return context;
};