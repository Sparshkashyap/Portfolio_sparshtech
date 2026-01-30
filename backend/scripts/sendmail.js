import nodemailer from "nodemailer";
import dotenv from "dotenv";

console.log("SEND MAIL FILE RUNNING");

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

try {
  console.log("VERIFYING SMTP...");
  await transporter.verify();
  console.log("SMTP VERIFIED");

  console.log("SENDING MAIL...");
  const info = await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "Portfolio sparsh",
    text: "Brother is trying to connect gmail to the portfoilo",
  });

  console.log("MAIL SENT:", info.messageId);
} catch (err) {
  console.error("ERROR:", err);
}
