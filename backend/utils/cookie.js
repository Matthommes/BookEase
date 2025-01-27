export const setCookie = (res, token, expiresIn) => {
  const cookieOptions = {
    maxAge: expiresIn,
    httpOnly: true,
    secure: false,
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    path: "/",
  };
  res.cookie("token", token, cookieOptions);
};
