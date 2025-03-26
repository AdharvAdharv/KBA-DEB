import { Schema } from "mongoose";
import { model } from "mongoose";

const itemdetails = new Schema({
    itemName:{type:String,required:true,uniqure:true},
    catogory:{type:String,required:true},
    quantity:{type:String,required:true},
    price:{type:String,required:true},
})

const items = model('itemDetails',itemdetails)

export {items}