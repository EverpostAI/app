import { Router } from "express";
import {
    getUser,
    getAllUsers,
    updateProfession,
    getUserContentPlans,
    getUserContentHistory,
} from "../controllers/user.controller";
import authMiddleware from "./middleware/authMiddleware";

const router = Router();

// Get a single user by ID
router.get("/:id", getUser);

// Get all users (optionally filtered by profession via query param)
router.get("/", getAllUsers);

// Update user's profession (requires authentication)
router.patch("/profession", authMiddleware, updateProfession);

// Get a user's content plans
router.get("/:id/content-plans", getUserContentPlans);

// Get a user's content history
router.get("/:id/content-history", getUserContentHistory);

export default router;
