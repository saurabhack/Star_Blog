import express from 'express'
import createUser from "../../controller/createUser.controller.js"
import loginUser from '../../controller/loginUser.controller.js'
const router=express.Router()

router.get('/signIn',(req,res)=>{
    return res.render('signIn')
})

router.get('/signUp',(req,res)=>{
    return res.render('signUp')
})
router.post('/register',createUser)

router.get('/login',(req,res)=>{
    return res.render('signIn')
})
router.get('/logout',(req,res)=>{
    res.clearCookie('token').redirect('/')
})

router.post('/logged',loginUser)
export default router

