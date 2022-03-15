import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/products";
import { checkAuth } from "../middleWare/checkAuth"
const router = Router();

// router.get("/api/products",checkAuth,(req, res) =>{
//     const products = [
//         {id:1,name:"productA"},
//         {id:2,name:"productB"},
//         {id:3,name:"productB"},
//         {id:4,name:"productB"},
//     ];
//     res.json(products) 
// });
// router.post("/api/products",checkAuth,(req, res) =>{
//     const products = [
//         {id:1,name:"productA"},
//         {id:2,name:"productB"},
//         {id:3,name:"productc"},
//         {id:4,name:"productd"},

//     ];
//     products.push(req.body);
//     res.json(products)
// })
router.get('/products', checkAuth, list);
router.get('/product/:id', checkAuth, read);
router.post('/products', checkAuth, create);
router.delete('/product/:id', checkAuth, remove);
router.patch("/product/:id", checkAuth, update );
router.put("/product/:id", checkAuth, update );

export default router;