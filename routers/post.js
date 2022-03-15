import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/posts";
import { checkAuth } from "../middleWare/checkAuth"
 const router = Router();

router.get('/posts', checkAuth, list);
router.get('/post/:id', checkAuth, read);
router.post('/posts', checkAuth, create);
router.delete('/post/:id', checkAuth, remove);
router.patch("/post/:id", checkAuth, update );
router.put("/post/:id", checkAuth, update );


export default router;