import {Schema}  from "mongoose";
import {model} from "mongoose";

const demo = new Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    userName:{type:String,reqiured:true,unique:true},
    password:{type:String,required:true},
    userRole:{type:String,reqiured:true}
});
const sample=model ('sample1', demo)

const courseDemo=new Schema({
    courseName:{type:String,required:true},
    courseId:{type:String,required:true,unique:true},
    courseType:{type:String,required:true},
    price:{type:Number,required:true},
    Description:{type:String,required:true},
    Image:String

})


const courseSample=model ('Courses',courseDemo)

export {courseSample ,sample}
