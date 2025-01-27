import { HttpStatusCodes as code } from "../constants/httpStatusCodes.js";
import {
  loginService,
  resendVerificationEmail,
  userRegistration,
  verifyTokenService,
} from "../services/auth.service.js";
import { prisma } from "../config/prisma.js";
import { subHours } from "date-fns";
import cron from "node-cron";

// REGISTER NEW USER!
export const registerUser = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email)
      return res
        .status(code.BAD_REQUEST)
        .json({ message: "Email is required" });

    const user = await userRegistration(email);
    res.status(code.CREATED).json({
      message: "User registered! Please verify your email.",
      email: user.email,
    });
  } catch (error) {
    console.error("Error in registerUser:", error.message);
    return res.status(code.INTERNAL_SERVER_ERROR).json({
      error: "Failed to register user",
      message: error.message,
    });
  }
};

// LOGIN USER!
export const loginUser = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email)
      return res
        .status(code.BAD_REQUEST)
        .json({ message: "Please enter an email address!" });

    await loginService(email);
    res
      .status(code.OK)
      .json({ message: "Login successful! Please verify email address!" });
  } catch (error) {
    console.error("Error in loginUser:", error.message);
    return res.status(code.INTERNAL_SERVER_ERROR).json({
      error: "Failed to login user",
      message: error.message,
    });
  }
};

// RESEND EMAIL!
export const resendEmail = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res
        .status(code.BAD_REQUEST)
        .json({ message: "No email provided!" });
    }

    await resendVerificationEmail(email);
    res.status(code.OK).json({ message: "Email Resent!" });
  } catch (error) {
    console.error(error.message);
    res
      .status(code.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal Server Error", error });
  }
};

// VERIFY TOKEN!
export const verifyToken = async (req, res) => {
  const { token, email } = req.body;
  try {
    if (!token || !email) {
      return res
        .status(code.BAD_REQUEST)
        .json({ message: "Fill Required field!" });
    }

    const { user, sessionToken } = await verifyTokenService(token, email);
    res
      .status(code.OK)
      .json({ message: "Token verified", token: sessionToken });
  } catch (error) {
    console.error("Error in verifyToken:", error.message);
    return res.status(code.INTERNAL_SERVER_ERROR).json({
      error: "Failed to verify token",
      message: error.message,
    });
  }
};

// GET ALL USERS
export const getAllUsers = async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(code.OK).json(users);
};

// DELETE ALL USERS
export const deleteAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.deleteMany({});
    res.status(code.OK).json({ message: "All users deleted" });
  } catch (error) {
    console.error("Error in deleteAllUsers:", error.message);
    res
      .status(code.INTERNAL_SERVER_ERROR)
      .json({ message: "Failed to delete users", error: error.message });
  }
};

// LOGOUT USER
export const logout = async (req, res) => {
  res.clearCookie("token");
  res.redirect("/login");
};

// CRON JOB TO DELETE STALE ACCOUNTS
cron.schedule("0 * * * *", async () => {
  const staleAccount = await prisma.user.deleteMany({
    where: {
      isVerified: false,
      createdAt: { lt: subHours(new Date(), 24) },
    },
  });
  console.log(`Deleted ${staleAccount.count} stale accounts`);
});
