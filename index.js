/*function add(a,b){
    console.log(a+b);
}
add(23);

var express=require("express");
var app= express();

app.get('/',function(req,res){
    res.send("Hello world")
});

app.listen(7070,function(){
    console.log("localhost:7070")
});*/

const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("Hello Mr Niyiragira")
})

app.listen(4000,()=>{
    console.log("localhost:4000");
});

/*const mongoose =require("mongoose");

mongoose.connect("mongodb://localhost/mongotask",{useUnifiedTopology:true});


const Schema=mongoose.Schema;

const StudentSchema= new Schema({
    name:String
});

const Student=mongoose.model("student",StudentSchema);

module.exports=Student;*/

