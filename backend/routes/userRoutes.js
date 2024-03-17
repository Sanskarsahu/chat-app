import express  from "express";
import proectRoute from "../middleware/protectRoute.js";
import { getUerForSidebar } from "../controller/userController.js";

const router= express.Router();

router.get("/",proectRoute,getUerForSidebar);

export default router;