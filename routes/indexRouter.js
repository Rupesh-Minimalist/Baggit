const express=require("express")
const isLoggedin=require("../middlewares/isLoggedin")
const router=express.Router()
const prodModel=require("../models/product.model")
const userModel = require("../models/user.model")

router.get("/",(req,res)=>{
    let error=req.flash("error") // extracting flash message
    res.render("index",{error})
})

router.get("/shop",isLoggedin,async(req,res)=>{
    let success=req.flash("success")
    let product=await prodModel.find();
    let cart=req.user.cart
    res.render("shop",{product,success,cart})
})

router.get("/addtocart/:id",isLoggedin,async(req,res)=>{

    let user= await userModel.findOne({email:req.user.email})
    user.cart.push(req.params.id)
    await user.save();

    req.flash("success","Added to Cart ")
    res.redirect("/shop")
})

router.get("/cart",isLoggedin,async(req,res)=>{
    let success=req.flash("success")

    let user=await userModel.findOne({email:req.user.email})
    let prod=await prodModel.find({_id:user.cart})  // Populate
    res.render("cart",{prod,success})
})

router.get("/remove/:id",isLoggedin,async(req,res)=>{  // Complex Update
    let {email}=req.user

    const filter = { email:email };
    const update = { $pull: { cart: req.params.id }};

    let user=await userModel.updateOne(filter,update)

    req.flash("success","Product Removed")
    res.redirect("/cart")
})


router.get("/logout",isLoggedin,(req,res)=>{
    res.cookie("token","")
    res.redirect("/")
})

module.exports=router