import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const { EMAIL_USER, EMAIL_PASS, ADMIN_EMAIL } = process.env;

if (!EMAIL_USER || !EMAIL_PASS || !ADMIN_EMAIL) {
  throw new Error("Missing EMAIL_USER, EMAIL_PASS or ADMIN_EMAIL in .env");
}

// Create transporter ONCE
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

// ❗ NO verify(), NO send here

export const sendMail = async (
  subject: string,
  html: string,
  replyTo?: string
): Promise<void> => {
  await transporter.sendMail({
    from: `"Portfolio Contact" <${EMAIL_USER}>`,
    to: ADMIN_EMAIL,
    subject,
    html,
    replyTo,
  });
};
