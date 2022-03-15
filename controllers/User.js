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