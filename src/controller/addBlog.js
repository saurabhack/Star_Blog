import multer from "multer"
import path from "path"
import Blogs from "../models/blog.models.js"

const storage=multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, path.resolve(`./public/upload/`))
    },
    filename: function (req, file, cb) {
        const fileName = `${Date.now()}-${file.originalname}`;
        cb(null, fileName);
    },
})

const upload=multer({storage:storage})
const uploadImage=upload.single('coverImageURL')
async function  addBlogs(req,res){
    const {title,body}= req.body
    const blog= await Blogs.create({
        body,
        title,
        createdBy:req.user._id,
        coverImageURL:`/upload/${req.file.filename}`
    })
    return res.redirect(`/`)
}

export default {addBlogs,uploadImage}