import { Router } from "express";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { authenticate } from "../Middleware/auth.js";
import sample from "../Model/model.js";



const userauth=Router();

userauth.post('/signup',async (req,res)=>{
    
    try{
    
    const {FirstName,LastName,UserName,Password,UserRole}=req.body;
    
    
    
    const existingUser=await sample.findOne({userName:UserName})
    
    

    if(existingUser){
        console.log('User already exist ');
        res.status(400).send('User already exist')
        
    }else{
        const newPassword=await bcrypt.hash(Password,10)
        
        
        const newUser = new sample({
            firstName:FirstName,
            lastName:LastName,
            userName:UserName,
            password:newPassword,
            userRole:UserRole
        });
        //save user to mongoDB
        await newUser.save();
        res.status(201).send('Singed up successfully');
        console.log('Singed up successfully');
    }
        
    }
catch{
    res.status(500).send("Internal Server Error")
}
// finally{

// }
    

    
})


userauth.post('/login',async(req,res)=>{
    try{
        const {UserName,Password}=req.body;
        const result=await sample.findOne({userName:UserName})

        if(!result){
            res.status(400).send("Enter valid Username")
        }
        else{
           console.log(result.password);
           const valid=await bcrypt.compare(Password,result.password)
           console.log(valid);
           
           if (valid){
            const token=jwt.sign({UserRole:result.userRole},process.env.SECRET_KEY,{expiresIn:'1h'})
            console.log(token);
            res.cookie('authtoken',token,
                {
                    httpOnly:true
                });
            
            res.status(200).json({message:"Logged in successfully"});
           }
           else{
            res.status(401).send("Unauthorized access")
           }
           
        }

    }
    catch{
        res.status(500).send("Internal server error")
    }
})



userauth.get('/logout',(req,res)=>{
    res.clearCookie('authtoken')
    res.status(200).send("Successfully logged out");
    console.log('Successfully logged out');
    
  })



export {userauth}