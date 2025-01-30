import { prisma } from "../config/prisma.js";
import { sendAuthMail } from "../constants/emails/authEmail.js";
import { generateAuthToken, generateOTP } from "../utils/helpers.js";
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

  // Check expiration
  if (new Date(emailToken.expiresAt) < new Date())
    throw new Error("Token expired");
  const isValidToken = await bcrypt.compare(
    token,
    emailToken.verificationToken
  );
  if (!isValidToken) throw new Error("Invalid token");

  // Generate a FRESH JWT for session management
  const sessionToken = generateToken(user);

  // Clear verification token from DB
  await prisma.user.update({
    where: { id: user.id },
    data: { isVerified: true },
  });
  await prisma.token.delete({
    where: { id: emailToken.id },
  });

  return { user, sessionToken };
};

// Google Callback

export const googleCallbacks = async (user) => {
  const { otp, codeExp } = await generateOTP();
  await prisma.token.upsert({
    where: { userId: user.id },
    update: { verificationToken: otp, expiresAt: codeExp },
    create: { userId: user.id, verificationToken: otp, expiresAt: codeExp },
  });
  return otp;
};

export const swap = async (oneTimeCode) => {
  const otp = await prisma.token.findFirst({
    where: { verificationToken: oneTimeCode },
  });
  if (!otp) throw new Error("No token found");
  if (new Date(otp.expiresAt) < new Date()) throw new Error("Token expired");
  const user = await prisma.user.findUnique({
    where: { id: otp.userId },
  });

  const jwt = generateToken(user);

  if (!user) throw new Error("User not found");
  await prisma.token.delete({
    where: { id: otp.id },
  });
  return jwt;
};
