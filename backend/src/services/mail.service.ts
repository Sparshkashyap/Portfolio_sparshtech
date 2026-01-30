import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

if (!EMAIL_USER || !EMAIL_PASS || !ADMIN_EMAIL) {
  console.error("❌ Email env vars missing", {
    EMAIL_USER: !!EMAIL_USER,
    EMAIL_PASS: !!EMAIL_PASS,
    ADMIN_EMAIL: !!ADMIN_EMAIL,
  });
}

// Create transporter ONCE
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS, // MUST be App Password
  },
});

// 🔍 verify SMTP connection at runtime
transporter.verify((err, success) => {
  if (err) {
    console.error("❌ SMTP verify failed:", err);
  } else {
    console.log("✅ SMTP server ready");
  }
});

export const sendMail = async (
  subject: string,
  html: string,
  replyTo?: string
): Promise<void> => {
  if (!EMAIL_USER || !EMAIL_PASS || !ADMIN_EMAIL) {
    throw new Error("Email service not configured");
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${EMAIL_USER}>`,
      to: ADMIN_EMAIL,
      subject,
      html,
      replyTo,
    });

    console.log("✅ Email sent");
  } catch (error) {
    console.error("❌ Email send failed:", error);
    throw error;
  }
};
