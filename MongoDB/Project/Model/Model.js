import {  Schema } from "mongoose";
import { model } from "mongoose";

const data = new Schema({
    name:{type:String,required:true},
    phone:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})

const sample =model('user',data)

const PDetails= new Schema({
    fundraisername:{type:String,required:true},
    amount:{type:String,required:true},
    relation:{type:String,required:true},
    patientName:{type:String,required:true},
    patientId:{type:Number,unique:true},
    patientAge:{type:String,required:true},
    hospitalStatus:{type:String,required:true},
    hospitalName:{type:String,required:true},
    city:{type:String,required:true},
    image1:String,
    image2:String
})
const Details =model ('Patient Details',PDetails)

const amount =new Schema({
    id:{type:String,reqired:true},
    pname:{type:String,reqired:true},
    ContribitorName:String,
    amount:{type:String,reqired:true}
})
const Contributions = model ('Contributions',amount)

export {Contributions}
export {Details}
export {sample}