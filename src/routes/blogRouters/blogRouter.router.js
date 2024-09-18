import express from "express";
import addBlog from "../../controller/addBlog.js";
import Blogs from "../../models/blog.models.js";
import comment from "../../controller/comment.controller.js";
import Comment from "../../models/comment.model.js";
const {addBlogs,uploadImage}=addBlog
const router=express.Router()


router.get('/addBlogs',(req,res)=>{
    return res.render('addBlog',{
        user:req.user
    })    
})

router.get('/:id',async (req,res)=>{
    const blog=await Blogs.findById(req.params.id).populate('createdBy')
    const allComments=await Comment.find({blogId:req.params.id}).populate('createdBy')
    console.log(allComments)
    return res.render('blog',{
        user:req.user,
        blog,
        allComments
    })
})
router.post('/',uploadImage,addBlogs)

router.post('/comment/:blogId',comment)
export default router
