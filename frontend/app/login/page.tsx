import type { Metadata } from "next";
import LoginForm from "../components/LoginForm";

export const metadata: Metadata = {
    title: "Everpost - Log In",
    description: "Log in to your Everpost account to plan your social media content.",
};

export default function LoginPage() {
    return (
        <>
            <LoginForm />
        </>
    );
}
