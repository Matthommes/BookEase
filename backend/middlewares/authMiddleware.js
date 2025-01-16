import { verifyToken } from "../controllers/authController.js";
import { HttpStatusCodes as code } from "../constants/httpStatusCodes.js";

// middleware to authenticate user JWT token

export const authenticate = (req, res, next) => {
  try {
    const cookie = req.cookies.cookie;

    if (!cookie)
      return res.status(code.UNAUTHORIZED).json({ message: "No Token" });

    if(cookie.expiresIn > )
  } catch (error) {
    console.error(error);
    res
      .status(code.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal Server Error" });
  }
};

// export const authenticate = (req, res, next) => {
//   try {
//     const token = req.headers["authorization"].split(" ")[1];

//     if (!token)
//       return res.status(code.UNAUTHORIZED).json({ message: "No token!" });

//     const decode = verifyToken(token);
//     if (!decode)
//       return res.status(403).json({ message: "Invalid or expired token" });

//     req.user = decode;
//     next();
//   } catch (error) {
//     console.error("Unable to authenticate user");
//   }
// };
