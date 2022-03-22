import { Router } from "express";
import { create ,read} from "../controllers/category";
import { checkAuth } from "../middleWare/checkAuth";
const router = new Router();
router.post('/category', checkAuth, create);
router.get('/category/:id', checkAuth, read);
export default router;