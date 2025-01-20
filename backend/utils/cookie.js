export const setCookie = (res, token, expiresIn) => {
  const cookieOptions = {
    expires: expiresIn,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  };
  res.cookie("token", token, cookieOptions);
};
