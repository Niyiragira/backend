const express=require("express")
const router=express.Router();
const Subscriber =require("../models/subscriber");
const subscriber = require("../models/subscriber");

//Gett all users
router.get("/", async(req,res)=>{
    try{
        const subscribers=await Subscriber.find()
        res.json(subscribers)
    } catch (err){
        res.status(500).json({message:err.message})
    }
})
//Get one subscriber
router.get("/:id",getSubscriber,(req,res)=>{
    res.send(res.subscriber.title)
})

//Create one
router.post("/",async (req,res)=>{

    try{
    const data = Subscriber({
        title:req.body.title,
        content:req.body.content
    })
    
        const newSubscriber= await data.save()
        res.status(201).json(newSubscriber)
    }catch (err){
        res.status(400).json({message:err.message})
    }
})
//Update one
router.patch("/:id",getSubscriber, async (req,res)=>{
    if (req.body.title != null){
        res.subscriber.title=req.body.title
    }
    if(req.body.content !=null){
       res.subscriber.content=req.body.content
        }
        try{
            const updatedSubscriber= await res.subscriber.save()
            res.json(updatedSubscriber)
        }
        catch(err){
            res.status(400).json({message:err.message})
        }
    
})

//Delete one
router.delete("/:id",getSubscriber,async (req,res)=>{
    try{
        await res.subscriber.remove()
        res.json({message:"Deleted article"})
    }catch(err){
        res.status(500).json({message:err.message})
    }
})
async function getSubscriber(req,res,next){
    let subscriber;
    try{
        subscriber=await Subscriber.findById(req.params.id)
        if(subscriber==null){
            return res.status(404).json({message:"Cannot find subscriber"})
        }
    }catch(err){
        return res.status(500).json({message:err.message})
    }

    res.subscriber=subscriber
    next()
}

module.exports = router