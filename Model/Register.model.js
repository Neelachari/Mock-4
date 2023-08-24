const mongoose=require("mongoose")


const RegisterSchema=mongoose.Schema({
    Username:String,
    Avatar :String,
    Email:String,
    Password:String
})

const RegisterModel=mongoose.model("Bloop-app-signup", RegisterSchema)

module.exports=RegisterModel