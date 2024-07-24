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
    cart:{
        type:Array,
        default:[]
    },
    isadmin:{
        type:Boolean,
        required:true,
    },
    orders:{
        type:Array,
        default:[]
    },
    dp:{
        type:String,
        required:true,
    }
})

module.exports=mongoose.model("user",userSchema)