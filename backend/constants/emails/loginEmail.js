import { sendMail } from "../../config/mailer.js";
import { config } from "dotenv";
import { frontendUrl } from "../../utils/urls.js";
config();

export const sendLoginEmail = async (email, token) => {
  const loginLink = `${frontendUrl}/verify/${token}`;
  const currentYear = new Date().getFullYear();

  const emailSubject = "Your Login Link for BookSmartly";
  const emailBody = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
            color: #333;
          }
          .email-container {
            max-width: 600px;
            margin: 30px auto;
            background: #ffffff;
            border-radius: 10px;
            padding: 25px;
            border: 1px solid #e0e0e0;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .email-header {
            text-align: center;
            padding: 20px;
            border-bottom: 1px solid #f0f0f0;
          }
          .email-header img {
            max-width: 100px;
            margin-bottom: 15px;
          }
          .email-header h1 {
            font-size: 26px;
            color: #333;
            margin: 0;
          }
          .email-body {
            padding: 20px;
            text-align: center;
          }
          .email-body h2 {
            font-size: 22px;
            color: #444;
            margin: 0 0 15px;
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
            color: #ffffff;
            text-decoration: none;
            padding: 12px 30px;
            font-size: 16px;
            border-radius: 5px;
            font-weight: bold;
            margin: 20px auto;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            transition: background-color 0.3s ease, transform 0.2s ease;
          }
          .cta-button:hover {
            background-color: #8700d4;
            transform: translateY(-2px);
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
            font-size: 13px;
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
              color: #fff;
            }
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="email-header">
            <img src="${process.env.BRAND_LOGO_URL}" alt="BookSmartly Logo">
            <h1>Welcome Back to BookSmartly!</h1>
          </div>
          <div class="email-body">
            <h2>Hello, ${email.split("@")[0]}!</h2>
            <p>
              You requested a login link to access your <strong>BookSmartly</strong> account. Click the button below to securely log in. This link is valid for a limited time.
            </p>
            <p>
              <a href="${loginLink}" class="cta-button">Log In to My Account</a>
            </p>
            <p style="text-align: center; font-size: 14px; color: #777;">
              If the button above doesn’t work, copy and paste this link into your browser:
            </p>
            <p class="alt-link">
              <a href="${loginLink}">${loginLink}</a>
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
    console.log("Login email sent successfully to", email);
  } catch (error) {
    console.error("Error sending login email:", error);
  }
};
