const mongoose=require('mongoose')

const LikeSchema= new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
    },
    user:{
        type:String,
        required:true
    },

})

// Here we have exported the model by the name of Like

module.exports=mongoose.model("Like",LikeSchema)