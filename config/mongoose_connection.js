const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/Baggit")
.then(()=>{
    console.log("Datebase connection sucessfull")
})
.catch((err)=>{
    console.log("Datebase connection Failed",err)
})


module.exports=mongoose.connection;