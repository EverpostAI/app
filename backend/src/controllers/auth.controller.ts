import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../services/client";;
import { OAuth2Client } from "google-auth-library";
import { Request, Response } from "express";

interface AuthenticatedRequest extends Request {
    user?: {
        id: string;
    };
}

const SALT_ROUNDS = 10;

const JWT_SECRET = process.env.JWT_SECRET as string;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string;

if (!JWT_SECRET) throw new Error("Missing JWT_SECRET");
if (!GOOGLE_CLIENT_ID) throw new Error("Missing GOOGLE_CLIENT_ID");

const client = new OAuth2Client(GOOGLE_CLIENT_ID);

// ------------------------
// Signup (email + password)
// ------------------------
export const signup = async (req: Request, res: Response) => {
    try {
        const { email, password, profession } = req.body;

        if (!email || !password)
            return res.status(400).json({ error: "Email and password required" });

        if (!profession)
            return res.status(400).json({ error: "Profession is required" });

        const existing = await prisma.user.findUnique({ where: { email } });
        if (existing) return res.status(400).json({ error: "Email already registered" });

        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                profession,
            },
        });

        // Generate a JWT for the new user
        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "7d" });

        // Return both the token and the user object
        return res.status(201).json({
            success: true,
            token,
            user: {
                id: user.id,
                email: user.email,
                profession: user.profession,
                needsPassword: !user.password,
                needsGoogleLink: !user.googleId
            },
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Signup failed" });
    }
};

// ------------------------
// Login
// ------------------------
export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password)
            return res.status(400).json({ error: "Email and password required" });

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user || !user.password)
            return res.status(401).json({ error: "Invalid credentials" });

        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(401).json({ error: "Invalid credentials" });

        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "7d" });

        return res.status(200).json({
            success: true,
            token,
            user: {
                id: user.id,
                email: user.email,
                profession: user.profession,
                needsPassword: !user.password,
                needsGoogleLink: !user.googleId
            },
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Login failed" });
    }
};

// ------------------------
// Google Auth (Login / Signup)
// ------------------------
export const googleAuth = async (req: Request, res: Response) => {
    try {
        const { credential, profession } = req.body;
        if (!credential) return res.status(400).json({ error: "Missing Google credential" });

        const ticket = await client.verifyIdToken({
            idToken: credential,
            audience: GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        if (!payload) return res.status(400).json({ error: "Invalid Google token" });

        const { email, sub: googleId } = payload;
        if (!email) return res.status(400).json({ error: "Google account has no email" });

        let user = await prisma.user.findUnique({ where: { email } });

        // If no user, create one
        if (!user) {
            if (!profession)
                return res.status(400).json({
                    error: "Profession required on first Google signup"
                });

            user = await prisma.user.create({
                data: {
                    email,
                    googleId,
                    profession,
                },
            });
        }

        // If user exists but googleId isn't linked, link it
        if (!user.googleId) {
            user = await prisma.user.update({
                where: { id: user.id },
                data: { googleId }
            });
        }

        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "7d" });

        return res.json({
            success: true,
            token,
            user: {
                id: user.id,
                email: user.email,
                profession: user.profession,
                needsPassword: !user.password,
                needsGoogleLink: !user.googleId
            },
        });

    } catch (error) {
        console.error("Google Auth Error:", error);
        return res.status(500).json({ error: "Google login failed" });
    }
};

// ------------------------
// Me
// ------------------------
export const me = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const userId = req.user?.id;
        if (!userId) return res.status(401).json({ error: "Unauthorized" });

        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (!user) return res.status(404).json({ error: "User not found" });

        return res.status(200).json({
            success: true,
            user: {
                id: user.id,
                email: user.email,
                profession: user.profession,
                needsPassword: !user.password,
                needsGoogleLink: !user.googleId
            },
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Error fetching user" });
    }
};
