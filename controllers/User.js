import User from "../Models/User";

export const SignUp = async (req, res) => {
    try {
        const user = await new User(req.body).save();
        res.json(user)    
    } catch (error) {
        res.status(400).json({
            message: "Không đăng kí được"
        })
    }
}
export const signIn = async (req, res) => {
    const filter =  {email:  req.body.email,
        password: req.body.password }
    try {
        const user = await user.findOne(filter);
        res.json(user)    
    } catch (error) {
        res.status(400).json({
            message: "Không đăng nhập được"
        })
    }
}
export const list = async (req, res) => { 
    try {
        const user = await User.find();
        res.json(user);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được người dùng"
        })
    }
}