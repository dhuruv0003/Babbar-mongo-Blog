const PostModel=require('../Models/PostModel')
const LikeModel=require('../Models/LikeModel')
const CommentModel=require('../Models/CommentModel')

exports.CreatePost=async(req,res)=>{
    try {
        const {title,body}=req.body;

        const post=new PostModel({
            title,body
        })

        const savedPost=await post.save()

        res.status(200).json({
            success:true,
            post:savedPost
        })

    } 
    catch (error) {
        res.status(500).json({
            success:false,
            post:"No Post created"
        })        
    }
}
   
exports.fetchPost=async(req,res)=>{
    try {
        const findpost = await PostModel.find({}).populate("comments").populate("likes").exec()
        res.status(200).json({
            success:true,
            post:findpost
        }) 
    } catch (error) {
        res.status(200).json({
            success:false,
            post:"No post Found ",
            message:console.log(error.message)
        }) 
    }
}