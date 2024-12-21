import { sendMail } from "../../config/mailer.js";
import { config } from "dotenv";
config();

export const sendLoginEmail = async (email, token) => {
  const template = ``;

  try {
      await sendMail(email, template, "Here's your login link");
      console.log("Registration email sent successfully to", email);
  } catch (error) {console.error("Error sending registration email:", error);}

};