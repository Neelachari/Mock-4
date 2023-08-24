const express=require("express")
const { connection } = require("./Config/db")
require("dotenv").config()

const cors=require("cors")

const app=express()



app.use(express.json())


app.use(cors())

app.get("/" ,(req,res)=>{
    res.send("Weclome User")
})


app.listen(process.env.PORT, async()=>{
    try {
        await connection
        console.log("running on port ", process.env.PORT)
        console.log("server is runnning")
    } catch (error) {
        console.log(error)
    }
})