const express=require("express")
const router=express.Router();
const {adminAuth}=require("../controllers/adminAuthController")

router.post("/createadmin",adminAuth)

router.get("/create",(req,res)=>{

    let success=req.flash("success")
    res.render("createproducts",{success})
})



module.exports=router