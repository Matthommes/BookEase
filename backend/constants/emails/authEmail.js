import { sendMail } from "../../config/mailer.js";
import { config } from "dotenv";
import { frontendUrl } from "../../utils/urls.js";

config();

export const sendAuthMail = async (email, token, type) => {
  const authLink = `${frontendUrl}/verify/${token}`;
  const currentYear = new Date().getFullYear();

  const emailSubject =
    type === "register"
      ? "Verify Your Clyne Account"
      : "Your Clyne Login Link";

  const emailBody = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Clyne - ${emailSubject}</title>
      <style>
        * {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          background-color: #f4f4f4;
          color: #333;
          line-height: 1.6;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          overflow: hidden;
        }
        .email-header {
          background-color: #a020f0;
          color: white;
          text-align: center;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .email-header img {
          max-height: 60px;
          max-width: 200px;
          margin-right: 15px;
        }
        .email-header h1 {
          font-size: 1.5rem;
          font-weight: 600;
          text-align: center;
        }
        .email-body {
          padding: 30px;
          text-align: center;
        }
        .email-body h2 {
          color: #a020f0;
          margin-bottom: 15px;
        }
        .cta-button {
          display: inline-block;
          background-color: #a020f0;
          color: white !important;
          text-decoration: none;
          padding: 12px 24px;
          border-radius: 6px;
          font-weight: 600;
          margin: 20px 0;
          transition: background-color 0.3s ease;
          border: none;
          cursor: pointer;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
        .cta-button:hover {
          background-color: #8010c0;
        }
        .alt-link {
          font-size: 0.875rem;
          color: #666;
          word-break: break-all;
          margin-top: 15px;
        }
        .email-footer {
          background-color: #f9f9f9;
          padding: 15px;
          text-align: center;
          font-size: 0.75rem;
          color: #888;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="email-header">
          <img src="${process.env.BRAND_LOGO_URL}" alt="Clyne Logo"/>
          
        </div>
        <div class="email-body">
          <h2>Hello, ${email.split("@")[0]}!</h2>
          <p>
            ${
              type === "register"
                ? "Thank you for signing up. Confirm your email to get started."
                : "Here's your secure login link. It will expire in 15 minutes."
            }
          </p>
          <a href="${authLink}" class="cta-button">
            ${type === "register" ? "Verify Account" : "Login to Clyne"}
          </a>
          <div class="alt-link">
            Or copy this link: ${authLink}
          </div>
        </div>
        <div class="email-footer">
          © ${currentYear} Clyne. 
          <a href="${process.env.FRONTEND_URL}/privacy-policy">Privacy</a> | 
          <a href="${process.env.FRONTEND_URL}/terms">Terms</a>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    await sendMail(email, emailBody, emailSubject);
    console.log(
      `${type === "register" ? "Registration" : "Login"} email sent to`,
      email
    );
  } catch (error) {
    console.error(
      `Error sending ${type === "register" ? "registration" : "login"} email:`,
      error
    );
  }
};
