export const setCookie = (res, token, expiresIn) => {
  const cookieOptions = {
    maxAge: expiresIn,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    path: "/",
  };
  res.cookie("token", token, cookieOptions);
};
