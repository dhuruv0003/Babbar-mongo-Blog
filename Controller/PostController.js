const PostModel=require('../Models/PostModel')

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
   
