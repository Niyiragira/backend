import express from "express"

const app=express();

app.get("/",(req,res)=>{
    res.send("Hello Mr Niyiragira")
})

app.listen(3030,()=>{
    console.log("Hello port 3000");
});