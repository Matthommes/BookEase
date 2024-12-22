import jwt from "jsonwebtoken";

export const generateToken = (payload) => {
  const secret = process.env.JWT_SECRET;
  return jwt.sign(payload, secret, { expiresIn: "30d" });
};

export const verifyJwt = (token) => {
  try {
    const secret = process.env.JWT_SECRET;
    return jwt.verify(token, secret);
  } catch (error) {
    console.error(error);
  }
};
