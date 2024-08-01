const express=require("express")
const router=express.Router();
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const cookieParser=require("cookie-parser")
const userModel=require("../models/user.model.js")

router.use(cookieParser());

module.exports.registeruser=async(req,res)=>{       // NAMED EXPORT

    try{
        const {name,phone,email,password}=req.body

        let is_user=await userModel.findOne({email})
        if(is_user) return res.send(`${name} your account already exist, Please Login`)

        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(password,salt,async(err,hash)=>{
               let user=await userModel.create({
                name,
                email,
                phone,
                password:hash
               })

               let token=jwt.sign({email:email,id:user._id},process.env.SECRET_KEY);
               res.cookie("token",token)
               res.redirect("/shop") 
        })
    })
    }
    catch(err){
        res.send(err.message)
    }
     
}

module.exports.loginuser=async(req,res)=>{
    const {email,password}=req.body

    let user= await userModel.findOne({email:email})
    if(!user){
         req.flash("error","Email or Password is Wrong")
         return res.redirect("/")
    }
    
    bcrypt.compare(password,user.password,(err,result)=>{

        if(!result){
            req.flash("error","Email or Password is Wrong")
            return res.redirect("/")
        } 
        
        let token=jwt.sign({email:user.email,userid:user._id},process.env.SECRET_KEY)
        res.cookie("token",token);
        res.redirect("/shop")  
    })    
}