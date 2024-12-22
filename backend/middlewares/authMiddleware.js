import { verifyToken } from "../controllers/authController";
import { HttpStatusCodes as code } from "../constants/httpStatusCodes";

export const authenticate = (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];

    if (!token)
      return res.status(code.UNAUTHORIZED).json({ message: "No token!" });

    const decode = verifyToken(token);
    if (!decode)
      return res.status(403).json({ message: "Invalid or expired token" });

    req.user = decode;
    next();
  } catch (error) {
    console.error("Unable to authenticate user");
  }
};
