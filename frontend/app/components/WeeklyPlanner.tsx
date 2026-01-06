"use client";
import { Calendar, RefreshCw, Sparkles, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";
import { useUserContent } from "../context/UserContentContext";
import { ContentCard } from "./ContentCard";
import { ContentCalendar } from "./ContentCalendar";

export const WeeklyPlanner = () => {
    const {
        userProfession,
        weeklyPlan,
        contentHistory,
        generateWeeklyPlan,
        regenerateSingle,
        saveEdit,
        toggleComplete,
        isGenerating,
        regeneratingIndex,
        freePlanStart,

    } = useUserContent();

    const [showConfirmModal, setShowConfirmModal] = useState(true);
    const completedCount = weeklyPlan.filter((item) => item.completed).length;
    const completionPercentage =
        weeklyPlan.length > 0 ? Math.round((completedCount / weeklyPlan.length) * 100) : 0;

    // Countdown timer (7-day cooldown)
    const [timeLeft, setTimeLeft] = useState<number | null>(
        freePlanStart ? Math.max(0, 7 * 24 * 60 * 60 * 1000 - (Date.now() - freePlanStart.getTime())) : null
    );

    useEffect(() => {
        if (!freePlanStart) return setTimeLeft(null);

        const updateTime = () => {
            const diff = 7 * 24 * 60 * 60 * 1000 - (Date.now() - freePlanStart.getTime());
            setTimeLeft(diff > 0 ? diff : 0);
        };

        updateTime(); // update immediately on mount
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, [freePlanStart]);


    const handleGenerateClick = () => {
        if (weeklyPlan.length > 0) {
            setShowConfirmModal(true);
        } else {
            generateWeeklyPlan();
        }
    };

    const confirmGenerate = () => {
        setShowConfirmModal(false);
        generateWeeklyPlan();
    };

    const formatTime = (ms: number) => {
        const hours = Math.floor(ms / (1000 * 60 * 60));
        const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
        return `${hours}h ${minutes}m`;
    };

    return (
        <div className="min-h-screen bg-paper">
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                            <Calendar className="w-6 h-6 text-white" strokeWidth={2.5} />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-ink tracking-tight mb-1">Content Calendar</h1>
                            <p className="text-muted text-lg">{userProfession}</p>
                        </div>
                    </div>

                    {/* Generate / Countdown */}
                    <div>
                        {timeLeft && timeLeft > 0 ? (
                            <p className="text-sm text-red-500 font-medium">
                                Free plan users can only generate a new week once per week.
                                <br />
                                You can generate a new week in {formatTime(timeLeft)}
                            </p>
                        ) : (
                            <button
                                onClick={handleGenerateClick}
                                disabled={isGenerating}
                                className="btn-main whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <RefreshCw
                                    className={`w-4 h-4 inline mr-2 ${isGenerating ? "animate-spin" : ""}`}
                                />
                                Generate New Week
                            </button>
                        )}
                    </div>
                </div>

                {/* Weekly Plan */}
                {weeklyPlan.length === 0 ? (
                    <div className="card-flat border-2 border-dashed border-border text-center py-16">
                        <Calendar className="w-16 h-16 text-muted mx-auto mb-4" strokeWidth={1.5} />
                        <h3 className="text-xl font-bold text-ink mb-2">Ready to Plan Your Week?</h3>
                        <p className="text-muted mb-6 max-w-md mx-auto">
                            Generate a full week of content ideas tailored to your profession in seconds.
                        </p>
                        <button
                            onClick={generateWeeklyPlan}
                            disabled={isGenerating || (timeLeft && timeLeft > 0)}
                            className="btn-main disabled:opacity-50"
                        >
                            <Sparkles className="w-4 h-4 inline mr-2" strokeWidth={2.5} />
                            {timeLeft && timeLeft > 0 ? `Wait ${formatTime(timeLeft)}` : "Generate Content Plan"}
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Left column - content cards */}
                        <div className="space-y-4">
                            {/* Progress card */}
                            <div className="card border-2 border-accent/20 bg-white">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        <TrendingUp className="w-5 h-5 text-accent" strokeWidth={2.5} />
                                        <span className="font-semibold text-ink">Weekly Progress</span>
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl font-bold text-ink">{completionPercentage}%</span>
                                        <span className="text-sm text-muted">
                                            ({completedCount}/{weeklyPlan.length})
                                        </span>
                                    </div>
                                </div>
                                <div className="w-full bg-border rounded-full h-3 overflow-hidden">
                                    <div
                                        className="bg-accent h-3 rounded-full transition-all duration-500 ease-out"
                                        style={{ width: `${completionPercentage}%` }}
                                    />
                                </div>
                            </div>

                            {weeklyPlan.map((item, index) => (
                                <ContentCard
                                    key={item.id}
                                    item={item}
                                    index={index}
                                    toggleComplete={toggleComplete}
                                    regenerateSingle={regenerateSingle}
                                    saveEdit={saveEdit}
                                    startEditing={() => { }}
                                    isGenerating={regeneratingIndex === index}
                                />
                            ))}

                            {/* Content memory footer */}
                            <div className="card bg-paper">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white border-2 border-border rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Sparkles className="w-5 h-5 text-accent" strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-ink mb-1">Content Memory Active</h3>
                                        <p className="text-sm text-muted">
                                            AI is tracking{" "}
                                            <span className="font-semibold text-ink">{contentHistory.length} themes</span>{" "}
                                            to ensure variety and strategic growth in your content.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right column - calendar */}
                        <div className="lg:sticky lg:top-6 lg:self-start">
                            <ContentCalendar />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
