import express from "express";
import { deleteUsers, getAllUsers, registerUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser);
router.get("/get", getAllUsers)
router.delete("/delete", deleteUsers)
export default router;
 