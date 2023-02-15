const router = require("express").Router();
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

//Create new post
router.post("/:id",async (req,res)=>{
    console.log("I am getting hitted")
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }catch(err){
        console.log(err)
        res.status(500).json(err);
    }
})

//Update Post
router.put("/:id",async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username){
            try{
                const updatedPost = await Post.findByIdAndUpdate(
                    req.params.id,{
                        $set:req.body,
                    },
                    {new:true}
                );
                res.status(200).json(updatedPost)
            }catch(err){
                res.status(500).json(err)
            }
        }else{
            res.send(401).json("You can updated only your post!")
        }
    }catch(err){
        res.status(500).json(err);
    }
})

//Delete Post
router.delete("/:id",async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username){
            try{
                await post.delete();
                res.status(200).json("Your post has been deleted...")
            }catch(err){
                res.status(500).json(err)
            }
        }else{
            res.send(401).json("You can updated only your post!")
        }
    }catch(err){
        res.status(500).json(err);
    }
})

//get Post
router.get("/:id",async (req,res)=>{
    try{
        const post= await Post.findById(req.params.id);
        res.status(200).json(post);
    }catch(err){
        res.status(500).json(err)
    }
})

//get All Posts
router.get("/",async (req,res)=>{
    const username = req.query.user
    try{
        let posts;
        if(username){
            posts=await Post.find({username})
        }else{
            posts = await Post.find();
        }
        res.status(200).json(posts)
    }catch(err){
        res.status(500).json(err)
    }
})
module.exports = router