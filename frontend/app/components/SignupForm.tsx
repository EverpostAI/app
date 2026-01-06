"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { AuthResponse } from "../types/auth";
import { useUserContent } from "../context/UserContentContext";
import { Zap, Mail, Lock, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";

const SignupForm = () => {
    const { setUserProfession, setUserId } = useUserContent();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profession, setProfession] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    // ✅ Redirect if token exists
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            router.push("/dashboard");
        }
    }, [router]);

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password, profession }),
            });

            const data: AuthResponse = await res.json();
            if (!data.success || !data.token || !data.user) return setError(data.error ?? null);

            localStorage.setItem("token", data.token);
            setUserId(data.user.id);
            setUserProfession(data.user.profession);

            router.push("/welcome"); // or "/dashboard" if you prefer
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleGoogleResponse = useCallback(async (response: any) => {
        if (!profession.trim()) {
            setError("Please enter your profession before using Google signup");
            return;
        }

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/google`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ credential: response.credential, profession }),
            });

            const data: AuthResponse = await res.json();
            if (!data.success || !data.token || !data.user) return setError(data.error ?? null);

            localStorage.setItem("token", data.token);
            setUserId(data.user.id);
            setUserProfession(data.user.profession);

            router.push("/welcome"); // or "/dashboard" if you prefer
        } catch (err: any) {
            setError(err.message);
        }
    }, [profession, router, setUserId, setUserProfession]);

    useEffect(() => {
        // @ts-ignore
        if (window.google) {
            // @ts-ignore
            window.google.accounts.id.initialize({
                client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
                callback: handleGoogleResponse,
            });

            // @ts-ignore
            window.google.accounts.id.renderButton(
                document.getElementById("googleSignInDiv"),
                { theme: "outline", size: "large", width: "100%" }
            );
        }
    }, [handleGoogleResponse]);

    return (
        <div className="min-h-screen bg-paper flex">
            {/* Left Side - Brand */}
            <div className="hidden lg:flex lg:w-1/2 bg-ink text-white p-12 flex-col justify-between relative overflow-hidden">
                {/* Subtle grid background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

                <div className="relative z-10">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-3 group"
                    >
                        <div
                            className="h-8 w-8 rounded-full overflow-hidden flex items-center justify-center transition-all duration-200"
                        >
                            <img
                                src="/favicon.svg" // your logo path
                                alt="Everpost Logo"
                                className="h-full w-full object-contain"
                                style={{ color: 'var(--color-accent)' }}
                            />
                        </div>
                        <span
                            className="text-xl font-bold tracking-tight text-paper transition-all duration-200
                                    active:text-accent active:drop-shadow-[0_0_6px_var(--color-accent)]"
                        >
                            Everpost
                        </span>

                    </Link>
                    <div className="space-y-6 pt-10 text-gray-300">
                        <h1 className="text-5xl font-bold tracking-tight leading-tight">
                            Your content, finally planned
                        </h1>

                        <p className="text-lg">
                            Open Everpost and see exactly what you’re posting this week.
                        </p>
                        <p className="text-lg font-medium text-gray-200">
                            No blank page. No second-guessing. Just momentum.
                        </p>
                        <p className="text-lg">
                            Spend your time creating — not planning.
                        </p>
                    </div>
                </div>

                <div className="relative z-10 text-sm text-gray-400">
                    © 2026 Everpost. All rights reserved.
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    {/* Mobile Logo */}
                    <div className="lg:hidden flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                            <Zap className="w-6 h-6 text-white" strokeWidth={2.5} />
                        </div>
                        <span className="text-xl font-bold text-ink">Everpost</span>
                    </div>

                    {/* Form Header */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-ink mb-2">Create your account</h2>
                        <p className="text-muted">Start planning your content in seconds</p>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 p-4 bg-accent/10 border-2 border-accent rounded-lg">
                            <p className="text-accent text-sm font-medium">{error}</p>
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSignup} className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold text-ink mb-2">
                                Email address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" strokeWidth={2} />
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="input-field pl-11"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-ink mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" strokeWidth={2} />
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="input-field pl-11"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-ink mb-2">
                                Profession
                            </label>
                            <div className="relative">
                                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" strokeWidth={2} />
                                <input
                                    type="text"
                                    placeholder="e.g., Fitness coach, Baker, Designer"
                                    value={profession}
                                    onChange={(e) => setProfession(e.target.value)}
                                    required
                                    className="input-field pl-11"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn-main w-full group"
                        >
                            {isSubmitting ? "Creating account..." : "Create account"}
                            {!isSubmitting && (
                                <ArrowRight className="w-5 h-5 inline ml-2 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t-2 border-border"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-paper text-muted font-medium">Or continue with</span>
                        </div>
                    </div>

                    {/* Google Sign In */}
                    <div id="googleSignInDiv" className="mb-6"></div>

                    {/* Login Link */}
                    <p className="text-center text-sm text-muted">
                        Already have an account?{" "}
                        <Link href="/login" className="text-accent font-semibold hover:text-accent-hover transition-colors">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;
