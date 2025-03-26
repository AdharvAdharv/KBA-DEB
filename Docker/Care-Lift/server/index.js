import express, { json } from 'express'
import dotenv from 'dotenv'
import { userauth } from './Routes/userauth.js';
import mongoose from 'mongoose';
import cors from 'cors'
import cookieParser from "cookie-parser"



dotenv.config()
const app=express();

app.use(cors({
    origin:'*',
    credentials:true
}))

app.use(json());
app.use(cookieParser())
  
app.use('/',userauth)
// mongodb

mongoose.connect('mongodb://mongodb:27017/Crowdfunding').then(()=>{
    console.log('MongoDB connected successfully to Crowdfunding');
})
    .catch((error)=>{
        console.error('MondoDB connection failed :',error);
        
    
})

app.listen(process.env.PORT, function(){
    console.log(`Server listening at ${process.env.PORT}`);
    
})   