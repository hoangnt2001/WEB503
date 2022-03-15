// const products = [
//             {id:1,name:"productA"},
//             {id:2,name:"productB"},
//             {id:3,name:"productB"},
//             {id:4,name:"productB"},
//         ];
//khởi tạo model

import Product from '../Models/Product'
//API thêm sản phẩm

export const create = async (req, res) => {
    try {
        const product = await new Product(req.body).save();
        res.json(product)    
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được sản phẩm anh ei"
        })
    }
}
// API list sản phẩm
export const list = async (req, res) => { 
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}
//API tìm sp
export const read = async (req, res) => { 
    const filter = {_id : +req.params.id };
    try {
        const products = await Product.findOne(filter);
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}
export const remove = async (req, res) => { 
    const conditional = {_id : +req.params.id };
    try {
        const products = await Product.findOneAndDelete(conditional);
        res.json({
            message : "xóa rồi còn đâu",
            data: products
        });
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không xóa được sản phẩm"
        })
    }
}
export const update = async (req, res) => { 
    const conditional = {_id : +req.params.id };
    const doc = req.body;
    const option = {new :true};
    try {
        const products = await Product.findOneAndUpdate(conditional,doc, option)
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không cập nhật được sản phẩm"
        })
    }
}
// export const list = (req, res) =>{
//     res.json(products)
// }
// export const read = (req, res) =>{
//     res.json(products.find(item => item.id === +req.params.id))
// }
// export const remove = (req, res) =>{
//     res.json(products.filter(item => item.id !== +req.params.id))
// }
// export const update = (req, res) =>{
//     res.json(products.map(item => item.id === +req.params.id ?req.body : item ));
// }
// export const create =  (req, res) => {
//     // products.push(req.body);
//     const product  = req.body
//     res.json(product);
// }