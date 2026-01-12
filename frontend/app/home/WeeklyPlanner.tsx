"use client";
import * as React from "react";
import { Calendar, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { useUserContent } from "../context/UserContentContext";
import { ContentCalendar } from "./components/ContentCalendar";
import { WeeklyPlannerList } from "./components/WeeklyPlannerList";
import { WeeklyPlannerHeader } from "./components/WeeklyPlannerHeader";


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
        weekStartMonday
    } = useUserContent();

    const completedCount = weeklyPlan.filter((item) => item.completed).length;
    const completionPercentage =
        weeklyPlan.length > 0 ? Math.round((completedCount / weeklyPlan.length) * 100) : 0;

    // -------------------------------
    // Countdown timer (7-day cooldown)
    // -------------------------------
    const calculateTimeLeft = (weekStart?: Date | null) => {
        if (!weekStart) return null;

        const nextMonday = new Date(weekStart);
        nextMonday.setDate(nextMonday.getDate() + 7);

        return Math.max(0, nextMonday.getTime() - Date.now());
    };

    const [timeLeft, setTimeLeft] = useState<number | null>(
        calculateTimeLeft(weekStartMonday)
    );

    useEffect(() => {
        if (!weekStartMonday) {
            setTimeLeft(null);
            return;
        }

        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft(weekStartMonday));
        }, 1000);

        return () => clearInterval(interval);
    }, [weekStartMonday]);

    const isWeekComplete =
        weeklyPlan.length > 0 &&
        weeklyPlan.every((item) => item.completed);
    const isButtonDisabled =
        isGenerating ||
        (!isWeekComplete && timeLeft !== null && timeLeft > 0);

    const handleGenerateWeek = async (isManual: boolean) => {
        try {
            await generateWeeklyPlan(isManual); // pass the flag
        } catch (err) {
            console.error("Failed to generate weekly plan:", err);
        }
    };

    return (
        <div className="min-h-screen bg-paper">
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Header */}
                <WeeklyPlannerHeader
                    userProfession={userProfession}
                    timeLeft={timeLeft}
                    onGenerate={generateWeeklyPlan}
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
                                onClick={() => handleGenerateWeek(false)} // AI
                                disabled={isButtonDisabled}
                                className="btn-main"
                            >
                                <Sparkles className="w-4 h-4 inline mr-2" />
                                Generate with AI
                            </button>

                            {/* Manual option */}
                            <button
                                onClick={() => handleGenerateWeek(true)} // Manual
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
