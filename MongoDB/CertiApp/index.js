import express, { json } from 'express';
import dotenv from 'dotenv';
import userauth from './Routes/C__userauth.js';
import adminauth from './Routes/C__adminauth.js';

import cors from 'cors';
import mongoose from 'mongoose'

dotenv.config();

const library =express();

library.use(cors({
    origin:'http://127.0.0.1:5501',
    credentials:true
 }))
library.use(json())

library.use('/',userauth);
library.use('/',adminauth);

mongoose.connect('mongodb://localhost:27017/CertiApp').then(() => {
    console.log("MongoDB connected successfully to CertiApp");
    
})

  .catch((error) => {
    console.error('MongoDB connection failed :',error);
    
  })


library.listen(process.env.PORT,function(){
    console.log(`Service is listening at  ${process.env.PORT}`);
});
       
