import bcrypt from "bcrypt";
import crypto from "crypto";

export const generateEmailToken = () => {
  const token =  crypto.randomBytes(32).toString("hex");
  return token;
};
