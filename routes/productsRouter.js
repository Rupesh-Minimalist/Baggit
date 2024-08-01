const express=require("express")
const router=express.Router();
const productModel=require("../models/product.model")
const upload=require("../config/multer-config")

router.post("/createprod",upload.single("image"),async(req,res)=>{

    const {name,price,discprice,bg,pc,tc}=req.body

    let prod= await productModel.create({
        image:req.file.buffer,  // type of image = Buffer
        name,
        price,
        discount:discprice,
        bgcolor:bg,
        panelcolor:pc,
        textcolor:tc
    })
    req.flash("success","Product created Successfully !")
    res.redirect("/admin/create")
})   

module.exports=router