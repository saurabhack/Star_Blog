import mongoose from "mongoose";
const {Schema}=mongoose
const {model}=mongoose
const blogSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    coverImageURL:{
        type:String,
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})

const Blogs = model("blog",blogSchema)
export default Blogs