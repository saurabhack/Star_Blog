import Comment from "../models/comment.model.js"
async function comment(req,res){
    const comments=await Comment.create({
        content:req.body.content,
        blogId:req.params.blogId,
        createdBy:req.user._id
    })

    return res.redirect(`/blog/${req.params.blogId}`)
}
export default comment