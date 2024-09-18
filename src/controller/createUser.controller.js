import User from "../models/user.model.js"
async function createUser(req,res){
    const {first_name,last_name,email,password,password2}=req.body
    await User.create({
        firstName:first_name,
        lastName:last_name,
        email:email,
        password:password
    })
    return res.redirect('/')
}
export default createUser