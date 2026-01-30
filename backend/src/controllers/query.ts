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
    const { name, email, queryType, message } = req.body;

    // 1. Validate input
    if (!name || !email || !queryType || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // 2. Save query (source of truth)
    const savedQuery = await Query.create({
      name: name.trim(),
      email: email.trim(),
      queryType: queryType.trim(),
      message: message.trim(),
    });

    // 3. Fire-and-forget email (non-blocking)
    sendMail(
      `New Query | ${queryType}`,
      `
        <h3>New User Query</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Query Type:</b> ${queryType}</p>
        <p><b>Message:</b> ${message}</p>
      `,
      email
    ).catch((err) => {
      console.error("Email failed but query saved:", err);
    });

    // 4. Respond immediately
    return res.status(201).json({
      success: true,
      message: "Query submitted successfully",
      data: savedQuery,
    });
  } catch (error) {
    console.error("Query submit error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
