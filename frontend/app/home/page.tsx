"use client";
import { WeeklyPlanner } from "./WeeklyPlanner";
import ProtectedRoute from "../components/ProtectedRoute";

export default function Home() {
    return (
        <ProtectedRoute>
            <WeeklyPlanner />
        </ProtectedRoute>
    );
}