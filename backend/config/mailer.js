import nodemailer from "nodemailer";

export const sendMail = async (to, html, subject, attachments = []) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: `<theformsender@gmail.com>`, // Corrected
    to,
    subject,
    html,
    attachments,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error sending email:", error);
        reject(new Error("Failed to send email"));
      } else {
        console.log("Email sent:", info.response);
        resolve(info);
      }
    });
  });
};
