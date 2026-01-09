"use client";
import { Calendar, RefreshCw, Sparkles, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";
import { useUserContent } from "../context/UserContentContext";
import { ContentCard } from "./components/ContentCard";
import { ContentCalendar } from "./components/ContentCalendar";
import { WeeklyPlannerList } from "./components/WeeklyPlannerList";
import { WeeklyPlannerHeader } from "./components/WeeklyPlannerHeader";

type PlannerMode = "ai" | "manual";

export const WeeklyPlanner = () => {
    const {
        userProfession,
        weeklyPlan,
        contentHistory,
        generateWeeklyPlan,
        createEmptyWeek,
        regenerateSingle,
        saveEdit,
        toggleComplete,
        isGenerating,
        regeneratingIndex,
        freePlanStart,
    } = useUserContent();
    const [plannerMode, setPlannerMode] = useState<"ai" | "manual" | null>(null);
    const [showConfirmModal, setShowConfirmModal] = useState(true);

    const completedCount = weeklyPlan.filter((item) => item.completed).length;
    const completionPercentage =
        weeklyPlan.length > 0 ? Math.round((completedCount / weeklyPlan.length) * 100) : 0;

    // -------------------------------
    // Countdown timer (7-day cooldown)
    // -------------------------------
    const calculateTimeLeft = (start?: Date) =>
        start ? Math.max(0, 7 * 24 * 60 * 60 * 1000 - (Date.now() - start.getTime())) : null;

    const [timeLeft, setTimeLeft] = useState<number | null>(calculateTimeLeft(freePlanStart));

    useEffect(() => {
        if (!freePlanStart) return setTimeLeft(null);

        const interval = setInterval(() => setTimeLeft(calculateTimeLeft(freePlanStart)), 1000);
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

    const isButtonDisabled = isGenerating || (timeLeft && timeLeft > 0) || false;
    const isWeekComplete =
        weeklyPlan.length > 0 &&
        weeklyPlan.every((item) => item.completed);

    return (
        <div className="min-h-screen bg-paper">
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Header */}
                <WeeklyPlannerHeader
                    userProfession={userProfession}
                    timeLeft={timeLeft}
                    onGenerate={handleGenerateClick}
                    isGenerating={isGenerating}
                />
                {/* Weekly Plan */}
                {weeklyPlan.length === 0 ? (
                    <div className="card-flat border-2 border-dashed border-border text-center py-16">
                        <Calendar className="w-16 h-16 text-muted mx-auto mb-4" />

                        <h3 className="text-xl font-bold text-ink mb-2">
                            How do you want to plan this week?
                        </h3>

                        <p className="text-muted mb-6 max-w-md mx-auto">
                            Generate ideas with AI or plan everything yourself.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            {/* AI option */}
                            <button
                                onClick={() => {
                                    setPlannerMode("ai");
                                    generateWeeklyPlan();
                                }}
                                disabled={isButtonDisabled}
                                className="btn-main"
                            >
                                <Sparkles className="w-4 h-4 inline mr-2" />
                                Generate with AI
                            </button>

                            {/* Manual option */}
                            <button
                                onClick={() => {
                                    setPlannerMode("manual");
                                    createEmptyWeek();
                                }}
                                className="btn-secondary"
                            >
                                <Calendar className="w-4 h-4 inline mr-2" />
                                Plan Manually
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Left column - content cards */}
                        <WeeklyPlannerList
                            isWeekComplete={isWeekComplete}
                            generateWeeklyPlan={generateWeeklyPlan}
                            completionPercentage={completionPercentage}
                            completedCount={completedCount}
                            weeklyPlan={weeklyPlan}
                            toggleComplete={toggleComplete}
                            regenerateSingle={regenerateSingle}
                            saveEdit={saveEdit}
                            regeneratingIndex={regeneratingIndex}
                            contentHistory={contentHistory}
                        />

                        {/* Right column - calendar */}
                        <div className="lg:sticky lg:top-6 lg:self-start">
                            <ContentCalendar isWeekComplete={isWeekComplete} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
