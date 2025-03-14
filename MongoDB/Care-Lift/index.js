import express from 'express'
import dotenv from 'dotenv'
import { userauth } from './Routes/userauth.js';
import mongoose from 'mongoose';



dotenv.config()
const app=express();


app.use(express.json())

app.use('/',userauth)

// mongodb

mongoose.connect('mongodb://localhost:27017/Crowdfunding').then(()=>{
    console.log('MongoDB connected successfully to Crowdfunding');
})
    .catch((error)=>{
        console.error('MondoDB connection failed :',error);
        
    
})

app.listen(process.env.PORT, function(){
    console.log(`Server listening at ${process.env.PORT}`);
    
})   