import { Request, Response } from "express";
import { Query } from "../models/query";
import { sendWhatsApp } from "../services/whatsapp";

export const submitQueryForm = async (req: Request, res: Response) => {
  try {
    const { name, email, queryType, message } = req.body;

    if (!name || !email || !queryType ||!message) {
      return res.status(400).json({ message: "All fields required" });
    }

    const contact_query = await Query.create({ name, email, queryType,message });
     // 2️⃣ Send WhatsApp notification
  await sendWhatsApp(name, email, queryType,message);


    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: contact_query
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
