const express=require("express")
const app=express()
const path=require("path")
const cookieParser = require("cookie-parser")
const expressSession=require("express-session")
const flash=require("connect-flash")
const db=require("./config/mongoose_connection")
require("dotenv").config({path:"./.env"})


const indexRouter=require("./routes/indexRouter")
const usersRouter=require("./routes/usersRouter")
const productsRouter=require("./routes/productsRouter")
const adminRouter=require("./routes/adminRouter")


app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))
app.use(cookieParser())
app.use(expressSession({
    resave:false,
    saveUninitialized:false,
    secret:process.env.SECRET_KEY
}))
app.use(flash());

app.use("/",indexRouter)
app.use("/admin",adminRouter)
app.use("/users",usersRouter)
app.use("/products",productsRouter)

app.listen(4001)