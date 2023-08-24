const express=require("express")

require("dotenv").config()

const BlogsModel=require("../Model/Blogs.model")

const BlogsRouter=express.Router()

BlogsRouter.post("/blogs", async(req,res)=>{
    try {
            const PostBlogs=new BlogsModel({...req.body})
            await PostBlogs.save()
             res.status(200).send("Post Added Successfully...")  
    } catch (error) {
        res.status(400).send({error:error.message})
    }
})

module.exports=BlogsRouter