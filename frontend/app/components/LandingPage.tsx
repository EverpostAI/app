"use client";
import { useRouter } from "next/navigation";
import { Zap, Calendar, TrendingUp, Sparkles, ArrowRight, Check, Brain, Clock, Target } from "lucide-react";
import { useEffect, useRef } from "react";

export const LandingPage = () => {
    const router = useRouter(); // initialize the router
    const howItWorksRef = useRef<HTMLDivElement>(null);
    const leftPanelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!leftPanelRef.current) return;

            const panel = leftPanelRef.current;
            const rect = panel.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Trigger when the panel's top reaches ~50% of viewport height
            const triggerPoint = windowHeight * 0.5;

            // We want full animation complete when panel top reaches top of viewport (or slightly above)
            const fullPoint = 0; // or -100 if you want it done a bit earlier
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
                            Stop Staring at
                            <br />
                            <span className="text-accent">Blank Screens</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-2xl text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
                            Your AI content strategist that plans, schedules, and tracks every post.
                            Turn ideas into reality in seconds.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                            <button
                                className="btn-main text-lg px-8 py-4 group"
                                onClick={() => router.push("/signup")} // navigate to signup
                            >
                                Start Creating Free
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

                        {/* Social Proof */}
                        <p className="text-sm text-muted">
                            Join <span className="font-semibold text-ink">2,847 creators</span> who never run out of ideas
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
            <div className="bg-paper">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
                    {/* Left Sticky Panel */}
                    <div
                        ref={leftPanelRef}
                        className="sticky top-20 self-start py-24 left-panel"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4 tracking-tight">
                            Everything You Need to Win at Content
                        </h2>
                        <p className="text-xl text-muted">Built for creators who mean business</p>
                    </div>


                    {/* Right Scrollable Features */}
                    <div>
                        {/* AI Strategy */}
                        <div className="min-h-screen flex items-center py-12">
                            <div className="card group cursor-pointer feature-card w-full" style={{ opacity: 0, transform: 'translateY(2rem)' }}>
                                <div className="flex flex-col lg:flex-row items-center gap-8">
                                    <div className="flex-1">
                                        <div className="w-16 h-16 bg-paper rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                                            <Brain className="w-8 h-8 text-accent group-hover:text-white transition-colors" strokeWidth={2.5} />
                                        </div>
                                        <h3 className="text-3xl font-bold text-ink mb-4">AI Strategy</h3>
                                        <p className="text-xl text-muted leading-relaxed mb-6">Custom content plans generated for your specific profession.</p>
                                    </div>
                                    <div className="relative w-full lg:w-64 h-64">
                                        <div className="absolute top-4 left-4 w-full h-full bg-accent/10 rounded-2xl" />
                                        <div className="relative bg-white border-2 border-border rounded-2xl p-6 h-full flex flex-col">
                                            <div className="flex items-center gap-3 mb-4">
                                                <Brain className="w-6 h-6 text-accent" strokeWidth={2.5} />
                                                <div className="h-3 bg-paper rounded w-24" />
                                            </div>
                                            <div className="space-y-3 flex-1">
                                                <div className="h-3 bg-paper rounded w-full" />
                                                <div className="h-3 bg-paper rounded w-5/6" />
                                                <div className="h-3 bg-paper rounded w-4/6" />
                                                <div className="mt-4 p-3 bg-accent/5 rounded-lg border border-accent/20">
                                                    <div className="h-2 bg-accent/30 rounded w-32 mb-2" />
                                                    <div className="h-2 bg-accent/20 rounded w-24" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Weekly Planner */}
                        <div className="min-h-screen flex items-center py-12">
                            <div className="card group cursor-pointer feature-card w-full" style={{ opacity: 0, transform: 'translateY(2rem)' }}>
                                <div className="flex flex-col lg:flex-row items-center gap-8">
                                    <div className="flex-1">
                                        <div className="w-16 h-16 bg-paper rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                                            <Calendar className="w-8 h-8 text-accent group-hover:text-white transition-colors" strokeWidth={2.5} />
                                        </div>
                                        <h3 className="text-3xl font-bold text-ink mb-4">Weekly Planner</h3>
                                        <p className="text-xl text-muted leading-relaxed mb-6">Get a full week of content ideas in 30 seconds.</p>
                                    </div>
                                    <div className="relative w-full lg:w-64 h-64">
                                        <div className="absolute top-4 left-4 w-full h-full bg-accent/10 rounded-2xl" />
                                        <div className="relative bg-white border-2 border-border rounded-2xl p-4 h-full">
                                            <div className="grid grid-cols-7 gap-1 mb-3">
                                                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                                                    <div key={i} className="text-center text-xs font-bold text-muted">{day}</div>
                                                ))}
                                            </div>
                                            <div className="grid grid-cols-7 gap-1">
                                                {Array.from({ length: 21 }).map((_, i) => (
                                                    <div key={i} className={`aspect-square rounded ${i % 7 < 5 ? 'bg-accent' : 'bg-paper'} ${i < 14 ? 'opacity-40' : ''}`} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Memory */}
                        <div className="min-h-screen flex items-center py-12">
                            <div className="card group cursor-pointer feature-card w-full" style={{ opacity: 0, transform: 'translateY(2rem)' }}>
                                <div className="flex flex-col lg:flex-row items-center gap-8">
                                    <div className="flex-1">
                                        <div className="w-16 h-16 bg-paper rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                                            <Target className="w-8 h-8 text-accent group-hover:text-white transition-colors" strokeWidth={2.5} />
                                        </div>
                                        <h3 className="text-3xl font-bold text-ink mb-4">Content Memory</h3>
                                        <p className="text-xl text-muted leading-relaxed mb-6">AI tracks your themes to ensure variety.</p>
                                    </div>
                                    <div className="relative w-full lg:w-64 h-64">
                                        <div className="absolute top-4 left-4 w-full h-full bg-accent/10 rounded-2xl" />
                                        <div className="relative bg-white border-2 border-border rounded-2xl p-6 h-full flex flex-col justify-center">
                                            <div className="space-y-4">
                                                {['Tips & Tricks', 'Behind Scenes', 'Client Stories', 'Industry News'].map((theme, i) => (
                                                    <div key={i} className="flex items-center gap-3">
                                                        <div className="w-3 h-3 rounded-full bg-accent" style={{ opacity: 1 - i * 0.2 }} />
                                                        <div className="flex-1 h-2 bg-paper rounded" style={{ width: `${100 - i * 15}%` }} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Time Saver */}
                        <div className="min-h-screen flex items-center py-12">
                            <div className="card group cursor-pointer feature-card w-full" style={{ opacity: 0, transform: 'translateY(2rem)' }}>
                                <div className="flex flex-col lg:flex-row items-center gap-8">
                                    <div className="flex-1">
                                        <div className="w-16 h-16 bg-paper rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                                            <Clock className="w-8 h-8 text-accent group-hover:text-white transition-colors" strokeWidth={2.5} />
                                        </div>
                                        <h3 className="text-3xl font-bold text-ink mb-4">Time Saver</h3>
                                        <p className="text-xl text-muted leading-relaxed mb-6">Spend less time planning, more time creating.</p>
                                    </div>
                                    <div className="relative w-full lg:w-64 h-64">
                                        <div className="absolute top-4 left-4 w-full h-full bg-accent/10 rounded-2xl" />
                                        <div className="relative bg-white border-2 border-border rounded-2xl p-6 h-full flex flex-col justify-center items-center">
                                            <div className="text-5xl font-bold text-accent mb-2">3hrs</div>
                                            <div className="text-sm text-muted mb-4">→ 5min</div>
                                            <div className="w-full h-2 bg-paper rounded-full overflow-hidden">
                                                <div className="h-full bg-accent rounded-full" style={{ width: '95%' }} />
                                            </div>
                                            <div className="text-xs text-muted mt-2">Time saved weekly</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Progress Tracking */}
                        <div className="min-h-screen flex items-center py-12">
                            <div className="card group cursor-pointer feature-card w-full" style={{ opacity: 0, transform: 'translateY(2rem)' }}>
                                <div className="flex flex-col lg:flex-row items-center gap-8">
                                    <div className="flex-1">
                                        <div className="w-16 h-16 bg-paper rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                                            <TrendingUp className="w-8 h-8 text-accent group-hover:text-white transition-colors" strokeWidth={2.5} />
                                        </div>
                                        <h3 className="text-3xl font-bold text-ink mb-4">Progress Tracking</h3>
                                        <p className="text-xl text-muted leading-relaxed mb-6">Visual dashboard shows your consistency.</p>
                                    </div>
                                    <div className="relative w-full lg:w-64 h-64">
                                        <div className="absolute top-4 left-4 w-full h-full bg-accent/10 rounded-2xl" />
                                        <div className="relative bg-white border-2 border-border rounded-2xl p-6 h-full flex flex-col justify-end">
                                            <div className="flex items-end gap-2 h-32">
                                                {[40, 60, 45, 80, 65, 90, 100].map((height, i) => (
                                                    <div key={i} className="flex-1 bg-accent rounded-t" style={{ height: `${height}%` }} />
                                                ))}
                                            </div>
                                            <div className="mt-4 text-center">
                                                <div className="text-2xl font-bold text-accent">87%</div>
                                                <div className="text-xs text-muted">Consistency rate</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* One-Click Refresh */}
                        <div className="min-h-screen flex items-center py-12">
                            <div className="card group cursor-pointer feature-card w-full" style={{ opacity: 0, transform: 'translateY(2rem)' }}>
                                <div className="flex flex-col lg:flex-row items-center gap-8">
                                    <div className="flex-1">
                                        <div className="w-16 h-16 bg-paper rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                                            <Zap className="w-8 h-8 text-accent group-hover:text-white transition-colors" strokeWidth={2.5} />
                                        </div>
                                        <h3 className="text-3xl font-bold text-ink mb-4">One-Click Refresh</h3>
                                        <p className="text-xl text-muted leading-relaxed mb-6">Regenerate ideas instantly until perfect.</p>
                                    </div>
                                    <div className="relative w-full lg:w-64 h-64">
                                        <div className="absolute top-4 left-4 w-full h-full bg-accent/10 rounded-2xl" />
                                        <div className="relative bg-white border-2 border-border rounded-2xl p-6 h-full flex flex-col justify-center items-center gap-4">
                                            {[1, 2, 3].map((i) => (
                                                <div key={i} className="w-full p-3 bg-paper rounded-lg border border-border flex items-center gap-3">
                                                    <Sparkles className="w-4 h-4 text-accent" strokeWidth={2} />
                                                    <div className="flex-1 space-y-1">
                                                        <div className="h-2 bg-white rounded w-full" />
                                                        <div className="h-2 bg-white rounded w-3/4" />
                                                    </div>
                                                </div>
                                            ))}
                                            <button className="w-full py-2 bg-accent text-white rounded-lg font-semibold text-sm flex items-center justify-center gap-2">
                                                <Zap className="w-4 h-4" strokeWidth={2.5} />
                                                Regenerate
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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