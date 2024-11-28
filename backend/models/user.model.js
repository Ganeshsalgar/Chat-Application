import mongoose from "mongoose";


const userModel = new mongoose.Schema({
    fullName:{
        type:String,
        reqiured:true
    },
    username:{
        type:String,
        reqiured:true,
        unique:true
    },
    password:{
        type:String,
        reqiured:true
    },
    profilePhoto:{
        type:String,
        default:""
    },
    gender:{
        type:String,
        enum:["male", "female"],
        reqiured:true
    }
}, {timestamps:true})


export const User = mongoose.model("User",userModel)