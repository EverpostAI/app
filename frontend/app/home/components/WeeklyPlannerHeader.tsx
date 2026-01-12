import { Calendar, RefreshCw, Lock } from "lucide-react"
import * as React from "react";
interface WeeklyPlannerHeaderProps {
    userProfession: string | null;
    timeLeft: number | null; // cooldown for AI
    onGenerate: (isManual: boolean) => void;
    isGenerating: boolean;
}

const formatTime = (ms: number) => {
    const totalMinutes = Math.ceil(ms / (1000 * 60));
    const days = Math.floor(totalMinutes / (60 * 24));
    const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
    const minutes = totalMinutes % 60;

    const parts = [];
    if (days > 0) parts.push(`${days} day${days > 1 ? "s" : ""}`);
    if (hours > 0) parts.push(`${hours}h`);
    if (days === 0 && minutes > 0) parts.push(`${minutes}m`); // only show minutes if <1 day

    return parts.join(" ");
};


export const WeeklyPlannerHeader: React.FC<WeeklyPlannerHeaderProps> = ({
    userProfession,
    timeLeft,
    onGenerate,
    isGenerating
}) => {
    const aiDisabled = timeLeft !== null && timeLeft > 0;

    return (
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
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="flex gap-4">
                    {/* AI button with tooltip wrapper */}
                    <div className="relative group">
                        <button
                            onClick={() => onGenerate(false)}
                            disabled={aiDisabled || isGenerating}
                            className={`btn-main whitespace-nowrap ${aiDisabled ? "opacity-50 cursor-not-allowed" : ""
                                } ${isGenerating ? "animate-pulse" : ""}`}
                        >
                            {aiDisabled ? (
                                <Lock className="w-4 h-4 inline mr-2" /> // lock instead of refresh
                            ) : (
                                <RefreshCw className={`w-4 h-4 inline mr-2 ${isGenerating ? "animate-spin" : ""}`} />
                            )}
                            {aiDisabled ? "AI Locked" : "Generate With AI"}
                        </button>

                        {aiDisabled && (
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                                Next AI plan available in {formatTime(timeLeft!)}
                            </div>
                        )}
                    </div>
                    {/* Manual button */}
                    <button
                        onClick={() => onGenerate(true)}
                        className="btn-secondary whitespace-nowrap"
                    >
                        <Calendar className="w-4 h-4 inline mr-2" />
                        Plan Manually
                    </button>
                </div>
            </div>
        </div>
    )
}
