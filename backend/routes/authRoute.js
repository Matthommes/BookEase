import express from "express";
import {  getAllUsers, loginUser, registerUser, verifyToken } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/verify", verifyToken);
router.get("/all", getAllUsers);
router.get("/ping", (req, res) => {
    return res.status(200).send("The server never sleeps");
});

export default router;
 