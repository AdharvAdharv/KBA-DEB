import { model } from "mongoose";
import { Schema } from "mongoose";

const userdetails = new Schema({
    fname:{type:String,required:true},
    lname:{type:String,required:true},
    userName:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    Role:{type:String,required:true}
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