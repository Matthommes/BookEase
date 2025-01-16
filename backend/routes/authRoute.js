import express from "express";
import {
  deleteAllUsers,
  getAllUsers,
  loginUser,
  registerUser,
  verifyToken,
} from "../controllers/authController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/verify", verifyToken);
router.get("/all", authenticate, getAllUsers);
router.delete("/delete", deleteAllUsers);
router.get("/ping", (req, res) => {
  return res.status(200).send("The server never sleeps");
});

export default router;
