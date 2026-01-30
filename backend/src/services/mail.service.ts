// mail.service.ts
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendMail = async (subject: string, text: string, to?: string) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: to ?? process.env.ADMIN_EMAIL,
    subject,
    text,
  });
};
