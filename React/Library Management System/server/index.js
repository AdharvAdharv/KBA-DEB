import express from 'express';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt'
import { userauth } from './Routes/userauth.js';
import adminauth from './Routes/adminauth.js';
import cartRouter from './Routes/addtocart.js';
import orderRouter from './Routes/orderRoute.js';

import cors from 'cors'
import mongoose from 'mongoose';
import { User } from './Model/Schema.js';

const app=express();
dotenv.config();

app.use(cors({
    origin:'http://localhost:3030',
    credentials:true
 }))

app.use(express.json()) 

app.use('/',userauth)
app.use('/',adminauth)
app.use('/',cartRouter)
app.use('/',orderRouter)

app.listen(process.env.PORT,function(){
    console.log(`Server is listening at ${process.env.PORT}`);
})
 
mongoose.connect('mongodb://localhost:27017/Library').then(() =>{
    console.log('MongoDB connected successfully to Library');
    
})

.catch((error)=>{
    console.error('MondoDB connection failed :',error);
    

})
const createAdminUser = async () => {
    try {
      
      const existingAdmin = await User.findOne({ role: "admin" });
      if (!existingAdmin) {
        
        const hashedPassword = await bcrypt.hash("admin123", 10);
  
       
        const newAdmin = new User({
          name: "Admin",
          email: "admin@system.com",
          password: hashedPassword,
          role: "admin",
        });
  
        await newAdmin.save();
        console.log("Admin user created: admin@system.com / admin123");
      } else {
        console.log("Admin already exists");
      }
    } catch (error) {
      console.error("Error creating admin user:", error);
    }
  };
  
  
  createAdminUser();
  
    

