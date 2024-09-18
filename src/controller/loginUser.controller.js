import User from "../models/user.model.js";


async function loginUser(req,res){
    const {email,password}=req.body;
    try {
    const token= await User.matchPasswordAndGenerateToken(email,password)
    return res.cookie('token',token).redirect('/')
    } catch (error) {
        return res.render('signIn',{
            err:'wrong email id or password'
        })    
    }
}

export default loginUser