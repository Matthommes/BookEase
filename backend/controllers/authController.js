import { HttpStatusCodes as code } from "../constants/httpStatusCodes.js";
import { prisma } from "../config/prisma.js";
import crypto from "crypto";
import { sendRegisterMail } from "../constants/emails/registerMail.js";
import { addMinutes, getMinutes } from "date-fns";

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
        .json({ message: "Email already exists!" });

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

export const verifyToken = async (req, res) => {};

export const loginUser = async (req, res) => {
  const { email } = req.body;
  if (!email)
    return res
      .status(code.BAD_REQUEST)
      .json({ message: "Please enter an email address!" });

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user)
    res.status(code.NOT_FOUND).json({ message: "Email doesn't exist" });

  // GENERATE LOGIN TOKEN

  const token = crypto.randomBytes(32).toString("hex");
  const tokenExp = addMinutes(new Date(), 5);

  await prisma.user.update({ where: { email }, data: { token, tokenExp } });
  
};
