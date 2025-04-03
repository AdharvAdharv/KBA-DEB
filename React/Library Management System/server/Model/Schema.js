import { model } from "mongoose";
import { Schema } from "mongoose";

const userdetails = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{type:String,required:true}, 
})
const User = model ('UserDetails',userdetails)

const Bookdetails= new Schema({
    bookName:{type:String,required:true,unique:true},
    authorName:{type:String,required:true},
    genre:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:String,required:true}
})
const Books = model ('Books',Bookdetails)

export {Books}
export {User}