import { Router } from "express";
import { SignUp } from "../controllers/User";
import { checkAuth } from "../middleWare/checkAuth";
const router = Router();
router.post('/signup',checkAuth, SignUp)
export default router;
