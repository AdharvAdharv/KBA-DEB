import {Schema}  from "mongoose";
import {model} from "mongoose";

const demo=new Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    userName:{type:String,reqiured:true,unique:true},
    password:{type:String,required:true},
    userRole:{type:String,reqiured:true}
});

const sample=model ('sample1', demo)

export default sample;