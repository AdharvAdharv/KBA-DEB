import dotenv from "dotenv";
import express,{json} from 'express';
import { userauth } from "./Routes/userauth.js";
import adminauth from "./Routes/adminauth.js";

import cors from "cors";
import mongoose from "mongoose";



dotenv.config();

const app=express();

 app.use(cors({
    origin:'http://127.0.0.1:5501',
    credentials:true
 }))
 app.use(json())

app.use('/',userauth)  
app.use('/',adminauth) 



// mongodb

mongoose.connect('mongodb://localhost:27017/KBACourse').then(()=>{
    console.log('MongoDB connected successfully to KBACOURSES');
})
    .catch((error)=>{
        console.error('MondoDB connection failed :',error);
        
    
})

app.listen(process.env.PORT,function(){
    console.log(`service is listening at ${process.env.PORT}`);
    });

 

app.get('/',function(req,res){
    res.send('hi ');
})