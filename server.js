require("dotenv").config()

const express=require("express");
const app=express();
const mongoose=require("mongoose")
const cors=require("cors")
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true,useUnifiedTopology: true})
const db=mongoose.connection
db.on("error",(error)=>console.error(error))
db.once("open",()=>console.log("Connected to database"))

app.use(express.json())

const subscribersRouter = require("./routes/blogs")
const userRoutes=require("./routes/users")


var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

    app.use(allowCrossDomain);
    app.use("/blogs",subscribersRouter)
    app.use("/users",userRoutes)
app.listen(3000,()=>console.log("Server Started"))