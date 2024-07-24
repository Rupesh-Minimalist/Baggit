const express=require("express")
const cookieParser=require("cookie-parser")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const dotenv=require("dotenv")
const path=require("path")

const db=require("./config/mongoose_connection")
const userModel=require("./models/user.model")
const productModel=require("./models/product.model")
const adminModel=require("./models/admin.model")

const usersRouter=require("./routes/usersRouter")
const productsRouter=require("./routes/productsRouter")
const adminRouter=require("./routes/adminRouter")

const app=express()
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))
app.use(cookieParser());

app.use("/admin",adminRouter)
app.use("/users",usersRouter)
app.use("/products",productsRouter)

app.listen(4001)