import mongoose from "mongoose";
const {Schema,model}=mongoose

const commentSchema=new Schema({
    content:{
        type:String,
        required:true
    },
    blogId:{
        type:Schema.Types.ObjectId,
        ref:"blog"
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
})

const Comment=new model('comment',commentSchema)
export default Comment