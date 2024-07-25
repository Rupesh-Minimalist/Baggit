const express=require("express")
const router=express.Router();
const adminModel=require("../models/admin.model")

router.get("/",(req,res)=>{
    res.send("Hello from admin")
})

router.post("/create",async(req,res)=>{

    const {name,email,password}=req.body

    let owners= await adminModel.find();  
    if(owners.length>0){                            // because only one Admin
        return res.send("You are not authorised")
    }

    let createdOwner= await adminModel.create({
            name,
            email,
            password,
        })
    
    res.send(createdOwner)
    
})

module.exports=router