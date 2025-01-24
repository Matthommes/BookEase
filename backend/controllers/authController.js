import { HttpStatusCodes as code } from "../constants/httpStatusCodes.js";
import { prisma } from "../config/prisma.js";
import { addMinutes, subHours } from "date-fns";
import cron from "node-cron";
import { setCookie } from "../utils/cookie.js";
import {
  loginService,
  resendVerificationEmail,
  userRegistration,
  verifyTokenService,
} from "../services/auth.service.js";

// REGISTER NEW USER!

export const registerUser = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email)
      return res
        .status(code.BAD_REQUEST)
        .json({ message: "Email is required" });

    await userRegistration(email);
    res
      .status(code.CREATED)
      .json({ message: "User registered! Please verify your email." });
  } catch (error) {
    console.error("Error in registerUser:", error.message);
    return res.status(code.INTERNAL_SERVER_ERROR).json({
      error: "Failed to register user",
      message: error.message,
    });
  }
};

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
    console.error("Error in registerUser:", error.message);
    return res.status(code.INTERNAL_SERVER_ERROR).json({
      error: "Failed to register user",
      message: error.message,
    });
  }
};

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
    console.error(error);
    res
      .status(code.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal Server Error", error });
  }
};

export const verifyToken = async (req, res) => {
  const { token, email } = req.body;
  try {
    if (!token || !email) {
      return res
        .status(code.BAD_REQUEST)
        .json({ message: "Fill Required field!" });
    }

    const { user, tokenPayload } = await verifyTokenService(token, email);

    setCookie(
      res,
      tokenPayload,
      new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    );

    res.status(code.OK).json({ message: "Token verified" });
  } catch (error) {
    console.error("Error in registerUser:", error.message);
    return res.status(code.INTERNAL_SERVER_ERROR).json({
      error: "Failed to register user",
      message: error.message,
    })
  };
}
export const getAllUsers = async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(code.OK).json(users);
};

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

export const logout = async (req, res) => {
  res.clearCookie("token");
  res.redirect("/login");
};
cron.schedule("0 * * * *", async () => {
  const staleAccount = await prisma.user.deleteMany({
    where: {
      isVerified: false,
      createdAt: { lt: subHours(new Date(), 24) },
    },
  });
  console.log(`Deleted ${staleAccount.count} stale accounts`);
});
