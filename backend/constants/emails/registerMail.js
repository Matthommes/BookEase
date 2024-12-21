import { sendMail } from "../../config/mailer.js";
import { config } from "dotenv";


config();

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const sendRegisterMail = async (email, token) => {
  const registrationLink = `${process.env.FRONTEND_URL}/register/confirm?token=${token}`;
  const currentYear = new Date().getFullYear();

  const emailSubject = "Verify Your Email for BookSmartly";
  const emailBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #fff; color: #333;">
        <div style="text-align: center; background-color: #f5f5f5; padding: 20px; border-bottom: 1px solid #ddd;">
            <img src="${
              process.env.BRAND_LOGO_URL
            }" alt="BookSmartly Logo" style="max-width: 100px; margin-bottom: 15px;">
            <h1 style="color: #333; margin: 0;">Welcome to BookSmartly!</h1>
        </div>
        <div style="padding: 20px;">
            <h2 style="color: #444;">Hello, ${email.split("@")[0]}!</h2>
            <p style="font-size: 16px; line-height: 1.6; color: #555;">
                Thank you for signing up with <strong>BookSmartly</strong>. We are excited to have you onboard! To get started, we need to confirm your email address. Please click the button below to verify your email and proceed to the app.
            </p>
            <div style="text-align: center; margin: 30px 0;">
                <a href="${registrationLink}" 
                    style="display: inline-block; background-color: #a020f0; color: white; text-decoration: none; padding: 12px 24px; font-size: 16px; border-radius: 5px; font-weight: bold;">
                    Verify My Email
                </a>
            </div>
            <p style="font-size: 14px; color: #777; text-align: center;">
                If the button above doesn’t work, copy and paste this link into your browser:
            </p>
            <p style="font-size: 14px; color: #6c63ff; word-break: break-word; text-align: center;">
                <a href="${registrationLink}" style="color: #6c63ff; text-decoration: none;">${registrationLink}</a>
            </p>
        </div>
        <div style="background-color: #f9f9f9; padding: 15px; text-align: center; font-size: 12px; color: #aaa; border-top: 1px solid #ddd;">
            <p style="margin: 0;">© ${currentYear} BookSmartly. All rights reserved.</p>
            <p style="margin: 5px 0;">
                <a href="${
                  process.env.FRONTEND_URL
                }/privacy-policy" style="color: #888; text-decoration: none;">Privacy Policy</a> | 
                <a href="${
                  process.env.FRONTEND_URL
                }/terms" style="color: #888; text-decoration: none;">Terms of Service</a>
            </p>
        </div>
    </div>
    <style>
      @media (prefers-color-scheme: dark) {
        div {
          background-color: #1a1a1a !important;
          color: #eee !important;
          border: 1px solid #333 !important;
        }
        div h1, div h2, div a {
          color: #fff !important;
        }
        div a {
          background-color: #a020f0 !important;
        }
      }
    </style>
  `;


  try {
    await sendMail(email, emailBody, emailSubject);
    console.log("Registration email sent successfully to", email);
  } catch (error) {
    console.error("Error sending registration email:", error);
  }
};
