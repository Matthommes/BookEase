import { Router } from "express";
import {
  deleteAllUsers,
  getAllUsers,
  loginUser,
  registerUser,
  verifyToken,
} from "../controllers/authController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import passport from "passport";
import { generateToken } from "../config/jwt.js";
import { setCookie } from "../utils/cookie.js";

export const router = Router();

// Google routes

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  })
);

// Google callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "/login",
  }),
  (req, res) => {
    const user = req.user;
    if (!user) {
      return res.status(401).json({
        message: "Authentication failed",
      });
    }
    const token = generateToken(user);
    console.log(token)
    setCookie(res, token, new Date(Date.now() + 30 * 24 * 60 * 60 * 1000));
    res.redirect(`${process.env.FRONTEND_URL}/onboarding/welcome`);
  }
);

// // Apple routes
// router.get(
//   "/apple",
//   passport.authenticate("apple", { scope: ["email", "name"] })
// );

// router.post(
//   "/apple/callback",
//   passport.authenticate("apple", { failureRedirect: "/login" }),
//   (req, res) => {
//     const token = generateToken(req.user);
//     res.redirect(`${process.env.FRONTEND_URL_TEST}/onboarding/welcome`);
//   }
// );
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/verify", verifyToken);
router.get("/all", authenticate, getAllUsers);
router.delete("/delete", deleteAllUsers);
router.get("/ping", (req, res) => {
  return res.status(200).send("The server never sleeps");
});

export default router;
