"use client";
import { WeeklyPlanner } from "../components/WeeklyPlanner";
import ProtectedRoute from "../components/ProtectedRoute";

export default function Home() {
    return (
        <ProtectedRoute>
            <WeeklyPlanner />
        </ProtectedRoute>
    );
}