// mail.service.ts
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: 'sparshkashyap655@gmail.com',
    pass: 'evtbluiandvbrjch',
  },
});

export const sendMail = async (subject: string, text: string, to?: string) => {
  await transporter.sendMail({
    from:'sparshkashyap655@gmail.com',
    to: to ?? 'sparshkashyap655@gmail.com',
    subject,
    text,
  });
};
