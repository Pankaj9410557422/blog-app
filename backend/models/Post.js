const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true
    },
    body:String,
    date_posted:String,
},{
    timestamps:true
})

module.exports =mongoose.model("Post",PostSchema);