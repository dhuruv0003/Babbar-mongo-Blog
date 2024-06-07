const express=require('express');


const router=express.Router();

 //Import Controller

const { commentController } = require('../Controller/CommentController');

const { CreatePost } = require('../Controller/PostController');



 //Mapping of controllerto the route

router.post("/comment/create",commentController)

router.post('/posts/create',CreatePost)

 // Export the router
 module.exports=router;