import { Router } from "express";
import { submitQueryForm } from "../controllers/query.js";

const router = Router();

router.post("/query", submitQueryForm);

export default router;
