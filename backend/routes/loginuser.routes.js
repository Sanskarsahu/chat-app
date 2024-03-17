import express  from "express";
import proectRoute from "../middleware/protectRoute.js";
import { getUerForNav } from "../controller/logedincontroler.js";


const router= express.Router();

router.get("/",proectRoute,getUerForNav);

export default router;