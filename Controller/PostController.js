const PostModel=require('../Models/PostModel')

exports.CreatePost=async(req,res)=>{
    try {
        const {title,body}=req.body;
        const post=new PostModel({
            title,body
        })
        const savedPost=await post.save()
    } catch (error) {
        
    }
}
   
