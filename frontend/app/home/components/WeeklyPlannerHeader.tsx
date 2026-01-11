import { Calendar, RefreshCw } from "lucide-react"

interface WeeklyPlannerHeaderProps {
    userProfession: string | null;
    timeLeft: number | null;
    onGenerate: () => void;
    isGenerating: boolean;
    isDisabled: boolean; // ✅
}

const formatTime = (ms: number) => {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
};

export const WeeklyPlannerHeader: React.FC<WeeklyPlannerHeaderProps> = ({
    userProfession,
    timeLeft,
    onGenerate,
    isGenerating,
    isDisabled
}) => {
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
            <div>
                {timeLeft !== null && timeLeft > 0 ? (
                    <p className="text-sm text-red-500 font-medium">
                        Free plan users can only generate a new week once per week.
                        <br />
                        You can generate a new week in {formatTime(timeLeft)}
                    </p>
                ) : (
                    <button
                        onClick={onGenerate}
                        disabled={isDisabled}
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

    )
}