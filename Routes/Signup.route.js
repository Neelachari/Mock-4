const express=require("express")

const bcrypt=require("bcrypt")

require("dotenv").config()

const RegisterModel=require("../Model/Register.model")

const signupRouter=express.Router()

signupRouter.post("/register", async(req,res)=>{
    try {
        const Email=req.body.Email
        const User=await RegisterModel.findOne({Email})
        if(User){
            res.status(400).send("User Already Registered")
        }
        else{
            bcrypt.hash(req.body.Password, 6, async(error,hash)=>{
                if(hash){
                    const PostUser=new RegisterModel({...req.body, Password:hash})
                    await PostUser.save()
                    res.status(200).send("User Rigistred Successfully...")
                }
            })
        }
    } catch (error) {
        res.status(400).send({error:error.message})
    }
})

module.exports=signupRouter