import { Router } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { User } from "../Model/Schema.js";
const userauth=Router();


userauth.post('/signup',async(req,res)=>{
    try{
        
        const {FirstName,LastName,UserName,Password,UserRole}=req.body;
        console.log('hi');
        
        const existingUser= await User.findOne({userName:UserName})
        console.log(existingUser);
         if(existingUser){
            res.status(401).send('User Name already exist');
            console.log('User Name already exist');
            
         }else{
            const NewPassword= await bcrypt.hash(Password,10);  //encrypting password
             
            const NewUser = new User({
            fname:FirstName,
            lname:LastName,
            userName:UserName,
            password:NewPassword,
            Role:UserRole
        })
        await NewUser.save()
             console.log('---------sign up----------');
             res.status(201).send('signed up')
            }
        
        
    }
    catch{
        res.status(500).send('Internal Server Error')
    }
})

// login page

userauth.post('/login',async(req,res)=>{
    try{
        console.log('------LogIn Page ------');
        const {UserName,Password}=req.body;
        const result= await User.findOne({userName:UserName});

         if(!result){
            res.status(400).send('Enter valid Username')
         }else{
            console.log(result.password);
            const valid= await bcrypt.compare(Password,result.password);    //comparing login password and sign up password
            console.log(valid);
            

             if(valid){
                const token=jwt.sign({UserName:UserName,UserRole:result.Role},process.env.SECRET_KEY,{expiresIn:'1h'})
                console.log(token);
                res.cookie('authToken',token,
                    {
                        httpOnly:true
                    });

                    res.status(200).send('Logged in Successfully')
                    console.log('Logged in Successfully');
                    
                   
                    
                
             }else{
                res.status(401).send('Unauthorised Access')
             }
            
         }          
        }

    catch{
        res.status(500).send('Internal Server Error')
    }
    
})




export { userauth};
