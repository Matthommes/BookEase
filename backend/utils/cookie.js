import { frontendUrl } from "./urls.js";

export const setCookie = (res, token, expiresIn) => {
  const cookieOptions = {
    maxAge: expiresIn,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    domain: frontendUrl,
    path: "/"
  };
  res.cookie("token", token, cookieOptions);
};
