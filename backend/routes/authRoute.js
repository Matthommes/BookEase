import express from "express";
import {  loginUser, registerUser, verifyToken } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/verify", verifyToken);

export default router;
 