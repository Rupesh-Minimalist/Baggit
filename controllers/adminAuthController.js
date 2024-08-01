const adminModel=require("../models/admin.model")

module.exports.adminAuth=async(req,res)=>{

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
    
    res.redirect("/shop")  
}