"use client"
import React from "react"
import UserDashboard from "./UserDashboard"
import ProtectedRoute from "../components/ProtectedRoute"

const Dashboard = () => {
    return (
        <ProtectedRoute>
            <UserDashboard />
        </ProtectedRoute>
    )
}

export default Dashboard