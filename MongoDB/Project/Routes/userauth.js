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
            res.status(401).send(' already Signed up Please Login')
            console.log('exist Signed up Please Login');
            
        }else{
        const NewPassword= await bcrypt.hash(Password,10);
        
        const newUser= new sample({
                name:Name,
                phone:Phone,
                email:Email.toLowerCase(),
                password:NewPassword
        })
        await newUser.save();

        res.status(201).send('Signed up')
        console.log('-----Signed UP -----' );
        }

    }catch (error){
        console.error('Error in Signing Up ' ,error);
        
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

    }catch (error){
        console.error('Error in Loggin in ' ,error);
        
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

            const lastPatient = await Details.findOne().sort({patientId:-1})
            let PatientID = lastPatient ? lastPatient.patientId +1 :1; 
            
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
                patientId:PatientID,
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

    }catch(error){
        console.error('Error adding fundraiser',error)
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

    }catch (error){
        console.error('Error in get fundrainsing' ,error);
        
        res.status(500).send('Internal server error')
    }
    
    
})


userauth.delete('/stopfundraising',async(req,res)=>{
   
    try{
        const Name=req.query.Name;
        console.log(Name);

       const deletePatient = await Details.findOneAndDelete({patientName:Name})
       
        
        
        if(deletePatient){
            res.status(200).send('Fundraising Stopped')
            console.log('Fundraising Stopped');
            
            
        }else{
            res.status(400).send("Patient not found")
            console.log("Patient not found");
            
        }

    }catch (error){
        console.error('Error in stop fundraising',error);
        
        res.status(500).send('Internal server Error')
    }
})

userauth.post('/contribute',authenticate,async(req,res)=>{
    const {PatientID,PNAME,Name,Amount}=req.body;
    try{
        const patient = await Details.findOne({patientId:PatientID})
     if(!patient){
        res.status(404).send('Patient not found')
     }
     if(PNAME ==! patient.patientName){
        res.status(404).send('Patient not found')
     }
     if(patient.amount<Amount){
        res.status(400).send("The contribution amount is more than the remaining amount needed for the patient.")
     }

        patient.amount -= Amount
        await patient.save()


    const amountDetails = new Contributions({
        id:PatientID, 
        pname:PNAME,
        ContribitorName:Name,
        amount:Amount
    })
    await amountDetails.save()
    res.status(200).send('Transaction Completed')
    console.log("Transaction Completed");
    

}catch(error){
    res.status(500).send('Internal server error')
    console.error('Error in Contribution', error);
    
}
})
userauth.get('/showContributions',authenticate,async(req,res)=>{
    
     const Contribution = await Contributions.find()
     try{

    if(Contribution){
        res.status(200).send(Contribution)
        console.log(Contribution);
    }else{
          console.log('There is no Contribution');
          res.status(404).send('There is no Contributions')
          
        }
    }catch(error){
        console.error('Error in Show contribution' ,error);
        res.status(500).send('Internal server error')
        
    }
})


userauth.get('/logout',(req,res)=>{
    res.clearCookie('authToken')
    res.status(200).send('Successfully logged out');
    console.log('Successfully logged out');
 

})


export {userauth}