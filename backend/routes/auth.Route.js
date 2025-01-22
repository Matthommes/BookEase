import passport from "../config/passport.js"
import { Router } from "express";
import {
  deleteAllUsers,
  getAllUsers,
  loginUser,
  registerUser,
  verifyToken,
} from "../controllers/authController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import { frontendUrl } from "../utils/urls.js";
import { generateToken } from "../config/jwt.js";
import { setCookie } from "../utils/cookie.js";

export const router = Router();


// Google Authentication
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "/login",
  }),
  (req, res) => {
    const { user } = req;
    if (!user) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    const token = generateToken(user);
    setCookie(res, token, new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)); // 30-day expiry
    res.redirect(`${frontendUrl}/onboarding/welcome`);
  }
);

// Apple Authentication (commented out unless required)
// router.get("/apple", passport.authenticate("apple", { scope: ["email", "name"] }));
// router.post("/apple/callback", appleCallbackHandler);

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/verify", verifyToken);
router.get("/all", authenticate, getAllUsers);
router.delete("/delete", deleteAllUsers);
router.get("/ping", (req, res) =>
  res.status(200).send("The server never sleeps")
);
router.get("/", (req, res) => {
  res.status(200).send("OK");
});
export default router;
