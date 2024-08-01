const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
        unique:true
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
    cart:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"
    }],
    orders:{
        type:Array,
        default:[]
    },
    dp:{
        type:String,
    }
})

module.exports=mongoose.model("user",userSchema)