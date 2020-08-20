/*const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost/mongotube",{useNewUrlParser:true})

const db=mongoose.connection
    db.once('open',()=>console.log("Connected",{
        "names":"Abraham Lincoln",
        "age":"56",
        "occupation":"president"
    }))
    db.on('error',()=>{
        console.log("Your error")
    });
*/
const express=require("express");
const router=express.Router();

router.get("/ninjas",function(req,res){
    res.send({type:"GET"})
});

router.post("/ninjas",function(req,res){
    res.send({type:"PUT"})
})