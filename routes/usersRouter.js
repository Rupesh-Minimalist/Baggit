const express=require("express")
const router=express.Router();
const {registeruser,loginuser}=require("../controllers/userAuthController")

router.get("/",(req,res)=>{
    res.send("Hello from users")
})

router.post("/register",registeruser)   // Added Controller

router.post("/login",loginuser)

module.exports=router