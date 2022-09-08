const express=require('express')

const router=express.Router()

const postController=require('../controllers/post_contoller')

router.get("/posts",postController.posts)



module.exports=router;