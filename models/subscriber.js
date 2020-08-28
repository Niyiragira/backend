const mongoose=require("mongoose")

const subscriberSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    publishDate:{
        type: Date,
        required:true,
        default:Date.now
    }
})

module.exports=mongoose.model("Blog",subscriberSchema)