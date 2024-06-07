const express=require('express');


const router=express.Router();

 //Import Controller

 const { PostController } = require('../Controller/PostController');



 //Mapping of controllerto the route

router.get("/dummy",PostController)

 // Export the router
 module.exports=router;