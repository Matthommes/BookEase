import { prisma } from "../config/prisma.js";
import { sendAuthMail } from "../constants/emails/authEmail.js";
import { generateAuthToken } from "../utils/helpers.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../config/jwt.js";

// REGISTER USER SERVICE
export const userRegistration = async (email) => {
  const { verificationToken, tokenExp, hashedToken } =
    await generateAuthToken();

  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) {
    await prisma.token.upsert({
      where: { userId: existingUser.id },
      update: { verificationToken: hashedToken, expiresAt: tokenExp },
      create: {
        userId: existingUser.id,
        verificationToken: hashedToken,
        expiresAt: tokenExp,
      },
    });
    await sendAuthMail(existingUser.email, verificationToken, "login");
    return existingUser;
  }

  const user = await prisma.user.create({
    data: { email },
  });
  await prisma.token.create({
    data: {
      userId: user.id,
      verificationToken: hashedToken,
      expiresAt: tokenExp,
    },
  });
  await sendAuthMail(user.email, verificationToken, "register");
  return user;
};

// LOGIN USER SERVICE
export const loginService = async (email) => {
  const { verificationToken, tokenExp, hashedToken } =
    await generateAuthToken();

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error("User not found!");
  await prisma.token.upsert({
    where: { userId: user.id },
    update: { verificationToken: hashedToken, expiresAt: tokenExp },
    create: {
      userId: user.id,
      verificationToken: hashedToken,
      expiresAt: tokenExp,
    },
  });

  await sendAuthMail(user.email, verificationToken, "login");

  return user;
};

// RESEND VERIFICATION EMAIL SERVICE
export const resendVerificationEmail = async (email) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error("User not found!");

  const { verificationToken, tokenExp, hashedToken } =
    await generateAuthToken();

  await prisma.token.upsert({
    where: { userId: user.id },
    update: { verificationToken: hashedToken, expiresAt: tokenExp },
    create: {
      userId: user.id,
      verificationToken: hashedToken,
      expiresAt: tokenExp,
    },
  });

  await sendAuthMail(user.email, verificationToken, "login");

  return user;
};

// VERIFY TOKEN SERVICE
export const verifyTokenService = async (token, email) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error("User not found");

  const emailToken = await prisma.token.findFirst({
    where: { userId: user.id },
  });
  if (!emailToken) throw new Error("Email token not found");
  const isValidToken = await bcrypt.compare(
    token,
    emailToken.verificationToken
  );
  if (!isValidToken) throw new Error("Invalid token");
  // Check expiration
  if (new Date(emailToken.expiresAt) < new Date())
    throw new Error("Token expired");

  // Generate a FRESH JWT for session management
  const sessionToken = generateToken({ userId: user.id, email: user.email });

  // Clear verification token from DB
  await prisma.user.update({
    where: { id: user.id },
    data: { isVerified: true },
  });
  await prisma.token.delete({
    where: { userId: user.id },
  });

  return { user, sessionToken };
};

export const swap = async (oneTimeCode) => {};
