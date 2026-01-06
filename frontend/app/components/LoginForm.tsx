"use client"
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { AuthResponse } from "../types/auth";
import { useUserContent } from "../context/UserContentContext";
import { Zap, Mail, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";

const LoginForm = () => {
    const { hydrated, setUserId, userId } = useUserContent();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    // ✅ Redirect if user exists - This handles the navigation after userId updates
    useEffect(() => {
        if (userId === undefined) return; // wait for hydration
        if (userId) router.push("/dashboard");
    }, [userId, router]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsSubmitting(true);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data: AuthResponse = await res.json();

            if (!data.success) {
                setError(data.error || "Login failed");
                return;
            }

            if (data.token && data.user) {
                // Set localStorage first
                localStorage.setItem("userId", data.user.id);
                localStorage.setItem("token", data.token);
                // Then update context - the useEffect above will handle navigation
                setUserId(data.user.id);
            }
        } catch (err: any) {
            setError(err.message || "Network error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleGoogleResponse = useCallback(
        async (response: any) => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/google`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ credential: response.credential }),
                });

                const data: AuthResponse = await res.json();
                if (!data.success) return setError(data.error ?? null);

                if (data.token && data.user) {
                    localStorage.setItem("userId", data.user.id);
                    localStorage.setItem("token", data.token);
                    setUserId(data.user.id);
                    // useEffect will handle navigation
                }
            } catch (err: any) {
                setError(err.message);
            }
        },
        [setUserId]
    );

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
                document.getElementById("googleLoginDiv"),
                { theme: "outline", size: "large", width: "100%" }
            );
        }
    }, [handleGoogleResponse]);

    return (
        <div className="min-h-screen bg-paper flex">
            {/* Left Side */}
            <div className="hidden lg:flex lg:w-1/2 bg-ink text-white p-12 flex-col justify-between relative overflow-hidden">

                {/* Subtle grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

                <div className="relative z-10">
                    <Link
                        href="/"
                        className="flex items-center gap-3 group"
                    >
                        <div
                            className="h-8 w-8 rounded-full overflow-hidden flex items-center justify-center transition-all duration-200"
                        >
                            <img
                                src="/favicon.svg"
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


                    <h1 className="text-5xl font-bold mb-4 tracking-tight leading-tight">
                        Welcome Back
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        Log in to continue creating content at lightspeed.
                    </p>
                    {/* Fake product UI */}
                    <div className="relative z-10 mt-12 max-w-md translate-x-6">
                        {/* Back card */}
                        <div className="absolute -top-6 left-6 w-full h-full bg-white/5 rounded-2xl blur-sm" />

                        {/* Main card */}
                        <div className="relative bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-5 shadow-2xl">

                            {/* Header */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="h-3 w-24 bg-white/30 rounded" />
                                <div className="flex gap-1">
                                    <div className="w-2 h-2 bg-white/30 rounded-full" />
                                    <div className="w-2 h-2 bg-white/20 rounded-full" />
                                    <div className="w-2 h-2 bg-white/10 rounded-full" />
                                </div>
                            </div>

                            {/* Content rows */}
                            <div className="space-y-3">
                                <div className="h-3 bg-white/20 rounded w-full" />
                                <div className="h-3 bg-white/15 rounded w-5/6" />
                                <div className="h-3 bg-white/10 rounded w-2/3" />
                            </div>

                            {/* Footer */}
                            <div className="mt-5 flex items-center gap-3">
                                <div className="w-8 h-8 bg-accent/60 rounded-lg" />
                                <div className="flex-1 space-y-1">
                                    <div className="h-2 bg-white/20 rounded w-24" />
                                    <div className="h-2 bg-white/10 rounded w-16" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="relative z-10 text-sm text-gray-400">
                    © 2026 Everpost. All rights reserved.
                </div>
            </div>

            {/* Right Side */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                <div className="w-full max-w-md">

                    {/* Mobile Logo */}
                    <div className="lg:hidden flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                            <Zap className="w-6 h-6 text-white" strokeWidth={2.5} />
                        </div>
                        <span className="text-xl font-bold text-ink">Everpost</span>
                    </div>

                    {/* Header */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-ink mb-2">Log in</h2>
                        <p className="text-muted">Welcome back! Let's get productive.</p>
                    </div>

                    {/* Error */}
                    {error && (
                        <div className="mb-6 p-4 bg-accent/10 border-2 border-accent rounded-lg">
                            <p className="text-accent text-sm font-medium">{error}</p>
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleLogin} className="space-y-4">
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

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn-main w-full group"
                        >
                            {isSubmitting ? "Logging in..." : "Log in"}
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
                            <span className="px-4 bg-paper text-muted font-medium">
                                Or continue with
                            </span>
                        </div>
                    </div>

                    {/* Google Login */}
                    <div id="googleLoginDiv" className="mb-6"></div>

                    {/* Signup Link */}
                    <p className="text-center text-sm text-muted">
                        Don't have an account?{" "}
                        <Link
                            href="/signup"
                            className="text-accent font-semibold hover:text-accent-hover transition-colors"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;