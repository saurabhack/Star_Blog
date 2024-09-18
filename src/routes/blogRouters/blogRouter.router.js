import express from "express";
import addBlog from "../../controller/addBlog.js";
import Blogs from "../../models/blog.models.js";
const {addBlogs,uploadImage}=addBlog
const router=express.Router()


router.get('/addBlogs',(req,res)=>{
    return res.render('addBlog',{
        user:req.user
    })    
})

router.get('/:id',async (req,res)=>{
    const blog=await Blogs.findById(req.params.id).populate('createdBy')
    return res.render('blog',{
        user:req.user,
        blog,
    })
})
router.post('/',uploadImage,addBlogs)
export default router
