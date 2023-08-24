const mongoose=require("mongoose")


const BlogsSchema=mongoose.Schema({
    Username:String,
    Title:String,
    Content:String,
    Category:String,
    Date :String,
    Likes:Number,
    Comments:[{username:String,content:String,}],

})

const BlogsModel=mongoose.model("Bloop-app-Blogs", BlogsSchema)

module.exports=BlogsModel