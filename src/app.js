// console.log("hello world!");
const express = require('express');
const app = express();
// middleWare
const checkAuth = (req, res) => {
    const status = false;
    if (status) {
        console.log("chào anh");
        next();
    }else{
        console.log("anh k có quyền truy cập");
    }
}
app.use("/",checkAuth)
((req, res, next) => {
    console.log("b2");
})



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

const Port = 3001;
server.listen(Port,()=>{
    console.log("Server is running Port" , Port);
});