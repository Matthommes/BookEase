import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  const secret = process.env.JWT_SECRET;
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      onboardingComplete: user.onboardingComplete,
    },
    secret,
    {
      expiresIn: "30d",
    }
  );
};

export const verifyJwt = (token) => {
  try {
    const secret = process.env.JWT_SECRET;
    return jwt.verify(token, secret);
  } catch (error) {
    console.error(error);
  }
};
