import bcrypt from "bcrypt";
import crypto from "crypto";
import { addMinutes, subHours } from "date-fns";

export const generateAuthToken = async() => {
  const token = crypto.randomBytes(20).toString("hex");
  const tokenExp = addMinutes(new Date(), 15);
  const hashedToken = await bcrypt.hash(token, 10);
  return { token, tokenExp, hashedToken };
};
