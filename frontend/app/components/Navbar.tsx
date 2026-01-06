"use client"
import { useEffect } from 'react';
import { useUserContent } from '../context/UserContentContext';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { AuthResponse } from '../types/auth';

const Navbar = () => {
    const { userId, userProfession, setUserId, setUserProfession } = useUserContent();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setUserId(null);
                setUserProfession(null);
                return;
            }

            if (token && !userId) {
                try {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        },
                    });

                    const data: AuthResponse = await res.json();
                    if (data.success && data.user) {
                        setUserId(data.user.id);
                        setUserProfession(data.user.profession);
                    } else {
                        localStorage.removeItem('token');
                        setUserId(null);
                        setUserProfession(null);
                    }
                } catch (err) {
                    console.error('Auth check failed:', err);
                    localStorage.removeItem('token');
                    setUserId(null);
                    setUserProfession(null);
                }
            }
        };

        checkAuth();
    }, [userId, setUserId, setUserProfession]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUserId(null);
        setUserProfession(null);
        router.push('/login');
    };

    if (pathname === '/login' || pathname === '/signup') return null;

    return (
        <nav className="bg-surface border-b-2 border-border">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo / Brand */}
                <Link
                    href="/"
                    className="flex items-center gap-3 group"
                >
                    <div
                        className="h-8 w-8 rounded-full overflow-hidden flex items-center justify-center transition-all duration-200"
                        style={{ backgroundColor: 'var(--color-paper)' }}
                    >
                        <img
                            src="/favicon.svg" // your logo path
                            alt="Everpost Logo"
                            className="h-full w-full object-contain"
                            style={{ color: 'var(--color-accent)' }}
                        />
                    </div>
                    <span
                        className="text-xl font-bold tracking-tight text-ink transition-all duration-200
                                    active:text-accent active:drop-shadow-[0_0_6px_var(--color-accent)]"
                    >
                        Everpost
                    </span>

                </Link>

                {/* Navigation */}
                <div className="flex gap-2 items-center">
                    {userId && (
                        <div className="flex gap-1 mr-4">
                            <Link
                                href="/home"
                                className={`px-4 py-2 rounded-lg font-medium transition-colors ${pathname === '/home'
                                    ? 'bg-accent text-white'
                                    : 'text-muted hover:text-accent hover:bg-surface'
                                    }`}
                            >
                                Home
                            </Link>
                            <Link
                                href="/dashboard"
                                className={`px-4 py-2 rounded-lg font-medium transition-colors ${pathname === '/dashboard'
                                    ? 'bg-accent text-white'
                                    : 'text-muted hover:text-accent hover:bg-surface'
                                    }`}
                            >
                                Dashboard
                            </Link>
                        </div>
                    )}

                    {/* Auth Section */}
                    {userId ? (
                        <div className="flex items-center gap-3">
                            {userProfession && (
                                <span className="text-sm text-muted font-medium px-3 py-1 bg-paper rounded-full">
                                    {userProfession}
                                </span>
                            )}
                            <button
                                onClick={handleLogout}
                                className="btn-ghost text-sm"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <Link href="/login" className="btn-ghost">
                                Login
                            </Link>
                            <Link href="/signup" className="btn-main">
                                Sign Up
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
