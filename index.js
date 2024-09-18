import express from "express";
import mongoose from "mongoose";
import path from 'path'

import handleUserRouter from './src/routes/userRouter/user.router.js'
import cookieParser from "cookie-parser";
import checkForAuthenticationCookies from "./src/middleware/authentication.middleware.js";
import handleBlogsRouter from "./src/routes/blogRouters/blogRouter.router.js"
import Blogs from "./src/models/blog.models.js";
const app=express()

app.set('view engine','ejs')
app.set('views',path.resolve('./src/views'))
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use(checkForAuthenticationCookies('token'))
app.use(express.static(path.resolve("./public")));


app.get('/',async (req,res)=>{
    const user=req.user
    const allBlogs=await Blogs.find({})
    return res.render('home',
        {
            user:req.user,
            blogs:allBlogs
        }
    )

})
app.use('/user',handleUserRouter)
app.use('/blog',handleBlogsRouter)
const port=8000

mongoose.connect('mongodb://127.0.0.1:27017/myblogs').then(()=>{
    console.log("mongodb is connected")
}).catch((err)=>{
    console.log(err)
})

app.listen(port,()=>{
    console.log(`app is listening on the portal : http://localhost:${port}` )
})

