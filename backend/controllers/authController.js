import { HttpStatusCodes as code } from "../constants/httpStatusCodes.js";
import { prisma } from "../config/prisma.js";
import crypto from "crypto";
import { sendRegisterMail } from "../constants/emails/registerMail.js";
import { sendMail } from "../config/mailer.js";

const newUser = {
  email: "hi.matthewakahomen@gmail.com",
  token: "er3453444yrr3465",
};
sendRegisterMail(newUser.email, newUser.token);
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

    const newUser = await prisma.user.create({
      data: { email, token },
    });
    sendRegisterMail(newUser);

    res
      .status(code.CREATED)
      .json({ message: "User created successfully", newUser });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
    console.log(error);
  }
};
