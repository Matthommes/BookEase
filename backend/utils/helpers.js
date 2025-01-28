import bcrypt from "bcryptjs";
import crypto from "crypto";
import { addMinutes, subHours } from "date-fns";

export const generateAuthToken = async () => {
  const verificationToken = crypto.randomBytes(32).toString("hex");
  const tokenExp = addMinutes(new Date(), 30);
  const hashedToken = await bcrypt.hash(verificationToken, 10);
  return { verificationToken, tokenExp, hashedToken };
};
