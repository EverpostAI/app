import type { Metadata } from "next";
import SignupForm from "./SignupForm";

export const metadata: Metadata = {
    title: "Everpost - Sign Up",
    description: "Create your Everpost account to start planning, scheduling, and publishing social media content effortlessly. Get started in seconds and stay consistent online.",
};

export default function SignupPage() {
    return (
        <>
            <SignupForm />
        </>
    );
}
