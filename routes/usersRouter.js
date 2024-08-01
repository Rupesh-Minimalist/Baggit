const express=require("express")
const router=express.Router();
const {registeruser,loginuser}=require("../controllers/userAuthController")

router.post("/register",registeruser)   // Added Controller

router.post("/login",loginuser)

module.exports=router