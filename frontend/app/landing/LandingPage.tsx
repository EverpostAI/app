"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { Zap, Calendar, TrendingUp, Sparkles, ArrowRight, Check, Brain, Clock, Target } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { features, featureSubtitles, featureTitles } from "./features/Features";

export const LandingPage = () => {
    const router = useRouter(); // initialize the router
    const howItWorksRef = useRef<HTMLDivElement>(null);
    const leftPanelRef = useRef<HTMLDivElement>(null);
    const featureRefs = useRef<HTMLDivElement[]>([]);
    const [activeFeature, setActiveFeature] = useState(0);
    const [displayFeature, setDisplayFeature] = useState(activeFeature);
    const [isFading, setIsFading] = useState(false);
    const [animateBars, setAnimateBars] = useState(false); // Add this new state


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
                                            {typeof feature.visual === "function"
                                                ? feature.visual({ animateBars })
                                                : feature.visual}
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