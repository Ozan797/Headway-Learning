import express from "express";
import { register, login, getUserProfile, updateUserProfile } from "../controllers/authController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// Protected Routes
router.get("/me", protect, getUserProfile)
router.put("/me", protect, updateUserProfile);

export default router;
