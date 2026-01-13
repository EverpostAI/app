"use client"
import { useState, useEffect } from "react";
import { Sparkles, Calendar, TrendingUp, Zap, CheckCircle2, X } from "lucide-react";

interface OnboardingProps {
    userName: string;
    onComplete: () => void;
}

export const WelcomeOnboarding = ({ userName, onComplete }: OnboardingProps) => {
    const [step, setStep] = useState(0);
    const [showConfetti, setShowConfetti] = useState(true);

    useEffect(() => {
        // Hide confetti after 3 seconds
        const timer = setTimeout(() => setShowConfetti(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    const steps = [
        {
            icon: <Sparkles className="w-12 h-12 text-accent" strokeWidth={2.5} />,
            title: "Welcome to Your Content Studio! 🎉",
            description: "Let's get you started with a quick tour of how to create amazing content consistently.",
            highlight: "Your AI-powered content calendar awaits!"
        },
        {
            icon: <Calendar className="w-12 h-12 text-accent" strokeWidth={2.5} />,
            title: "Generate Your Weekly Plan",
            description: "Click 'Generate New Week' to create 7 days of content ideas tailored to your profession. Our AI considers platform best practices and optimal posting times.",
            highlight: "Fresh ideas in seconds, not hours."
        },
        {
            icon: <Zap className="w-12 h-12 text-accent" strokeWidth={2.5} />,
            title: "Edit, Regenerate, or Lock",
            description: "Don't like an idea? Click the edit icon to customize it, or regenerate for a fresh take. When you're happy, check it off to lock it in.",
            highlight: "Full creative control at your fingertips."
        },
        {
            icon: <TrendingUp className="w-12 h-12 text-accent" strokeWidth={2.5} />,
            title: "Track Your Progress",
            description: "Watch your completion percentage grow as you create content. The calendar view shows your schedule at a glance with color-coded status.",
            highlight: "Stay motivated with visual progress tracking."
        },
        {
            icon: <CheckCircle2 className="w-12 h-12 text-green-500" strokeWidth={2.5} />,
            title: "You're All Set!",
            description: "Content Memory is active, tracking your themes to ensure variety. Your AI assistant learns your style and keeps ideas fresh week after week.",
            highlight: "Let's create something amazing! 🚀"
        }
    ];

    const currentStep = steps[step];
    const isLastStep = step === steps.length - 1;

    return (
        <>
            {/* Confetti Effect */}
            {showConfetti && (
                <div className="fixed inset-0 pointer-events-none z-[10000] overflow-hidden">
                    {[...Array(50)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute animate-fall"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `-${Math.random() * 20}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${3 + Math.random() * 2}s`,
                            }}
                        >
                            <div
                                className="w-3 h-3 rounded-full"
                                style={{
                                    backgroundColor: ['#ff4444', '#10b981', '#3b82f6', '#f59e0b', '#8b5cf6'][Math.floor(Math.random() * 5)],
                                    transform: `rotate(${Math.random() * 360}deg)`,
                                }}
                            />
                        </div>
                    ))}
                </div>
            )}

            {/* Backdrop */}
            <div className="fixed inset-0 bg-ink/50 backdrop-blur-sm z-[9998]" />

            {/* Modal */}
            <div className="fixed inset-0 flex items-center justify-center z-[9999] p-4">
                <div className="card-flat border-2 border-accent max-w-2xl w-full shadow-2xl relative animate-scale-in">
                    {/* Close Button */}
                    <button
                        onClick={onComplete}
                        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-paper transition-colors"
                    >
                        <X className="w-5 h-5 text-muted hover:text-ink" strokeWidth={2.5} />
                    </button>

                    {/* Content */}
                    <div className="text-center">
                        {/* Icon */}
                        <div className="flex justify-center mb-6 animate-bounce-slow">
                            {currentStep.icon}
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl font-bold text-ink mb-4 tracking-tight">
                            {currentStep.title}
                        </h1>

                        {/* Description */}
                        <p className="text-muted text-lg mb-4 max-w-xl mx-auto">
                            {currentStep.description}
                        </p>

                        {/* Highlight */}
                        <div className="bg-accent/10 border-2 border-accent/20 rounded-lg p-4 mb-8 max-w-md mx-auto">
                            <p className="text-accent font-semibold">
                                {currentStep.highlight}
                            </p>
                        </div>

                        {/* Progress Dots */}
                        <div className="flex justify-center gap-2 mb-8">
                            {steps.map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === step
                                        ? "bg-accent w-8"
                                        : i < step
                                            ? "bg-green-500"
                                            : "bg-border"
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3 justify-center">
                            {step > 0 && (
                                <button
                                    onClick={() => setStep(step - 1)}
                                    className="btn-secondary px-8"
                                >
                                    Back
                                </button>
                            )}
                            <button
                                onClick={() => {
                                    if (isLastStep) {
                                        onComplete();
                                    } else {
                                        setStep(step + 1);
                                    }
                                }}
                                className="btn-main px-8"
                            >
                                {isLastStep ? "Let's Go! 🚀" : "Next"}
                            </button>
                            {!isLastStep && (
                                <button
                                    onClick={onComplete}
                                    className="btn-ghost px-4"
                                >
                                    Skip Tour
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fall {
                    to {
                        transform: translateY(100vh) rotate(360deg);
                        opacity: 0;
                    }
                }
                @keyframes scale-in {
                    from {
                        transform: scale(0.9);
                        opacity: 0;
                    }
                    to {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
                @keyframes bounce-slow {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
                .animate-fall {
                    animation: fall linear forwards;
                }
                .animate-scale-in {
                    animation: scale-in 0.3s ease-out;
                }
                .animate-bounce-slow {
                    animation: bounce-slow 2s ease-in-out infinite;
                }
            `}</style>
        </>
    );
};