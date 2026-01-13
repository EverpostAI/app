"use client";
import React from "react";
import { useUserContent } from "../context/UserContentContext";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { userId } = useUserContent();
    const router = useRouter();

    if (userId === undefined) {
        // still hydrating
        return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
    }

    if (userId === null) {
        router.push("/login");
        return <div className="flex items-center justify-center min-h-screen">Redirecting...</div>;
    }

    return <>{children}</>;
}

