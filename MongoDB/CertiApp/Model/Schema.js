import { model } from 'mongoose';
import { Schema } from 'mongoose';

const userDetails = new Schema ({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    userName:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    userRole:{type:String,required:true}
})
const User = model('User',userDetails)

const Certi = new Schema ({
    course:{type:String,required:true},
    certificateID:{type:String,required:true,unique:true},
    candidateName:{type:String,required:true},
    grade:{type:String,required:true},
    issueDate:{type:String,required:true}
})
const Certificate = model ('Certificate', Certi)


export {Certificate}
export { User }