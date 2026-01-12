import { Sparkles, TrendingUp } from "lucide-react";
import { ContentCard } from "./ContentCard";

interface WeeklyPlannerListProps {
    isWeekComplete: boolean;
    generateWeeklyPlan: () => Promise<void>;
    completionPercentage: any;
    completedCount: any;
    weeklyPlan: any;
    toggleComplete: any;
    regenerateSingle: any;
    saveEdit: any;
    regeneratingIndex: any;
    contentHistory: any;
}
export const WeeklyPlannerList: React.FC<WeeklyPlannerListProps> = ({
    isWeekComplete,
    completionPercentage,
    completedCount,
    weeklyPlan,
    toggleComplete,
    regenerateSingle,
    saveEdit,
    regeneratingIndex,
    contentHistory
}) => {
    return (
        <div
            className={`space-y-4 transition-opacity ${isWeekComplete ? "opacity-50 pointer-events-none" : ""
                }`}
        >
            {isWeekComplete && (
                <div className="card border-2 border-green-500 bg-green-50">
                    <h3 className="text-lg font-bold text-ink mb-1">
                        🎉 Week Complete
                    </h3>
                    <p className="text-sm text-muted">
                        You’ve completed all planned content for this week.
                    </p>
                </div>
            )}

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

            {weeklyPlan.map((item: any, index: any) => (
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

    )
}