import {  Schema } from "mongoose";
import { model } from "mongoose";

const data = new Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    userName:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})

const sample =model('user',data)

const PDetails= new Schema({
    user: { type: Schema.Types.ObjectId, ref: "sample", required: true, index: true },
    fundraisername:{type:String,required:true},
    amount:{type:Number,required:true},
    remainingAmount:{type:Number,required:true},
    relation:{type:String,required:true},
    patientName:{type:String,required:true},
    patientId:{type:Number,required:true,unique:true},
    patientAge:{type:String,required:true},
    medicalCondition:{type:String,required:true},
    hospitalStatus:{type:String,required:true},
    hospitalName:{type:String,required:true},
    city:{type:String,required:true},
    image1:String,
    image2:String

})
const Details =model ('Patient Details',PDetails)

const amount =new Schema({
    id:{type:Number,reqired:true,unique:true},
    pname:{type:String,reqired:true},
    ContribitorName:String,
    amount:{type:Number,reqired:true}
})
const Contributions = model ('Contributions',amount)

export {Contributions}
export {Details}
export {sample}