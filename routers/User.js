import { Router } from "express";
import { list, signIn, SignUp } from "../controllers/User";
import { checkAuth } from "../middleWare/checkAuth";
const router = Router();
router.post('/signup',checkAuth, SignUp);
router.post('/signin',checkAuth, signIn)
router.get('/users',checkAuth, list)
export default router;
