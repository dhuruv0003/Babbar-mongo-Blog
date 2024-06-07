const LikeModel=require('../Models/LikeModel')
const PostModel=require('../Models/PostModel')

exports.likeController=async (req,res)=>{
    try {
        const {post,user}=req.body;

        const likedPost=await LikeModel.create({
            post,user
        })
//post represents the id of post made
        const updatedPost=await PostModel.findByIdAndUpdate(post,{$push:{likes:likedPost._id}},{new:true})
        .populate("likes")
        .exec();

        res.status(200).json({
            success:true,
            liked:updatedPost
        })


    } catch (error) {
        res.status(500).json({
            success:false,
            liked:"Post Cannot be liked as id not found"
        })
    }
}

exports.UnlikeController=async(req,res)=>{
    try {
        // post represesnts the id of post and like represents the id of person who liked 

        const {post,like}=req.body;

        //   find and delete the like from likes  collection 

        const deletedLike=await LikeModel.findOneAndDelete({_id:like,post:post})

        // Now update the post model and remove like from like array

        const updatedPost=await PostModel.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id}},{new:true})

        res.status(200).json({
            success:true,
            deletedPost:updatedPost
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            deletdPost:"Post Cannot be deleted"
        })

    }
}