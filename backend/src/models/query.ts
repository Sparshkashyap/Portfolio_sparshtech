
import { Schema, model } from "mongoose";

const QuerySchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    queryType: { type: String, required: true },
    message: { type: String, required: true }
  },
  { timestamps: true }
);

export const Query = model("Query", QuerySchema);
