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

// exports.UnlikeController=async(req,res)=>{
//     try {
//         const 
//     } catch (error) {
        
//     }
// }