const mongoose=require("mongoose")


const adminSchema=mongoose.Schema({
    
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    products:{
        type:Array,
        default:[]
    },
    dp:{
        type:String,
        required:true,
    },
    gstin:String
})

module.exports=mongoose.model("admin",adminSchema)