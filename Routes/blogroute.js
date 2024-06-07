const express=require('express');


const router=express.Router();

 //Import Controller

const { commentController } = require('../Controller/CommentController');

const { CreatePost, fetchPost } = require('../Controller/PostController');
const { likeController, UnlikeController } = require('../Controller/LikeController');



 //Mapping of controller to the route

router.post("/comment/create",commentController)

router.post('/posts/create',CreatePost)

router.get("/posts",fetchPost)

router.post('/likes/like',likeController)

router.post('/likes/unlike',UnlikeController)

 // Export the router
 module.exports=router;