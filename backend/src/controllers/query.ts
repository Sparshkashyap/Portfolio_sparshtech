import { Request, Response } from "express";
import { Query } from "../models/query";
import { sendMail } from "../services/mail.service";

interface QueryBody {
  name: string;
  email: string;
  queryType: string;
  message: string;
}

export const submitQueryForm = async (
  req: Request<{}, {}, QueryBody>,
  res: Response
) => {
  try {
    console.log("QUERY API HIT");

    const { name, email, queryType, message } = req.body;

    // 1️⃣ Validate input
    if (!name || !email || !queryType || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // 2️⃣ Save to DB (source of truth)
    const query = await Query.create({
      name: name.trim(),
      email: email.trim(),
      queryType: queryType.trim(),
      message: message.trim(),
    });

    // 3️⃣ Send email (non-blocking, fire-and-forget)
    sendMail(
      `Portfolio_Sparsh | ${name} `,
      `
        <h3>New User Query</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Query Type:</b> ${queryType}</p>
        <p><b>Message:</b> ${message}</p>
      `
    ).catch((err) => {
      console.error("Email failed but query saved:", err);
    });

    // 4️⃣ Respond immediately
    return res.status(201).json({
      success: true,
      message: "Query submitted successfully",
      data: query,
    });
  } catch (error) {
    console.error("Query submission error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
