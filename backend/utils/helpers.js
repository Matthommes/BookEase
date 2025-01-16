import bcrypt from "bcrypt";
import crypto from "crypto";

export const generateEmailToken = () => {
  const token =  crypto.randomBytes(32).toString("hex");
  const hashedToken = bcrypt.hash(token, 10);
  return hashedToken;
};
