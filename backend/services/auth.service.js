import { generateToken } from "../config/jwt.js";
import { prisma } from "../config/prisma.js";
import { sendAuthMail } from "../constants/emails/authEmail.js";
import { generateAuthToken } from "../utils/helpers.js";
import bcrypt from "bcrypt";

// Register User service!

export const userRegistration = async (email) => {
  const { token, tokenExp, hashedToken } = await generateAuthToken();

  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) {
    await prisma.user.update({
      where: { email },
      data: { token: hashedToken, tokenExp },
    });
    await sendAuthMail(existingUser.email, token, "login");
    return existingUser;
  }

  const user = await prisma.user.create({
    data: { email, token: hashedToken, tokenExp },
  });
  console.log(user);
  await sendAuthMail(user.email, token, "register");
  return user;
};

// Login User service!
export const loginService = async (email) => {
  const { token, tokenExp, hashedToken } = await generateAuthToken();

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error("User not found!");
  await prisma.user.update({
    where: { email },
    data: {
      token: hashedToken,
      tokenExp,
    },
  });

  await sendAuthMail(user.email, token, "login");

  return user;
};

// Resend Email Service!

export const resendVerificationEmail = async (email) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error("User not found!");

  const { token, tokenExp, hashedToken } = await generateAuthToken();

  await prisma.user.update({
    where: { email },
    data: { token: hashedToken, tokenExp },
  });

  await sendAuthMail(user.email, token, "login");

  return user;
};

// Verify Token Service

export const verifyTokenService = async (token, email) => {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) throw new Error("User not found");

  if (new Date(user.tokenExp) < new Date()) throw new Error("Token expired");

  const compareToken = await bcrypt.compare(token, user.token);
  if (!compareToken) {
    console.error("Token comparison failed", {
      providedToken: token,
      storedHashedToken: user.token,
    });
    throw new Error("Invalid token");
  }

  await prisma.user.update({
    where: { id: user.id },
    data: { token: "", tokenExp: null, isVerified: true },
  });

  const tokenPayload = generateToken({
    userId: user.id,
    userEmail: user.email,
  });

  return { user, tokenPayload };
};

// Logout User Service!
