import mongoose from "mongoose";
const Post = mongoose.model("post",{title:String, desc:String})
//API thêm sản phẩm

export const create = async (req, res) => {
    try {
        const post = await new Post(req.body).save();
        res.json(post)    
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được bài viết anh ei"
        })
    }
}
// API list sản phẩm
export const list = async (req, res) => { 
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được bài viết"
        })
    }
}
//API tìm sp
export const read = async (req, res) => {
    const fillter = {_id : +req.params.id} 
    try {
        const posts = await posts.findOne(fillter)
        res.json(posts);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được bài viết"
        })
    }
}
export const remove = async (req, res) => { 
    const conditional = {_id: +req.params.id };

    try {
        const posts = await posts.findOneAndDelete(conditional);
        res.json(posts);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không xóa được bài viết"
        })
    }
}
export const update = async (req, res) => { 
    try {
        const conditional = {_id : +req.params.id};
        const doc  = req.body;
        const option = {new : true};
        // const posts = await posts.map(item => item.id === +req.params.id ?req.body : item )
        const post = await Post.findByIdAndUpdate(conditional,doc,option);
        res.json(post);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không cập nhật được bài viết"
        })
    }
}