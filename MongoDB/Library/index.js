import express from 'express';
import dotenv from 'dotenv';
import { userauth } from './Routes/userauth.js';
import adminauth from './Routes/adminauth.js';

import cors from 'cors'
import mongoose from 'mongoose';

const app=express();
dotenv.config();

app.use(cors({
    origin:'http://127.0.0.1:5501',
    credentials:true
 }))

app.use(express.json()) 

app.use('/',userauth)
app.use('/',adminauth)

app.listen(process.env.PORT,function(){
    console.log(`Server is listening at ${process.env.PORT}`);
})
 
mongoose.connect('mongodb://localhost:27017/Library').then(() =>{
    console.log('MongoDB connected successfully to Library');
    
})

.catch((error)=>{
    console.error('MondoDB connection failed :',error);
    

})
    

