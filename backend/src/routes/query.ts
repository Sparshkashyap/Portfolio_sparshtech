import { Router } from "express";
import { submitQueryForm } from "../controllers/query";

const router = Router();

router.post("/query", submitQueryForm);

export default router;
