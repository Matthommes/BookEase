import { verifyJwt } from "../config/jwt.js";
import { AppError } from "../middlewares/errorMiddleware.js";

export const authenticate = (req, res, next) => {
  try {
    const cookie = req.cookies?.token;

    if (!cookie) {
      throw new AppError("No Token provided", 401);
    }

    const decode = verifyJwt(cookie);
    req.user = decode;

    next();
  } catch (error) {
    next(error);
  }
};
