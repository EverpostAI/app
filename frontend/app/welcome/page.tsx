"use client";
import { useRouter } from "next/navigation";
import { WelcomeOnboarding } from "./WelcomeOnboarding";
import { useUserContent } from "../context/UserContentContext";
import ProtectedRoute from "../protected/ProtectedRoute";

const WelcomePage = () => {
    const router = useRouter();
    const { userProfession } = useUserContent();

    const handleComplete = () => {
        // Redirect to dashboard after onboarding
        router.push("/dashboard");
    };

    return (
        <ProtectedRoute>
            <WelcomeOnboarding
                userName={userProfession || "Creator"}
                onComplete={handleComplete}
            />
        </ProtectedRoute>
    );
};

export default WelcomePage;