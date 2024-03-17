import express from "express";
import { getMessage, sendMessage } from "../controller/message.controller.js"
import proectRoute from "../middleware/protectRoute.js";
const router =express.Router();

router.get("/:id",proectRoute,getMessage);
router.post("/send/:id",proectRoute,sendMessage);

export default router;