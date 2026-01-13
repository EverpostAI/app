"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { Zap, Calendar, TrendingUp, Sparkles, ArrowRight, Check, Brain, Clock, Target } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const LandingPage = () => {
    const router = useRouter(); // initialize the router
    const howItWorksRef = useRef<HTMLDivElement>(null);
    const leftPanelRef = useRef<HTMLDivElement>(null);
    const featureRefs = useRef<HTMLDivElement[]>([]);
    const [activeFeature, setActiveFeature] = useState(0);
    const [displayFeature, setDisplayFeature] = useState(activeFeature);
    const [isFading, setIsFading] = useState(false);
    const [animateBars, setAnimateBars] = useState(false); // Add this new state


    const featureTitles = [
        "AI Strategy",
        "Weekly Planner",
        "Content Memory",
        "Time Saver",
        "Progress Tracking",
        "One-Click Refresh",
    ];

    const featureSubtitles = [
        "Custom content plans for your niche",
        "Get a week of content ideas instantly",
        "Track themes & maintain variety",
        "Spend less time planning, more creating",
        "Visual dashboard shows consistency",
        "Regenerate ideas instantly until perfect",
    ];
    const features = [
        {
            icon: Brain,
            title: "AI Strategy",
            subtitle: "Custom content plans generated for your specific profession.",
            visual: (
                <div className="relative h-full flex flex-col justify-center p-8">
                    {/* Mock AI output card */}
                    <div className="bg-white rounded-2xl border-2 border-border shadow-xl p-6 space-y-4">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                                    <Brain className="w-6 h-6 text-accent" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-ink">Content Strategy</div>
                                    <div className="text-xs text-muted">For Fitness Coach</div>
                                </div>
                            </div>
                            <Sparkles className="w-5 h-5 text-accent animate-pulse" strokeWidth={2} />
                        </div>

                        {/* Content blocks */}
                        <div className="space-y-4">
                            <div className="p-4 bg-gradient-to-r from-accent/5 to-accent/10 rounded-xl border border-accent/20">
                                <div className="text-xs font-bold text-accent mb-2">📌 Hook</div>
                                <div className="space-y-2">
                                    <div className="h-2 bg-accent/30 rounded-full w-full" />
                                    <div className="h-2 bg-accent/20 rounded-full w-4/5" />
                                </div>
                            </div>

                            <div className="p-4 bg-paper rounded-xl border border-border">
                                <div className="text-xs font-bold text-muted mb-2">💡 Main Content</div>
                                <div className="space-y-2">
                                    <div className="h-2 bg-border rounded-full w-full" />
                                    <div className="h-2 bg-border rounded-full w-5/6" />
                                    <div className="h-2 bg-border rounded-full w-3/4" />
                                </div>
                            </div>

                            <div className="p-4 bg-accent/5 rounded-xl border border-accent/20">
                                <div className="text-xs font-bold text-accent mb-2">🎯 CTA</div>
                                <div className="h-2 bg-accent/30 rounded-full w-2/3" />
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
                <div className="relative h-full flex flex-col justify-center p-6">
                    {/* Calendar UI mockup */}
                    <div className="bg-white rounded-2xl border-2 border-border shadow-xl overflow-hidden">
                        {/* Calendar header */}
                        <div className="bg-gradient-to-r from-accent to-accent/80 p-4 flex items-center justify-between">
                            <div className="text-white font-bold">January 2026</div>
                            <Calendar className="w-5 h-5 text-white" strokeWidth={2.5} />
                        </div>

                        {/* Days header */}
                        <div className="grid grid-cols-7 gap-0 bg-paper border-b-2 border-border">
                            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                                <div key={d} className="text-center py-2 text-xs font-bold text-muted">
                                    {d}
                                </div>
                            ))}
                        </div>

                        {/* Calendar grid */}
                        <div className="grid grid-cols-7 gap-0 p-2">
                            {Array.from({ length: 21 }).map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`aspect-square p-1 ${idx % 7 < 5 && idx >= 14 ? '' : 'opacity-40'}`}
                                >
                                    <div
                                        className={`w-full h-full rounded-lg flex flex-col items-center justify-center ${idx % 7 < 5 && idx >= 14
                                            ? "bg-gradient-to-br from-accent to-accent/80 text-white shadow-md"
                                            : "bg-paper"
                                            } transition-all duration-500`}
                                    >
                                        {idx >= 14 && (
                                            <>
                                                <div className="text-xs font-bold">{idx - 6}</div>
                                                {idx % 7 < 5 && <div className="w-1 h-1 bg-white rounded-full mt-1" />}
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Footer stats */}
                        <div className="bg-paper border-t-2 border-border p-3 flex justify-around text-center">
                            <div>
                                <div className="text-lg font-bold text-accent">5</div>
                                <div className="text-xs text-muted">Scheduled</div>
                            </div>
                            <div className="w-px bg-border" />
                            <div>
                                <div className="text-lg font-bold text-ink">2</div>
                                <div className="text-xs text-muted">Posted</div>
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
                <div className="relative h-full flex flex-col justify-center p-6">
                    {/* Theme tracker UI */}
                    <div className="bg-white rounded-2xl border-2 border-border shadow-xl p-6">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2">
                                <Target className="w-5 h-5 text-accent" strokeWidth={2.5} />
                                <span className="font-bold text-ink">Content Themes</span>
                            </div>
                            <div className="text-xs text-muted">Last 30 days</div>
                        </div>

                        <div className="space-y-5">
                            {[
                                { theme: "Tips & Tricks", count: 12, color: "accent" },
                                { theme: "Behind Scenes", count: 8, color: "accent" },
                                { theme: "Client Stories", count: 6, color: "accent" },
                                { theme: "Industry News", count: 4, color: "accent" },
                            ].map((item, i) => (
                                <div key={i}>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-medium text-ink">{item.theme}</span>
                                        <span className="text-sm font-bold text-accent">{item.count}</span>
                                    </div>
                                    <div className="w-full h-3 bg-paper rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-accent/70 to-accent rounded-full transition-all duration-1000 shadow-sm"
                                            style={{ width: `${(item.count / 12) * 100}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Recommendation badge */}
                        <div className="mt-6 p-3 bg-accent/5 rounded-lg border border-accent/20 flex items-start gap-2">
                            <Sparkles className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" strokeWidth={2} />
                            <div className="text-xs text-ink">
                                <span className="font-semibold">Suggestion:</span> Try more "Client Stories" this week!
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
                <div className="relative h-full flex flex-col justify-center p-6">
                    {/* Time comparison dashboard */}
                    <div className="bg-white rounded-2xl border-2 border-border shadow-xl p-8">
                        {/* Before/After comparison */}
                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="text-center">
                                <div className="text-sm font-semibold text-muted mb-2">Before</div>
                                <div className="text-5xl font-bold text-muted/30 mb-1">3hrs</div>
                                <div className="text-xs text-muted">per week</div>
                            </div>
                            <div className="text-center">
                                <div className="text-sm font-semibold text-accent mb-2">With AI</div>
                                <div className="text-5xl font-bold text-accent mb-1 animate-pulse">5min</div>
                                <div className="text-xs text-accent">per week</div>
                            </div>
                        </div>

                        {/* Progress bar */}
                        <div className="mb-4">
                            <div className="w-full h-4 bg-paper rounded-full overflow-hidden shadow-inner">
                                <div
                                    className="h-full bg-gradient-to-r from-accent to-accent/70 rounded-full relative overflow-hidden"
                                    style={{ width: "97%" }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-3">
                            <div className="text-center p-3 bg-accent/5 rounded-lg">
                                <div className="text-2xl font-bold text-accent">97%</div>
                                <div className="text-xs text-muted mt-1">Time Saved</div>
                            </div>
                            <div className="text-center p-3 bg-accent/5 rounded-lg">
                                <div className="text-2xl font-bold text-accent">156</div>
                                <div className="text-xs text-muted mt-1">Hours/Year</div>
                            </div>
                            <div className="text-center p-3 bg-accent/5 rounded-lg">
                                <div className="text-2xl font-bold text-accent">∞</div>
                                <div className="text-xs text-muted mt-1">Ideas</div>
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
            visual: (
                <div className="relative h-full flex flex-col justify-center p-6">
                    {/* Analytics dashboard */}
                    <div className="bg-white rounded-2xl border-2 border-border shadow-xl p-6">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-accent" strokeWidth={2.5} />
                                <span className="font-bold text-ink">Analytics</span>
                            </div>
                            <div className="px-3 py-1 bg-accent/10 rounded-full text-xs font-semibold text-accent">
                                +23% this week
                            </div>
                        </div>
                        {/* Bar chart with animation */}
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
                                            className={`w-full bg-gradient-to-t from-accent/50 to-accent rounded-t-lg shadow-md ${animateBars ? 'animate-grow-bar' : ''}`}
                                            style={{
                                                height: `${bar.height}%`,
                                                animationDelay: animateBars ? bar.delay : '0s',
                                                animationDuration: '0.8s',
                                                animationFillMode: 'both',
                                                transform: animateBars ? undefined : 'scaleY(0)',
                                                transformOrigin: 'bottom'
                                            }}
                                        >
                                        </div>
                                    </div>
                                    <div className="text-xs font-medium text-muted">{bar.label}</div>
                                </div>
                            ))}
                        </div>
                        {/* Stats row */}
                        <div className="grid grid-cols-2 gap-4 pt-4 border-t-2 border-border">
                            <div>
                                <div className="text-3xl font-bold text-accent mb-1">87%</div>
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
                <div className="relative h-full flex flex-col justify-center p-6">
                    {/* Content regeneration UI */}
                    <div className="bg-white rounded-2xl border-2 border-border shadow-xl p-6">
                        <div className="flex items-center justify-between mb-6">
                            <span className="font-bold text-ink">Generated Ideas</span>
                            <div className="flex items-center gap-1 text-xs text-muted">
                                <Zap className="w-3 h-3" strokeWidth={2} />
                                <span>v3</span>
                            </div>
                        </div>

                        {/* Content cards */}
                        <div className="space-y-3 mb-4">
                            {[
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
                                    <div className="flex items-start gap-3">
                                        <Sparkles
                                            className={`w-5 h-5 mt-0.5 flex-shrink-0 ${item.active ? "text-accent animate-pulse" : "text-muted"
                                                }`}
                                            strokeWidth={2}
                                        />
                                        <div className="flex-1 min-w-0">
                                            <div className="text-sm font-medium text-ink mb-1 line-clamp-2">
                                                {item.title}
                                            </div>
                                            <span className="inline-block px-2 py-0.5 bg-white rounded-full text-xs font-semibold text-muted border border-border">
                                                {item.tag}
                                            </span>
                                        </div>
                                        {item.active && (
                                            <Check className="w-5 h-5 text-accent flex-shrink-0" strokeWidth={2.5} />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Regenerate button */}
                        <button className="w-full py-3 bg-gradient-to-r from-accent to-accent/80 text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:scale-[1.02] transition-all shadow-md">
                            <Zap className="w-5 h-5" strokeWidth={2.5} />
                            Regenerate Ideas
                        </button>

                        {/* Small hint text */}
                        <div className="text-center text-xs text-muted mt-3">
                            Unlimited regenerations • AI learns from your picks
                        </div>
                    </div>
                </div>
            ),
        },
    ];
    useEffect(() => {
        const handleScroll = () => {
            if (!leftPanelRef.current) return;

            const panel = leftPanelRef.current;
            const rect = panel.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Trigger when the panel's top reaches ~50% of viewport height
            const triggerPoint = windowHeight * 0.9;

            // We want full animation complete when panel top reaches top of viewport (or slightly above)
            const fullPoint = 0;
            let progress = 0; // Declare once here
            // Calculate progress: 0 when panel top is at triggerPoint, 1 when at fullPoint
            if (rect.top >= triggerPoint) {
                // Still above trigger → progress = 0
                progress = 0;
            } else if (rect.top <= fullPoint) {
                // Already past full point → progress = 1
                progress = 1;
            } else {
                // In between → linear progress
                progress = (triggerPoint - rect.top) / (triggerPoint - fullPoint);
            }

            // Smooth easing (optional, but nice)
            const eased = progress * progress * (3 - 2 * progress); // smoothstep

            const rotate = -15 + eased * 17;         // from -15° → 0°
            const translateX = -100 + eased * 100;   // from -100px → 0px

            panel.style.transform = `translateX(${translateX}px) rotate(${rotate > 0 ? 0 : rotate}deg)`;
            panel.style.opacity = `${0.2 + eased * 0.8}`; // optional: fade in from low opacity
            panel.style.transition = 'transform 0.1s ease-out, opacity 0.1s ease-out'; // smooth even on fast scroll
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // run once on mount

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    // Smooth scroll function
    const scrollToHowItWorks = () => {
        howItWorksRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = featureRefs.current.indexOf(entry.target as HTMLDivElement);
                    if (entry.isIntersecting && index !== -1) {
                        setActiveFeature(index);
                        entry.target.classList.add("animate-slide-fade-in");

                        // Trigger bar animation for Progress Tracking feature (index 4)
                        if (index === 4) {
                            setAnimateBars(true);
                        }
                    }
                });
            },
            { threshold: 0.5 }
        );

        featureRefs.current.forEach((card) => card && observer.observe(card));

        return () => observer.disconnect();
    }, []);

    // Intersection Observer for feature animations
    useEffect(() => {
        const cards = document.querySelectorAll(".feature-card");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-slide-fade-in");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);
    useEffect(() => {
        // Start fade out
        setIsFading(true);

        const timeout = setTimeout(() => {
            // Update displayed feature after fade out
            setDisplayFeature(activeFeature);
            setIsFading(false); // Fade in
        }, 100); // 200ms fade-out duration

        return () => clearTimeout(timeout);
    }, [activeFeature]);
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            const featuresSection = document.querySelector(".features-section");
            let speed = 0.6; // default scroll speed (60%)

            if (featuresSection) {
                const rect = featuresSection.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    // Inside Features section → slower scroll
                    speed = 0.4;
                }
            }

            e.preventDefault(); // prevent default fast scroll
            window.scrollBy({
                top: e.deltaY * speed,
                left: 0,
            });
        };

        window.addEventListener("wheel", handleWheel, { passive: false });

        return () => window.removeEventListener("wheel", handleWheel);
    }, []);

    return (
        <div className="min-h-screen bg-paper">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                {/* Subtle grid background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]"></div>

                <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-32">
                    <div className="text-center max-w-4xl mx-auto">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-border rounded-full mb-8">
                            <Sparkles className="w-4 h-4 text-accent" strokeWidth={2.5} />
                            <span className="text-sm font-semibold text-ink">AI-Powered Content Strategy</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-6xl md:text-7xl font-bold text-ink mb-6 tracking-tight leading-none">
                            Plan a Week of Content
                            <br />
                            <span className="relative inline-block text-accent">
                                In 30 Seconds
                                <span className="absolute left-0 bottom-1 w-full h-2 bg-accent/15"></span>
                            </span>
                        </h1>
                        {/* Subheadline */}
                        <p className="text-2xl text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
                            An AI content strategist that turns vague ideas into a
                            <span className="text-ink font-semibold"> full, ready-to-post calendar </span>
                            in minutes — not hours.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                            <button
                                className="btn-main text-lg px-8 py-4 group"
                                onClick={() => router.push("/signup")} // navigate to signup
                            >
                                Start My Content Plan
                                <ArrowRight
                                    className="w-5 h-5 inline ml-2 group-hover:translate-x-1 transition-transform"
                                    strokeWidth={2.5}
                                />
                            </button>
                            <button
                                className="btn-secondary text-lg px-8 py-4"
                                onClick={scrollToHowItWorks}
                            >
                                See How It Works
                            </button>

                        </div>
                        <p className="text-sm text-muted mb-4">
                            No credit card<span className="mx-2">•</span>30 seconds to first plan
                        </p>

                        <p className="text-sm text-muted">
                            Trusted by <span className="font-semibold text-ink">2,847 creators</span> to plan content in under 5 minutes
                        </p>
                    </div>

                    {/* Hero Visual - Content Calendar Preview */}
                    <div className="mt-20 max-w-5xl mx-auto">
                        <div className="card-flat border-2 border-border shadow-2xl">
                            <div className="bg-paper border-b-2 border-border p-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                                        <Calendar className="w-4 h-4 text-white" strokeWidth={2.5} />
                                    </div>
                                    <span className="font-semibold text-ink">This Week's Plan</span>
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                                    <div className="w-3 h-3 rounded-full bg-border"></div>
                                    <div className="w-3 h-3 rounded-full bg-border"></div>
                                </div>
                            </div>
                            <div className="p-6 space-y-3">
                                {['Monday', 'Tuesday', 'Wednesday'].map((day, i) => (
                                    <div key={day} className="flex items-center gap-4 p-4 bg-white border-2 border-border rounded-lg">
                                        <div className="w-5 h-5 border-2 border-border rounded flex items-center justify-center">
                                            {i === 0 && <Check className="w-3 h-3 text-accent" strokeWidth={3} />}
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-xs font-semibold text-muted uppercase tracking-wide mb-1">{day} • Instagram</div>
                                            <div className="h-3 bg-paper rounded w-3/4"></div>
                                        </div>
                                        <Sparkles className="w-4 h-4 text-muted" strokeWidth={2} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Problem Section */}
            <div className="bg-ink text-white py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                            Content Creation Shouldn't Feel Like Work
                        </h2>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            You're juggling your business, serving clients, and trying to stay visible online.
                            The last thing you need is spending hours brainstorming what to post next.
                        </p>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-paper relative features-section">
                {/* Connecting vertical line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 relative">
                    {/* Left Sticky Panel */}
                    <div
                        ref={leftPanelRef}
                        className="sticky top-20 self-start py-24 left-panel transition-all duration-300 relative"
                    >
                        <h2
                            className={`text-4xl md:text-5xl font-bold text-ink mb-4 tracking-tight transition-opacity duration-200 ease-out ${isFading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                                }`}
                        >
                            {featureTitles[displayFeature]}
                        </h2>
                        <p
                            className={`text-xl text-muted transition-opacity duration-200 ease-out ${isFading ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                                }`}
                        >
                            {featureSubtitles[displayFeature]}
                        </p>
                    </div>

                    {/* Right Scrollable Features */}
                    <div className="relative">
                        {features.map((feature, i) => (
                            <div
                                key={i}
                                ref={(el: any) => el && (featureRefs.current[i] = el)}
                                className={`min-h-screen flex items-center py-12 relative ${i === 0 ? 'pt-32' : ''}`}
                            >
                                {/* Connecting line stub from center to card */}
                                <div className="absolute -left-6 top-1/2 w-6 h-0.5 bg-border hidden md:block"></div>

                                <div
                                    className="feature-card w-full"
                                    style={{ opacity: 0, transform: 'translateY(2rem)' }}
                                >
                                    <div className="flex justify-center">
                                        <div
                                            className={`relative w-full max-w-md h-96 transition-all duration-500 ${displayFeature === i ? 'scale-100 opacity-100' : 'scale-95 opacity-70'}`}
                                        >
                                            {feature.visual}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* How It Works */}
            <div ref={howItWorksRef} className="py-24 bg-white border-y-2 border-border" id="how-it-works">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4 tracking-tight">
                            From Blank Page to Full Calendar
                        </h2>
                        <p className="text-xl text-muted">In literally 3 steps</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                                1
                            </div>
                            <h3 className="text-xl font-bold text-ink mb-3">Tell Us Your Profession</h3>
                            <p className="text-muted">
                                Baker, trainer, designer – we tailor everything to your specific niche.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                                2
                            </div>
                            <h3 className="text-xl font-bold text-ink mb-3">AI Generates Your Plan</h3>
                            <p className="text-muted">
                                Get 7 days of platform-specific content ideas with hooks in 30 seconds.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                                3
                            </div>
                            <h3 className="text-xl font-bold text-ink mb-3">Create & Track</h3>
                            <p className="text-muted">
                                Mark posts complete, edit ideas, or regenerate. Watch your progress grow.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Social Proof / Testimonials */}
            <div className="py-24 bg-paper">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4 tracking-tight">
                            Loved by Busy Creators
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="card-flat border-2 border-border">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-accent rounded-full"></div>
                                <div>
                                    <div className="font-bold text-ink">Sarah Chen</div>
                                    <div className="text-sm text-muted">Fitness Coach</div>
                                </div>
                            </div>
                            <p className="text-muted leading-relaxed">
                                "I went from spending 3 hours planning content to 5 minutes. Game changer for my business."
                            </p>
                        </div>

                        <div className="card-flat border-2 border-border">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-ink rounded-full"></div>
                                <div>
                                    <div className="font-bold text-ink">Marcus Johnson</div>
                                    <div className="text-sm text-muted">Real Estate Agent</div>
                                </div>
                            </div>
                            <p className="text-muted leading-relaxed">
                                "Finally consistent on social media without the stress. My engagement is up 300%."
                            </p>
                        </div>

                        <div className="card-flat border-2 border-border">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-muted rounded-full"></div>
                                <div>
                                    <div className="font-bold text-ink">Emma Rodriguez</div>
                                    <div className="text-sm text-muted">Bakery Owner</div>
                                </div>
                            </div>
                            <p className="text-muted leading-relaxed">
                                "The AI actually understands my business. Every idea is relevant and on-brand."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Final CTA */}
            <div className="py-32 bg-ink text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <Zap className="w-16 h-16 mx-auto mb-6 text-accent" strokeWidth={2.5} />
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                        Ready to Never Run Out of Ideas?
                    </h2>
                    <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                        Join thousands of creators who've transformed their content game.
                        Start free, no credit card required.
                    </p>
                    <button
                        className="btn-hero group"
                        onClick={() => router.push("/signup")}
                    >
                        Start Creating Now
                        <ArrowRight className="w-6 h-6 inline ml-2 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                    </button>
                    <p className="text-sm text-gray-400 mt-6">
                        Free forever. Upgrade only when you're ready.
                    </p>
                </div>
            </div>
        </div>
    );
};