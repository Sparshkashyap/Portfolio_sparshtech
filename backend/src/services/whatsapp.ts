import twilio from "twilio";
import dotenv from "dotenv";
dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid!, authToken!);


export const sendWhatsApp = async (
  name: string,
  email: string,
  subject: string,
  message: string
) => {
  try {
    console.log("➡️ sendWhatsApp called");  // debug
    const res = await client.messages.create({
      from: "whatsapp:+14155238886",   // Twilio sandbox
      to: "whatsapp:+916397426613",    // Exact joined sandbox number
      body: `🚀 New Query Received

Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}`
    });
    console.log("WhatsApp Sent! SID:", res.sid);
  } catch (err: any) {
    console.error("WhatsApp ERROR:", err.message);
  }
};


