"use client";
import { WeeklyPlanner } from "./WeeklyPlanner";
import ProtectedRoute from "../protected/ProtectedRoute";

export default function Home() {
    return (
        <ProtectedRoute>
            <WeeklyPlanner />
        </ProtectedRoute>
    );
}