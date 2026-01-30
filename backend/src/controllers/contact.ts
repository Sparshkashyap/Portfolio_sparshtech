import { Request, Response } from "express";
import { Contact } from "../models/contact";
import { sendMail } from "../services/mail.service";

interface ContactBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const submitContactForm = async (
  req: Request<{}, {}, ContactBody>,
  res: Response
) => {
  try {
    console.log("CONTACT API HIT");

    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // 1️⃣ Save to DB
    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    });

    // 2️⃣ Send email (non-blocking)
    sendMail(
      `Portfolio_Sparsh | ${name}`,
      `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b> ${message}</p>
      `,
      email
    ).catch((err) => {
      console.error("Email failed but DB saved:", err);
    });

    // 3️⃣ Respond immediately
    return res.status(201).json({
      success: true,
      message: "Message received successfully",
      data: contact,
    });
  } catch (error) {
    console.error("Contact submission error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
