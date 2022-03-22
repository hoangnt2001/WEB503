// console.log("hello world!");
const express = require('express');
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import productRouter from '../routers/product';
import postRouter from '../routers/post'
import UserRouter from '../routers/User'
import CategoryRouter from '../routers/category'

const app = express();

// middleWare
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
//router
app.use("/api",productRouter);
app.use("/api",postRouter);
app.use("/",UserRouter)
app.use("/api",CategoryRouter);
//connect database
mongoose.connect("mongodb://127.0.0.1:27017/we16309")
.then(()=>console.log("Connect database success"))
.catch((err)=>console.log(err));

//connection 
const Port = 3001;
app.listen(Port,()=>{
    console.log("Server is running Port" , Port);
});

// const checkAuth = (req, res,next) => {
//     const status = true;
//     if (status) {
//         console.log("chào anh");
//         next();
//     }else{
//         console.log("anh k có quyền truy cập");
//     }
// }
// app.get("/",checkAuth,(req, res)=>{
//     res.send("<h1>hello</h1>");
// })




// const server = http.createServer((req,res) =>{
//     console.log("req", req.url);
//     if (req.url ===  "/") {
//         res.setHeader('Content-Type', 'text/html');
//         res.write("<html><body><h1>Đây là Trang Home Page</h1></body></html>")
//         res.end();
//         console.log("HomePage");        
//     }else if (req.url ===("/api/products")) {

//         const products = [
//             {id:1,name:"hoangntph17120"},
//             {id:2,name:"hoangntph17122"},
//             {id:3,name:"hoangntph17123"},
//             {id:4,name:"hoangntph17124"},
//             {id:5,name:"hoangntph17125"},
//         ]
//         res.end(JSON.stringify(products));
//         console.log("ProductsPage");
//     }else {
//         console.log("chịu không biết");
//     }
// });

