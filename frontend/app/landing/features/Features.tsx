import { Brain, Calendar, Check, Clock, Sparkles, Target, TrendingUp, Zap } from "lucide-react";

export const featureTitles = [
    "AI Strategy",
    "Weekly Planner",
    "Content Memory",
    "Time Saver",
    "Progress Tracking",
    "One-Click Refresh",
];

export const featureSubtitles = [
    "Custom content plans for your niche",
    "Get a week of content ideas instantly",
    "Track themes & maintain variety",
    "Spend less time planning, more creating",
    "Visual dashboard shows consistency",
    "Regenerate ideas instantly until perfect",
];
export const features = [
    {
        icon: Brain,
        title: "AI Strategy",
        subtitle: "Custom content plans generated for your specific profession.",
        visual: (
            <div className="relative h-full flex flex-col justify-center p-8" >
                {/* Mock AI output card */}
                < div className="bg-white rounded-2xl border-2 border-border shadow-xl p-6 space-y-4" >
                    {/* Header */}
                    < div className="flex items-center justify-between mb-6" >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                                <Brain className="w-6 h-6 text-accent" strokeWidth={2.5} />
                            </div>
                            < div >
                                <div className="text-sm font-bold text-ink"> Content Strategy</ div >
                                <div className="text-xs text-muted" > For Fitness Coach </div>
                            </div>
                        </div>
                        < Sparkles className="w-5 h-5 text-accent animate-pulse" strokeWidth={2} />
                    </div>

                    {/* Content blocks */}
                    < div className="space-y-4" >
                        <div className="p-4 bg-gradient-to-r from-accent/5 to-accent/10 rounded-xl border border-accent/20" >
                            <div className="text-xs font-bold text-accent mb-2" >📌 Hook </div>
                            < div className="space-y-2" >
                                <div className="h-2 bg-accent/30 rounded-full w-full" />
                                <div className="h-2 bg-accent/20 rounded-full w-4/5" />
                            </div>
                        </div>

                        < div className="p-4 bg-paper rounded-xl border border-border" >
                            <div className="text-xs font-bold text-muted mb-2" >💡 Main Content </div>
                            < div className="space-y-2" >
                                <div className="h-2 bg-border rounded-full w-full" />
                                <div className="h-2 bg-border rounded-full w-5/6" />
                                <div className="h-2 bg-border rounded-full w-3/4" />
                            </div>
                        </div>

                        < div className="p-4 bg-accent/5 rounded-xl border border-accent/20" >
                            <div className="text-xs font-bold text-accent mb-2" >🎯 CTA </div>
                            < div className="h-2 bg-accent/30 rounded-full w-2/3" />
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        icon: Calendar,
        title: "Weekly Planner",
        subtitle: "Get a week of content ideas instantly.",
        visual: (
            <div className="relative h-full flex flex-col justify-center p-6" >
                {/* Calendar UI mockup */}
                < div className="bg-white rounded-2xl border-2 border-border shadow-xl overflow-hidden" >
                    {/* Calendar header */}
                    < div className="bg-gradient-to-r from-accent to-accent/80 p-4 flex items-center justify-between" >
                        <div className="text-white font-bold" > January 2026 </div>
                        < Calendar className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </div>

                    {/* Days header */}
                    <div className="grid grid-cols-7 gap-0 bg-paper border-b-2 border-border" >
                        {
                            ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                                <div key={d} className="text-center py-2 text-xs font-bold text-muted" >
                                    {d}
                                </div>
                            ))
                        }
                    </div>

                    {/* Calendar grid */}
                    <div className="grid grid-cols-7 gap-0 p-2" >
                        {
                            Array.from({ length: 21 }).map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`aspect-square p-1 ${idx % 7 < 5 && idx >= 14 ? '' : 'opacity-40'}`}
                                >
                                    <div
                                        className={
                                            `w-full h-full rounded-lg flex flex-col items-center justify-center ${idx % 7 < 5 && idx >= 14
                                                ? "bg-gradient-to-br from-accent to-accent/80 text-white shadow-md"
                                                : "bg-paper"
                                            } transition-all duration-500`
                                        }
                                    >
                                        {idx >= 14 && (
                                            <>
                                                <div className="text-xs font-bold" > {idx - 6
                                                } </div>
                                                {idx % 7 < 5 && <div className="w-1 h-1 bg-white rounded-full mt-1" />}
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
                    </div>

                    {/* Footer stats */}
                    <div className="bg-paper border-t-2 border-border p-3 flex justify-around text-center" >
                        <div>
                            <div className="text-lg font-bold text-accent" > 5 </div>
                            < div className="text-xs text-muted" > Scheduled </div>
                        </div>
                        < div className="w-px bg-border" />
                        <div>
                            <div className="text-lg font-bold text-ink" > 2 </div>
                            < div className="text-xs text-muted" > Posted </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        icon: Target,
        title: "Content Memory",
        subtitle: "AI tracks your themes to ensure variety.",
        visual: (
            <div className="relative h-full flex flex-col justify-center p-6" >
                {/* Theme tracker UI */}
                < div className="bg-white rounded-2xl border-2 border-border shadow-xl p-6" >
                    <div className="flex items-center justify-between mb-6" >
                        <div className="flex items-center gap-2" >
                            <Target className="w-5 h-5 text-accent" strokeWidth={2.5} />
                            <span className="font-bold text-ink" > Content Themes </span>
                        </div>
                        < div className="text-xs text-muted" > Last 30 days </div>
                    </div>

                    < div className="space-y-5" >
                        {
                            [
                                { theme: "Tips & Tricks", count: 12, color: "accent" },
                                { theme: "Behind Scenes", count: 8, color: "accent" },
                                { theme: "Client Stories", count: 6, color: "accent" },
                                { theme: "Industry News", count: 4, color: "accent" },
                            ].map((item, i) => (
                                <div key={i} >
                                    <div className="flex items-center justify-between mb-2" >
                                        <span className="text-sm font-medium text-ink" > {item.theme} </span>
                                        < span className="text-sm font-bold text-accent" > {item.count} </span>
                                    </div>
                                    < div className="w-full h-3 bg-paper rounded-full overflow-hidden" >
                                        <div
                                            className="h-full bg-gradient-to-r from-accent/70 to-accent rounded-full transition-all duration-1000 shadow-sm"
                                            style={{ width: `${(item.count / 12) * 100}%` }}
                                        />
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    {/* Recommendation badge */}
                    <div className="mt-6 p-3 bg-accent/5 rounded-lg border border-accent/20 flex items-start gap-2" >
                        <Sparkles className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" strokeWidth={2} />
                        <div className="text-xs text-ink" >
                            <span className="font-semibold" > Suggestion: </span> Try more "Client Stories" this week!
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        icon: Clock,
        title: "Time Saver",
        subtitle: "Spend less time planning, more time creating.",
        visual: (
            <div className="relative h-full flex flex-col justify-center p-6" >
                {/* Time comparison dashboard */}
                < div className="bg-white rounded-2xl border-2 border-border shadow-xl p-8" >
                    {/* Before/After comparison */}
                    < div className="grid grid-cols-2 gap-6 mb-8" >
                        <div className="text-center" >
                            <div className="text-sm font-semibold text-muted mb-2" > Before </div>
                            < div className="text-5xl font-bold text-muted/30 mb-1" > 3hrs </div>
                            < div className="text-xs text-muted" > per week </div>
                        </div>
                        < div className="text-center" >
                            <div className="text-sm font-semibold text-accent mb-2" > With AI </div>
                            < div className="text-5xl font-bold text-accent mb-1 animate-pulse" > 5min </div>
                            < div className="text-xs text-accent" > per week </div>
                        </div>
                    </div>

                    {/* Progress bar */}
                    <div className="mb-4" >
                        <div className="w-full h-4 bg-paper rounded-full overflow-hidden shadow-inner" >
                            <div
                                className="h-full bg-gradient-to-r from-accent to-accent/70 rounded-full relative overflow-hidden"
                                style={{ width: "97%" }
                                }
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3" >
                        <div className="text-center p-3 bg-accent/5 rounded-lg" >
                            <div className="text-2xl font-bold text-accent" > 97 % </div>
                            < div className="text-xs text-muted mt-1" > Time Saved </div>
                        </div>
                        < div className="text-center p-3 bg-accent/5 rounded-lg" >
                            <div className="text-2xl font-bold text-accent" > 156 </div>
                            < div className="text-xs text-muted mt-1" > Hours / Year </div>
                        </div>
                        < div className="text-center p-3 bg-accent/5 rounded-lg" >
                            <div className="text-2xl font-bold text-accent" >∞</div>
                            < div className="text-xs text-muted mt-1" > Ideas </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        icon: TrendingUp,
        title: "Progress Tracking",
        subtitle: "Visual dashboard shows your consistency.",
        visual: (props: { animateBars: boolean }) => (
            <div className="relative h-full flex flex-col justify-center p-6">
                {/* Analytics dashboard */}
                <div className="bg-white rounded-2xl border-2 border-border shadow-xl p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-accent" strokeWidth={2.5} />
                            <span className="font-bold text-ink">Analytics</span>
                        </div>
                        <div className="px-3 py-1 bg-accent/10 rounded-full text-xs font-semibold text-accent">
                            +23 % this week
                        </div>
                    </div>

                    {/* Bar Chart */}
                    <div className="flex items-end justify-between gap-2 h-40 mb-6">
                        {[
                            { height: 45, label: "Mon", delay: "0s" },
                            { height: 68, label: "Tue", delay: "0.1s" },
                            { height: 52, label: "Wed", delay: "0.2s" },
                            { height: 85, label: "Thu", delay: "0.3s" },
                            { height: 72, label: "Fri", delay: "0.4s" },
                            { height: 95, label: "Sat", delay: "0.5s" },
                            { height: 100, label: "Sun", delay: "0.6s" },
                        ].map((bar, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full">
                                <div className="w-full h-full flex items-end">
                                    <div
                                        className={`w-full bg-gradient-to-t from-accent/50 to-accent rounded-t-lg shadow-md ${props.animateBars ? "animate-grow-bar" : ""
                                            }`}
                                        style={{
                                            height: `${bar.height}%`,
                                            animationDelay: props.animateBars ? bar.delay : "0s",
                                            animationDuration: "0.8s",
                                            animationFillMode: "both",
                                            transform: props.animateBars ? undefined : "scaleY(0)",
                                            transformOrigin: "bottom",
                                        }}
                                    ></div>
                                </div>
                                <div className="text-xs font-medium text-muted">{bar.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t-2 border-border">
                        <div>
                            <div className="text-3xl font-bold text-accent mb-1">87 %</div>
                            <div className="text-xs text-muted">Consistency Rate</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-ink mb-1">24</div>
                            <div className="text-xs text-muted">Posts This Month</div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        icon: Zap,
        title: "One-Click Refresh",
        subtitle: "Regenerate ideas instantly until perfect.",
        visual: (
            <div className="relative h-full flex flex-col justify-center p-6" >
                {/* Content regeneration UI */}
                < div className="bg-white rounded-2xl border-2 border-border shadow-xl p-6" >
                    <div className="flex items-center justify-between mb-6" >
                        <span className="font-bold text-ink" > Generated Ideas </span>
                        < div className="flex items-center gap-1 text-xs text-muted" >
                            <Zap className="w-3 h-3" strokeWidth={2} />
                            <span>v3 </span>
                        </div>
                    </div>

                    {/* Content cards */}
                    <div className="space-y-3 mb-4" >
                        {
                            [
                                { title: "5 Morning Habits That Changed My Life", tag: "Tips", active: true },
                                { title: "Behind the Scenes: My Workout Routine", tag: "BTS", active: false },
                                { title: "Client Transformation: Sarah's Journey", tag: "Story", active: false },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${item.active
                                        ? "bg-accent/5 border-accent/30 shadow-md"
                                        : "bg-paper border-border"
                                        }`}
                                >
                                    <div className="flex items-start gap-3" >
                                        <Sparkles
                                            className={
                                                `w-5 h-5 mt-0.5 flex-shrink-0 ${item.active ? "text-accent animate-pulse" : "text-muted"
                                                }`
                                            }
                                            strokeWidth={2}
                                        />
                                        <div className="flex-1 min-w-0" >
                                            <div className="text-sm font-medium text-ink mb-1 line-clamp-2" >
                                                {item.title}
                                            </div>
                                            < span className="inline-block px-2 py-0.5 bg-white rounded-full text-xs font-semibold text-muted border border-border" >
                                                {item.tag}
                                            </span>
                                        </div>
                                        {
                                            item.active && (
                                                <Check className="w-5 h-5 text-accent flex-shrink-0" strokeWidth={2.5} />
                                            )
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    {/* Regenerate button */}
                    <button className="w-full py-3 bg-gradient-to-r from-accent to-accent/80 text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:scale-[1.02] transition-all shadow-md" >
                        <Zap className="w-5 h-5" strokeWidth={2.5} />
                        Regenerate Ideas
                    </button>

                    {/* Small hint text */}
                    <div className="text-center text-xs text-muted mt-3" >
                        Unlimited regenerations • AI learns from your picks
                    </div>
                </div>
            </div>
        ),
    },
];