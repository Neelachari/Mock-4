const express=require("express")

const bcrypt=require("bcrypt")

const JWT=require("jsonwebtoken")

require("dotenv").config()


const RegisterModel=require("../Model/Register.model")

const LoginRouter=express.Router()

LoginRouter.post("/login", async(req,res)=>{
    const {Email, Password}=req.body
   try {
    const User=await RegisterModel.findOne({Email})
    let verify=await bcrypt.compare(Password,User.Password)
    if(verify){
        const token= await JWT.sign({userId:User._id},process.env.key)
        res.status(200).send({message:"Login Successful...",username:User.username,token})
    }
   } catch (error) {
       res.status(400).send({message:"Email not Found please SignUp to continue"})
   }
})

module.exports=LoginRouter