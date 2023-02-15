const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/post")
const cors = require("cors")
dotenv.config();

app.use(cors());
app.use(express.json())

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true
}).then(console.log("Connected to database"))
.catch((err)=>{
    console.log(err)
})

app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/posts",postRoute)
app.listen("5000",()=>{
    console.log("I am running")
})