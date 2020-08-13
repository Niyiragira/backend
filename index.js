/*function add(a,b){
    console.log(a+b);
}
add(23);*/

/*var express=require("express");
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

app.listen(3000,()=>{
    console.log("localhost:3000");
});