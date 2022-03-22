
import slugify from "slugify";
import Category from "../Models/Category"
import Product from "../Models/Product";
export const create = async (req, res) => {
    req.body.slug =  slugify(req.body.name);
    try {
        const category = await new Category(req.body).save();
        res.json(category)    
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được danh mục anh ei"
        })
    }
}
//API tìm sp

export const read = async (req, res) => { 
    const category = await Category.findOne({_id : req.params.id}).exec();
    const products = await Product.find({category: category}).populate('category').select('-category').exec()
    try {
        // const products = await Category.find(filter);
        res.json(products,category);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}
// API list sản phẩm
// export const list = async (req, res) => { 
//     try {
//         const category = await Category.find().exec();
//         res.json(category);
//     } catch (error) {
//         res.status(400).json({
//             message: "Lỗi không tìm được sản phẩm"
//         })
//     }
// }



// export const remove = async (req, res) => { 
//     const conditional = {_id : +req.params.id };
//     try {
//         const products = await Category.findOneAndDelete(conditional);
//         res.json({
//             message : "xóa rồi còn đâu",
//             data: products
//         });
//     } catch (error) {
//         res.status(400).json({
//             message: "Lỗi không xóa được sản phẩm"
//         })
//     }
// }
// export const update = async (req, res) => { 
//     const conditional = {_id : +req.params.id };
//     const doc = req.body;
//     const option = {new :true};
//     try {
//         const products = await Category.findOneAndUpdate(conditional,doc, option)
//         res.json(products);
//     } catch (error) {
//         res.status(400).json({
//             message: "Lỗi không cập nhật được sản phẩm"
//         })
//     }
// }