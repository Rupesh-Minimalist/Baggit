const express=require("express")
const router=express.Router();

router.get("/",(req,res)=>{

    res.send("Hello from Prod")
})

module.exports=router