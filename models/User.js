import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema=new Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String
    }
})

const UserModel= mongoose.model("User",userSchema)

export default UserModel;