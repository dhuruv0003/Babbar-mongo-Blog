const express=require('express');


const router=express.Router();

 //Import Controller

 const { PostController } = require('../Controller/PostController');
const { commentController } = require('../Controller/CommentController');



 //Mapping of controllerto the route

router.post("/comment/create",commentController)

 // Export the router
 module.exports=router;