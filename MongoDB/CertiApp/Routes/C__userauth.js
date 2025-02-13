import { Router } from "express";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User } from "../Model/Schema.js";


const userauth=Router()

userauth.post('/signup',async (req,res)=>{
   

try{
    
    const {Fname,Lname,UserName,Role,Password}= req.body
   
    const existUser = await User.findOne({userName:UserName})

    if( existUser ){
        console.log("User Name Already exist");
        res.status(401).json({message:'User Name already exist'})
        
    }else{
        const NewPassword= await bcrypt.hash(Password,10)
       
        const NewUser = new User({
            firstName: Fname,
            lastName: Lname,
            userName: UserName,
            password: NewPassword,
            userRole: Role
        })
        await NewUser.save()
       
        console.log('----Sign up page----');
        res.status(201).send('Sign Up')
        console.log(NewUser);
        

    }
    
    }
    catch{
        res.status(500).send('Internal server error');
    }
});

userauth.post('/login',async(req,res)=>{
    try{
        console.log('====== Login Page ======');
        const {UserName,Password}=req.body;
        const result = await User.findOne({userName:UserName});

        if(!result){
            res.status(400).send('Enter valid Username');
            console.log('Enter valid Username');
            
        }else{
            const valid = await bcrypt.compare(Password,result.password)
            console.log(` Password is ${valid}`);
        
         if(valid){
            
            
            const token=jwt.sign({UserName:UserName,Role:result.userRole},process.env.SECRET_KEY,{expiresIn:'1h'});
            console.log(token);
            res.cookie('authtoken',token,
                {
                    httpOnly:true
                });

                res.status(200).send('Logged in successfully');
                console.log('Logged in successfully');
                
            

         }  else{
            res.status(401).send('Unauthorised Access');
            console.log('Unauthorised Access');
            
         } 
            
        }   
        

    }catch{
        res.status(500).send('Internal Server Error')
    }
    
})



export default userauth
