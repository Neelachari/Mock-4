const express=require("express")
const { connection } = require("./Config/db")
require("dotenv").config()
const signupRouter=require("./Routes/Signup.route")
const LoginModel=require("./Routes/Login.route")
const BlogsRouter=require("./Routes/Blogs.route")

const cors=require("cors")

const app=express()

app.use(express.json())

app.use(cors())

app.use("/api",signupRouter)

app.use("/api",LoginModel)

app.use("/api",BlogsRouter)

app.get("/",(req,res)=>{
    res.send("Welocme Users")
})


app.listen(process.env.PORT, async()=>{
    try {
        await connection
        console.log("running on port ", process.env.PORT)
        console.log("Server is Runnning")
    } catch (error) {
        console.log(error)
    }
})