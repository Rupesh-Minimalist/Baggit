const userModel=require("../models/user.model")
const jwt=require("jsonwebtoken")

module.exports=async(req,res,next)=>{

    if(!req.cookies.token){
        req.flash("error","You need to login first!")
        return res.redirect("/")
    }
    else{
        let data=jwt.verify(req.cookies.token,process.env.SECRET_KEY)
        let user=await userModel.findOne({email:data.email})

        req.user=user  // for future uses
    }
    
    next()
}