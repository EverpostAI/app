import { Router } from "express";
import * as authController from "../controllers/auth.controller";
import authMiddleware from "./middleware/authMiddleware";

const router = Router();

// ------------------------
// Public Routes
// ------------------------

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/google", authController.googleAuth);

// ------------------------
// Protected Routes
// ------------------------
router.get("/me", authMiddleware, authController.me);

export default router;
