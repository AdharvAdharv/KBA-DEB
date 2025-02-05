import { Router } from "express";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { authenticate } from "../Middleware/auth.js";



const userauth=Router();

const user=new Map();
// const course=new Map();

userauth.get('/',(req,res)=>{
    console.log('hi');
    res.send("Hello everyone");
    
});




userauth.post('/signup',async (req,res)=>{
    
    try{

   // console.log(req.body);
    
    // const sample= req.body
    // console.log(sample.FirstName);
    
    const {Name,Email,Password,Role}=req.body;

    // const {FirstName,LastName,UserName,Password,UserRole}= req.body;
    //console.log(FirstName,LastName);

    //storing into map
    // console.log(user.get(UserName));
    
   
    
    if(user.get(Email)){
        res.status(400).send('User Name already exist');
        console.log("User Name already exist");
        
    }
    else{
        const newPassword=await bcrypt.hash(Password,10)
        user.set(Email,{Name,Password:newPassword,Role})
        res.status(201).send("sign up successfully")
        console.log('signed Up');
        
        
        
    }
    // console.log(user);
    
    
}
catch{
    res.status(500).send("Internal Server Error")
}
// finally{

// }
    

    
})


userauth.post('/login',async(req,res)=>{
    try{
        const {Email,Password}=req.body;
        const result=user.get(Email)

        if(!result){
            res.status(400).send("Enter valid Username")
        }
        else{
           console.log(result.Password);
           const valid=await bcrypt.compare(Password,result.Password)
           console.log(valid);
           
           if (valid){
            const token=jwt.sign({Email:Email,UserRole:result.UserRole},process.env.SECRET_KEY,{expiresIn:'1h'})
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

//    userauth.post('/addcourse',authenticate,(req,res)=>{
//       console.log("hi");
//     try{
//         if(req.role == "admin"){
//       const {CourseName,CourseID,CourseType,Price,Description}=req.body;
//        if(course.get(CourseName)){
//         res.status(400).json({msg:"Bad Request"});
//        }
//        else{
//         course.set(CourseName,{CourseID,CourseType,Price,Description})
//         res.status(201).send("Course Added")
//        }
//     }
//     else{
//         res.status(403).send("You are not allowed to do this ")
//     }
// }
//     catch{
//         res.status(500).send("Internal Server Error")
//     }

      
//    })

userauth.get('/logout',(req,res)=>{
    res.clearCookie('authtoken')
    res.status(200).send("Successfully logged out");
    console.log('Successfully logged out');
    
  })



export {userauth}