import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact";
import queryRoutes from "./routes/query";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", contactRoutes);
app.use("/api", queryRoutes);

export default app;
