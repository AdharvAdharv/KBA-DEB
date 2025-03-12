import express from 'express'
import dotenv from 'dotenv'
import { adminauth } from './adminauth.js';
import cors from 'cors'

import mongoose from 'mongoose';

dotenv.config()
const app= express();

app.use(cors({
    origin:'*',
    credentials:true
}))


app.use(express.json()) 
app.use('/',adminauth)




app.listen(process.env.PORT, function(){
    console.log(`Server listening at  ${process.env.PORT}`);
    
})

mongoose.connect('mongodb://localhost:27017/Inventory').then(() =>{
    console.log('Mongodb connected Successfully');
    
})