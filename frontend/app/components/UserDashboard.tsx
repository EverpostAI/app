"use client";
import { useEffect, useState } from "react";
import { useUserContent } from "../context/UserContentContext";
import { User, Briefcase, Calendar, TrendingUp, FileText } from "lucide-react";

interface UserStats {
    totalContent: number;
    weeklyGoal: number;
    completionRate: number;
}

const UserDashboard = () => {
    const { planLockedMessage, setPlanLockedMessage, userId, userProfession, generateWeeklyPlan, weeklyPlan } = useUserContent();
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [stats] = useState<UserStats>({
        totalContent: 0,
        weeklyGoal: 7,
        completionRate: 0,
    });
    const [editLockedMessage, setEditLockedMessage] = useState<string | null>(null);

    // Fetch user data from backend
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            setLoading(false);
            return;
        }

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((res) => res.json())
            .then((data) => {
                setUser(data.user);
                setLoading(false);

                // Check weekly plan generation limit
                if (data.user.freePlanStart) {
                    const lastPlanDate = new Date(data.user.freePlanStart);
                    const now = new Date();
                    const diff = now.getTime() - lastPlanDate.getTime();
                    if (diff < 7 * 24 * 60 * 60 * 1000) {
                        const daysLeft = Math.ceil((7 * 24 * 60 * 60 * 1000 - diff) / (1000 * 60 * 60 * 24));
                        setPlanLockedMessage(`You can generate a new plan in ${daysLeft} day${daysLeft > 1 ? "s" : ""}.`);
                    }
                }

                // Check edit limit
                if (data.user.editsThisWeek >= 1) {
                    setEditLockedMessage("Free plan users can only edit a post once per week.");
                }
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);
    const [timeLeft, setTimeLeft] = useState<number | null>(null); // milliseconds until next allowed plan

    useEffect(() => {
        if (!user?.freePlanStart) return;

        const lastPlanDate = new Date(user.freePlanStart).getTime();
        const weekMs = 7 * 24 * 60 * 60 * 1000;
        const updateCountdown = () => {
            const now = Date.now();
            const diff = lastPlanDate + weekMs - now;
            setTimeLeft(diff > 0 ? diff : 0);
            if (diff <= 0) setPlanLockedMessage(null);
        };

        updateCountdown(); // initial call
        const interval = setInterval(updateCountdown, 1000); // update every second

        return () => clearInterval(interval);
    }, [user]);


    if (loading) {
        return (
            <div className="min-h-screen bg-paper flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-muted font-medium">Loading your dashboard...</p>
                </div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-screen bg-paper flex items-center justify-center">
                <div className="card-flat border-2 border-border max-w-md text-center">
                    <p className="text-muted">Unable to load user data</p>
                </div>
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-paper">
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Header Section */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-white" strokeWidth={2.5} />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold text-ink tracking-tight">
                                Welcome back!
                            </h1>
                            <p className="text-muted text-lg">{user.email}</p>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="card">
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-10 h-10 bg-paper rounded-lg flex items-center justify-center">
                                <FileText className="w-5 h-5 text-accent" strokeWidth={2.5} />
                            </div>
                            <span className="text-xs font-semibold text-muted uppercase tracking-wide">
                                Total Content
                            </span>
                        </div>
                        <p className="text-3xl font-bold text-ink">{stats.totalContent}</p>
                        <p className="text-sm text-muted mt-1">Pieces created</p>
                    </div>

                    <div className="card">
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-10 h-10 bg-paper rounded-lg flex items-center justify-center">
                                <Calendar className="w-5 h-5 text-accent" strokeWidth={2.5} />
                            </div>
                            <span className="text-xs font-semibold text-muted uppercase tracking-wide">
                                Weekly Goal
                            </span>
                        </div>
                        <p className="text-3xl font-bold text-ink">{stats.weeklyGoal}</p>
                        <p className="text-sm text-muted mt-1">Posts per week</p>
                    </div>

                    <div className="card">
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-10 h-10 bg-paper rounded-lg flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 text-accent" strokeWidth={2.5} />
                            </div>
                            <span className="text-xs font-semibold text-muted uppercase tracking-wide">
                                Completion
                            </span>
                        </div>
                        <p className="text-3xl font-bold text-ink">{stats.completionRate}%</p>
                        <p className="text-sm text-muted mt-1">This week</p>
                    </div>
                </div>

                {/* Profile Info Card */}
                <div className="card-flat border-2 border-border mb-6">
                    <h2 className="text-2xl font-bold text-ink mb-6">Profile Information</h2>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 bg-paper rounded-lg">
                            <div className="w-10 h-10 bg-white border-2 border-border rounded-lg flex items-center justify-center">
                                <User className="w-5 h-5 text-muted" strokeWidth={2.5} />
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-muted uppercase tracking-wide">
                                    Email
                                </p>
                                <p className="text-ink font-medium">{user.email}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-paper rounded-lg">
                            <div className="w-10 h-10 bg-white border-2 border-border rounded-lg flex items-center justify-center">
                                <Briefcase className="w-5 h-5 text-muted" strokeWidth={2.5} />
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-muted uppercase tracking-wide">
                                    Profession
                                </p>
                                <p className="text-ink font-medium">{user.profession || userProfession}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-paper rounded-lg">
                            <div className="w-10 h-10 bg-white border-2 border-border rounded-lg flex items-center justify-center">
                                <span className="text-xs font-bold text-muted">#</span>
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-muted uppercase tracking-wide">
                                    User ID
                                </p>
                                <p className="text-ink font-mono text-sm">{user.id}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-8 flex gap-4">
                    <div className="flex flex-col">
                        {timeLeft && timeLeft > 0 ? (
                            <p className="text-sm text-red-500 mt-1">
                                You can generate a new plan in {Math.floor(timeLeft / (1000 * 60 * 60))}h {Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))}m
                            </p>
                        ) : (
                            <button
                                className="btn-main"
                                onClick={async () => {
                                    await generateWeeklyPlan();
                                }}
                            >
                                Generate New Plan
                            </button>
                        )}
                    </div>


                    <div className="flex flex-col">
                        <button className="btn-secondary">View Content History</button>
                        {editLockedMessage && <p className="text-sm text-red-500 mt-1">{editLockedMessage}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
