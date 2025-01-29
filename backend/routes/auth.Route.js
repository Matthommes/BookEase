import passport from "../config/passport.js";
import { Router } from "express";
import {
  deleteAllUsers,
  getAllUsers,
  loginUser,
  logout,
  registerUser,
  resendEmail,
  verifyToken,
} from "../controllers/authController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import { frontendUrl } from "../utils/urls.js";



export const router = Router();

// Google Authentication
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", 'email'],
    session: false,
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    // successRedirect: `${frontendUrl}/onboarding/welcome`,
    failureRedirect: "/register",
  }),
  (req, res) => {
    const { user } = req;

    if (!user) {
      return res.status(401).json({ message: "Authentication failed" });
    }
    const token = generateToken(user);
    res.redirect(`${frontendUrl}/verify?token=${token}`);
  }
);

// Apple Authentication (commented out unless required)
// router.get("/apple", passport.authenticate("apple", { scope: ["email", "name"] }));
// router.post("/apple/callback", appleCallbackHandler);

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/resend", resendEmail);
router.post("/verify", verifyToken);
router.get("/all", authenticate, getAllUsers);
router.delete("/delete", deleteAllUsers);
router.get("/logout", logout);
router.get("/ping", (req, res) =>
  res.status(200).send("The server never sleeps")
);

export default router;
