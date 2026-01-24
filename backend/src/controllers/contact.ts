import { Request, Response } from "express";
import { Contact } from "../models/contact";
import { sendWhatsApp } from "../services/whatsapp";

export const submitContactForm = async (req: Request, res: Response) => {
  try {
    const { name, email, message,subject } = req.body;

    if (!name || !email || !message ||!subject) {
      return res.status(400).json({ message: "All fields required" });
    }

    const contact = await Contact.create({ name, email, message,subject });

    await sendWhatsApp(name, email, subject, message);




    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: contact
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
