import { Router } from "express";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import authenticate from "../Middleware/auth.js";
import { sample } from "../Model/Model.js";
import { Details } from "../Model/Model.js";
import { upload } from "../Middleware/upload.js";
import { Contributions } from "../Model/Model.js";

const userauth=Router();
const ConvertToBase64=(buffer)=>{
    return buffer.toString("base64");
}
       
userauth.post('/signup',async(req,res)=>{
    try{
        const {Name,Phone,Email,Password}=req.body;

        const existingUser= await sample.findOne({email:Email});

        if(existingUser){
            res.status(401).send('Email id already Signed up Please Login')
            console.log('Email id already Signed up Please Login');
            
        }else{
        const NewPassword= await bcrypt.hash(Password,10);
        
        const newUser= new sample({
                name:Name,
                phone:Phone,
                email:Email,
                password:NewPassword
        })
        await newUser.save();

        res.status(201).send('Signed up')
        console.log('-----Signed UP -----' );
        }

    }catch{
        res.status(500).send('Internal server Error')
    }
    
})

userauth.post('/login',async(req,res)=>{

    try{
        console.log('---- Login Page ----');
        
        const {Email,Password}=req.body;
         const result = await sample.findOne({email:Email})
         
         console.log(result);
         
        if(result){
            const valid= await bcrypt.compare(Password,result.password);
            console.log(valid);
            
            if(valid){
                const token=jwt.sign({Email:Email},process.env.SECRET_KEY,{expiresIn:'1h'})
                console.log(token);
                res.cookie('authToken',token,
                    {
                        httpOnly:true
                    });

                    res.status(201).send('Logged in Successfully')
                    console.log('Logged in Successfully');
                    
            }else{
                console.log("Unauthorised Access");
                res.status(401).send('Unauthorised Access')    
            }
        
        }else{
            res.status(400).send('Enter valid Email');
            console.log('Enter valid Email');
            
        }

    }catch{
        res.status(500).send('Internal Server Error')
    }
})




userauth.post('/addFundraiser',authenticate,upload.fields(
    [{name:'patientImage',maxCount:1},
        {name:'documentImage',maxCount:1}
    ]), async (req,res)=>{
    try{
        console.log('----- Add Fundraiser -----');
        const {FundraiserName,Amount,Relation,PatientName,
            PatientAge,HospitalStatus,HospitalName,City}=req.body;

            const existPatient= await Details.findOne({patientName:PatientName})
            
            if(existPatient){
                res.status(400).send('Fundraising  Already added')
                console.log('Fundraising Already added');    
            }else{
                let imageBase64_1=null;
                let imageBase64_2=null;
                if(req.files && req.files['patientImage']){
                    imageBase64_1= ConvertToBase64(req.files['patientImage'][0].buffer);
                }if(req.files && req.files['documentImage']){
                    imageBase64_2=ConvertToBase64(req.files ['documentImage'][0].buffer)
                }

            const PatientDetails = new Details({
                fundraisername:FundraiserName,
                amount:Amount,
                relation:Relation,
                patientName:PatientName,
                patientAge:PatientAge,
                hospitalStatus:HospitalStatus,
                hospitalName:HospitalName,
                city:City,
                image1:imageBase64_1,
                image2:imageBase64_2
            }); 
console.log(PatientDetails);

            await PatientDetails.save();

            res.status(201).send('Campaign started')
            console.log('Campaign started');


        }

    }catch{
        res.status(500).send('Internal Server Error');
    }

})




userauth.get('/getfundraising',async(req,res)=>{
    const {patientname}=req.query;
    console.log(patientname);

    const pdetails= await Details.findOne({patientName:patientname})
    console.log(pdetails);
    try{
        if(pdetails){
            console.log(pdetails);
            res.status(200).send(pdetails)
            

        }else{
            res.status(404).send('There is no Crowdfunding added')
            console.log('There is no Crowdfunding added');
            
        }

    }catch{
        res.status(500).send('Internal server error')
    }
    
    
})


userauth.delete('/stopfundraising',async(req,res)=>{
   
    try{
        const{Name}=req.body;
        console.log(Name);

       const deletePatient = await Details.findOne({patientName:Name})
       
        
        
        if(deletePatient){
            await Details.findOneAndDelete({patientName:Name})
            res.status(200).send('Fundraising Stopped')
            console.log('Fundraising Stopped');
            
            
        }else{
            res.status(400).send("Patient not found")
            console.log("Patient not found");
            
        }

    }catch{
        res.status(500).send('Internal server Error')
    }
})

userauth.post('/contribute',authenticate,async(req,res)=>{
    const {Name,Amount}=req.body;

    const amountDetails = new Contributions({
        name:Name,
        amount:Amount
    })
    await amountDetails.save()
    res.status(200).send('Transaction Completed')
    console.log("Transaction Completed");
    
})

userauth.get('/showContributions',authenticate,async(req,res)=>{
    
     const Contribution = await Contributions.find()

    if(Contribution){
        res.status(200).send(Contribution)
        console.log(Contribution);
    }else{
          console.log('There is no Contribution');
          res.status(404).send('There is no Contributions')
          
        }
})


userauth.get('/logout',(req,res)=>{
    res.clearCookie('authtoken')
    res.status(200).send('Successfully logged out');
    console.log('Successfully logged out');
    
})


export {userauth}