const express=require("express")
const router=express.Router();
const productModel=require("../models/product.model")

router.get("/",(req,res)=>{

    res.send("Hello from Prod")
})

module.exports=router