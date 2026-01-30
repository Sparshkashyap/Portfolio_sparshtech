import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const EMAIL_USER = process.env.EMAIL_USER;        // your gmail
const EMAIL_PASS = process.env.EMAIL_PASS;        // Gmail App Password
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;      // where mail is received

if (!EMAIL_USER || !EMAIL_PASS || !ADMIN_EMAIL) {
  throw new Error("❌ Email env vars missing");
}

// ✅ Create transporter ONCE (IMPORTANT)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,               // 🔥 must be 465 on Render
  secure: false,            // 🔥 must be true
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,      // 🔐 App Password only
  },
  connectionTimeout: 30000,
  socketTimeout: 30000,
});

// ❗ Optional: verify ONLY in dev, not prod
if (process.env.NODE_ENV !== "production") {
  transporter.verify()
    .then(() => console.log("✅ SMTP ready"))
    .catch(err => console.error("❌ SMTP verify failed:", err));
}

export const sendMail = async (
  subject: string,
  html: string,
  replyTo?: string
): Promise<void> => {
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
