import { HttpStatusCodes as code } from "../constants/httpStatusCodes.js";
import { prisma } from "../config/prisma.js";
import crypto from "crypto";
import { sendRegisterMail } from "../constants/emails/registerMail.js";
import { addMinutes, getMinutes } from "date-fns";
import { sendLoginEmail } from "../constants/emails/loginEmail.js";
import { generateToken } from "../config/jwt.js";
 
export const registerUser = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email)
      return res
        .status(code.BAD_REQUEST)
        .json({ message: "Email is required" });
    const userExists = await prisma.user.findUnique({ where: { email } });
    if (userExists)
      return res
        .status(code.CONFLICT)
        .json({ message: "A user with this email already exists!!" });

    const token = crypto.randomBytes(32).toString("hex");
    const tokenExp = addMinutes(new Date(), 5);
    const newUser = await prisma.user.create({
      data: { email, token, tokenExp },
    });
    await sendRegisterMail(newUser.email, newUser.token);

    res.status(code.CREATED).json({
      message: "User created successfully",
      user: { id: newUser.id, email: newUser.email },
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
    console.log(error);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email)
      return res
        .status(code.BAD_REQUEST)
        .json({ message: "Please enter an email address!" });

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user)
      return res
        .status(code.NOT_FOUND)
        .json({ message: "Email doesn't exist" });

    // GENERATE LOGIN TOKEN

    const token = crypto.randomBytes(32).toString("hex");
    const tokenExp = addMinutes(new Date(), 5);

    await prisma.user.update({ where: { email }, data: { token, tokenExp } });

    await sendLoginEmail(email, token);
    res.status(code.OK).json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    res
      .status(code.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal Server Error", error });
  }
};

export const verifyToken = async (req, res) => {
  const { token } = req.query;

  if (!token)
    return res.status(code.BAD_REQUEST).json({ message: "No token provided!" });
  const user = await prisma.user.findUnique({ where: { token } });
  if (!user)
    return res.status(code.NOT_FOUND).json({ message: "User not found" });

  if (new Date(user.tokenExp) < new Date())
    return res.status(code.FORBIDDEN).json({ message: "Token expired" });

  const tokenPayload = generateToken({
    userId: user.id,
    userEmail: user.email,
  });
  await prisma.user.update({
    where: { id: user.id },
    data: { token: "", tokenExp: null },
  });
  res.json({ message: "Token verified", user: tokenPayload });
};


export const getAllUsers = async(req, res) => {
  const users = await prisma.user.findMany()
  res.status(code.ACCEPTED).json(users)
}