import dotenv from "dotenv";
import {Resend} from "resend";
dotenv.config();

const resend = new Resend(process.env.RESEND_KEY)

const EMAIL_USER = process.env.EMAIL_USER;        // your gmail
const EMAIL_PASS = process.env.EMAIL_PASS;        // Gmail App Password
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;      // where mail is received

if (!EMAIL_USER || !EMAIL_PASS || !ADMIN_EMAIL) {
  throw new Error("❌ Email env vars missing");
}

export const sendMail = async (
  subject: string,
  html: string
): Promise<void> => {
  try {
    await resend.emails.send({
      to: process.env.ADMIN_EMAIL!,
      // After domain expiry:     from: "Acme <onboarding@resend.dev>",
      // query@sparshtech.me
      from: "Portfolio <onboarding@resend.dev>",
      subject,
      html
    })
    console.log("✅ Email sent");
  } catch (error) {
    console.error("❌ Email send failed:", error);
    throw error;
  }
};
