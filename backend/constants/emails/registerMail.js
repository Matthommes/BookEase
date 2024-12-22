import { sendMail } from "../../config/mailer.js";
import { config } from "dotenv";


config();


export const sendRegisterMail = async (email, token) => {
  const registrationLink = `${process.env.FRONTEND_URL}/verify?token=${token}`;
  const currentYear = new Date().getFullYear();

  const emailSubject = "Verify Your Email for BookSmartly";
  const emailBody = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            color: #333;
          }
          .email-container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border-radius: 10px;
            padding: 20px;
            border: 1px solid #ddd;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          .email-header {
            text-align: center;
            background-color: #f5f5f5;
            padding: 20px;
            border-bottom: 1px solid #ddd;
          }
          .email-header img {
            max-width: 100px;
            margin-bottom: 15px;
          }
          .email-header h1 {
            font-size: 24px;
            color: #333;
            margin: 0;
          }
          .email-body {
            padding: 20px;
          }
          .email-body h2 {
            font-size: 20px;
            color: #444;
            margin: 0 0 10px;
          }
          .email-body p {
            font-size: 16px;
            line-height: 1.6;
            color: #555;
            margin: 10px 0;
          }
          .cta-button {
            display: inline-block;
            background-color: #a020f0;
            color: white;
            text-decoration: none;
            padding: 12px 24px;
            font-size: 16px;
            border-radius: 5px;
            font-weight: bold;
            margin: 20px auto;
          }
          .alt-link {
            font-size: 14px;
            color: #6c63ff;
            word-break: break-word;
            text-align: center;
          }
          .email-footer {
            background-color: #f9f9f9;
            padding: 15px;
            text-align: center;
            font-size: 12px;
            color: #aaa;
            border-top: 1px solid #ddd;
          }
          .email-footer a {
            color: #888;
            text-decoration: none;
            margin: 0 5px;
          }
          @media (prefers-color-scheme: dark) {
            body {
              background-color: #1a1a1a;
              color: #eee;
            }
            .email-container {
              background-color: #1a1a1a;
              border: 1px solid #333;
            }
            .email-header h1, 
            .email-body h2, 
            .email-footer a {
              color: #fff;
            }
            .cta-button {
              background-color: #a020f0;
            }
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="email-header">
            <img src="${process.env.BRAND_LOGO_URL}" alt="BookSmartly Logo">
            <h1>Welcome to BookSmartly!</h1>
          </div>
          <div class="email-body">
            <h2>Hello, ${email.split("@")[0]}!</h2>
            <p>
              Thank you for signing up with <strong>BookSmartly</strong>. We are excited to have you onboard! To get started, we need to confirm your email address. Please click the button below to verify your email and proceed to the app.
            </p>
            <p style="text-align: center;">
              <a href="${registrationLink}" class="cta-button">Verify My Email</a>
            </p>
            <p style="text-align: center; font-size: 14px; color: #777;">
              If the button above doesn’t work, copy and paste this link into your browser:
            </p>
            <p class="alt-link">
              <a href="${registrationLink}">${registrationLink}</a>
            </p>
          </div>
          <div class="email-footer">
            <p>© ${currentYear} BookSmartly. All rights reserved.</p>
            <p>
              <a href="${
                process.env.FRONTEND_URL
              }/privacy-policy">Privacy Policy</a> |
              <a href="${process.env.FRONTEND_URL}/terms">Terms of Service</a>
            </p>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    await sendMail(email, emailBody, emailSubject);
    console.log("Registration email sent successfully to", email);
  } catch (error) {
    console.error("Error sending registration email:", error);
  }
};
