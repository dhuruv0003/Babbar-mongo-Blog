const Comment=require('../Models/CommentModel');
const PostModel = require('../Models/PostModel');


exports.commentController=async(req,res)=>{
    try {
        // fetch comment data from request body 
        
        const {post, user,body}=req.body;
        //create new comment object

   //Method 1  
        //const comment=await CommentModel.create({
        //     post,user,body
        // })

        // another method to create object in db 
    //Method 2
        const comment=new Comment({
            post,user,body
        })
        //Save new comment into database

        const savecomment=await comment.save()

// After making comment we also want to save the comment in the comment array of post model
//  find the post by ID, and add the new comment to id in comment array of Post 


// Here Post is name of model and post represents the id of post 

// $push is used to push data into an array and $pull is used to delete data from array 
        const updatedPost=await PostModel.findByIdAndUpdate(post,{$push:{comments:savecomment._id}},{new:true})
        .populate("comments")// currently comments array consists of several _id,but we want actual comment document, so we use populate method  
        .exec()

//  new:true is used to get the updated document after updattion 

// push the id of savecomment into comments array of PostModel

        res.status(200).json({
            success:true,
            post:updatedPost,
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            post:"No Post Found",
            error:console.log(error.message)
        })
    }
}