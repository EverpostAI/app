import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { config } from "../../config";

// ------------------------
// Extend Express Request type
// ------------------------
export interface AuthenticatedRequest extends Request {
    user?: {
        id: string;
    };
}

// ------------------------
// Middleware
// ------------------------
const authMiddleware = (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: "No token provided" });

    const token = authHeader.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Invalid token format" });

    try {
        const payload = jwt.verify(token, config.jwtSecret) as JwtPayload & { id: string };

        // assign the payload to req.user
        req.user = { id: payload.id };

        next();
    } catch (err: any) {
        console.error("JWT verification error:", err.message);
        return res.status(401).json({ error: "Invalid or expired token" });
    }
};

export default authMiddleware;
