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
        const {FirstName,LastName,UserName,Password}=req.body;
        const existingUser= await sample.findOne({userName:UserName});

        if(existingUser){
            res.status(401).send(' already Signed up Please Login')
            console.log('exist Signed up Please Login');
            
        }else{
        const NewPassword= await bcrypt.hash(Password,10);
        
        const newUser= new sample({
                firstName:FirstName,
                lastName:LastName,
                userName:UserName,
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
        
        const {UserName,Password}=req.body;
         const result = await sample.findOne({userName:UserName})
         
         console.log(result);
         
        if(result){
            const valid= await bcrypt.compare(Password,result.password);
            console.log(valid);
            
            if(valid){
                const token=jwt.sign({userName:UserName},process.env.SECRET_KEY,{expiresIn:'24h'})
                console.log(token);
                res.cookie('authToken',token,
                    {
                        httpOnly:true,
                        path:'/',
                    });

                    res.status(201).send('Logged in Successfully')
                    console.log('Logged in Successfully');
                    
            }else{
                console.log("Unauthorised Access");
                res.status(401).send('Unauthorised Access')    
            }
        
        }else{
            res.status(400).send('Enter valid UserName');
            console.log('Enter valid UserName');
            
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
        const {FundraiserName,Amount,Relation,
            PatientName,PatientAge,MedicalCondition,HospitalStatus,HospitalName,City,
            }=req.body;
      
            console.log('Authenticated User:',req.UserName);
            
            let User= await sample.findOne({userName:req.UserName})
            if(!User){
                console.log('User not found');                   
                return res.status(404).json({ error: "User not found" });
            }
            console.log("User:" ,User);
            
            // find user's fundraising
            let existFundraiser= await Details.findOne({user:User._id})

            
            if(existFundraiser){
                console.log(" You can't add more than one fundraiser.");                
                return res.status(400).json({ error:"You can't add more than one fundraiser."})
            }
           
            
            const lastPatient = await Details.findOne().sort({patientId:-1 })     

           let PatientID = lastPatient ? Number( lastPatient.patientId )+1 :1; 

            
          
                let imageBase64_1=null;
                let imageBase64_2=null;

                if(req.files && req.files['patientImage']){
                    imageBase64_1= ConvertToBase64(req.files['patientImage'][0].buffer);
                }
                if(req.files && req.files['documentImage']){
                    imageBase64_2=ConvertToBase64(req.files ['documentImage'][0].buffer)
                }
             
            //   adding new fundraising to 
            const newFundraiser=new Details({
             user:User._id,
                fundraisername:FundraiserName,
                amount:Amount,
                remainingAmount:Amount,
                relation:Relation,
                patientName:PatientName,
                patientId:PatientID,
                patientAge:PatientAge,
                medicalCondition:MedicalCondition,
                hospitalStatus:HospitalStatus,
                hospitalName:HospitalName,
                city:City,
                image1:imageBase64_1,
                image2:imageBase64_2
           
            }); 
console.log(newFundraiser);

           await newFundraiser.save();           
            res.status(201).send('Campaign started')
            console.log('Campaign started');

    }catch(error){
        console.error('Error adding fundraiser',error)
        res.status(500).send('Internal Server Error');
    }

})

userauth.get('/myfundraiser', authenticate,async (req,res) =>{
    try{
        console.log('Authenticated User:',req.UserName);

        let User= await sample.findOne({userName:req.UserName})
            if(!User){
                console.log('User not found');                   
                return res.status(404).json({ error: "User not found" });
            }
            console.log("User:" ,User._id);
            
             // Find user's fundraising campaign
            let existFundraiser= await Details.findOne({user:User._id})

            
            if(!existFundraiser){
                console.log("Fundraiser not found for user ID:", User._id);                
                return res.status(400).json({ error: "No fundraiser found with the given ID" });
            }
            res.json(existFundraiser)
        

    }catch(err){
        console.log(err);
        res.status(500).json({msg:"Internal Server Error"})
        
    }
})


userauth.get("/getAllFundraising",async (req,res) =>{
    try{
        const Campaign= await Details.find({});
        res.json(Campaign)

    }catch(err){
        console(err);
        res.status(500).json({msg:"Internal Server Error"})
    }
})



userauth.get('/getfundraising/:id',async(req,res)=>{
  
    try {
        const fundraiser = await Details.findOne({ patientId:req.params.id });
        console.log(fundraiser);
        
        if (!fundraiser) {
            return res.status(404).json({ msg: "Fundraiser not found" });
        }
        res.json(fundraiser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Internal Server Error" });
    }
});


userauth.delete('/stopfundraising',authenticate,async(req,res)=>{
   
    try{
       console.log('Authenticated User:',req.UserName);
       const { password } = req.body
       let User= await sample.findOne({userName:req.UserName})
       
            if(!User){
                console.log('User not found');                   
                return res.status(404).json({ error: "User not found" });
            }  
            

        // Verify password using bcrypt
        const isPasswordValid = await bcrypt.compare(password,User.password);
        if (!isPasswordValid) {
            console.log("Invalid password");
            return res.status(401).json({ error: "Invalid password" });
        }
        
        let deleteFundraiser = await Details.findOneAndDelete({user:User._id});        
         
        if(deleteFundraiser){
            console.log('Fundraising Stopped');
            return res.status(200).json({ message: "Fundraising Stopped Successfully" });
            
            
        }else{
            console.log("Fundraiser not found");
            return res.status(400).json({ error: "No fundraiser found for this user" });
            
        }

    }catch (error){
        console.error('Error in stop fundraising',error);
        
        res.status(500).send('Internal server Error')
    }
})

userauth.post('/contribute', authenticate, async (req,res) => {
    const { PatientID, PNAME, Name, Amount } = req.body;
    try {
      const patient = await Details.findOne({ patientId:PatientID });
      
      if (!patient) {
        return res.status(404).send('Patient not found');
      }
      
      
      if (PNAME !== patient.patientName) {
        console.log('Patient name mismatch');
        return res.status(404).send('Patient not found');
      }
      // Validate contribution amount is positive
    if (Amount <= 0) {
        return res.status(400).json({ error: 'Contribution amount must be greater than zero' });
      }
      
      if (patient.remainingAmount < Amount) {
        console.log("The contribution amount is more than the remaining amount needed for the patient.");
        return res.status(400).send({ error: "The contribution amount is more than the remaining amount needed for the patient." });
      }

      patient.withdrawnAmount +=Amount;
      await patient.save();
      
      // Deduct contribution from remaining amount
      patient.remainingAmount -= Amount;
      await patient.save();
      
      // Create a new contribution record
      const amountDetails = new Contributions({
        id: Number(PatientID), 
        pname: PNAME,
        ContribitorName: Name,
        amount: Amount
      });
      await amountDetails.save();
      
      console.log("Transaction Completed");
      res.status(200).send('Transaction Completed');
    } catch (error) {
      console.error('Error in Contribution', error);
      res.status(500).send('Internal server error');
    }
  });
  
  userauth.get('/contributions/:patientId', authenticate, async (req, res) => {
    const { patientId } = req.params;
    try {
     
        console.log("Received patientId:", patientId);
      const contributions = await Contributions.find({ id:Number(patientId) });
      
      res.status(200).json({ contributions });
    } catch (error) {
      console.error("Error fetching contributions:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });




userauth.get('/logout',(req,res)=>{
    res.clearCookie('authToken',{
        httpOnly:true,
        path:'/',
        secure: true,  
        sameSite: 'None', 
    });
    res.status(200).send('Successfully logged out');
    console.log('Successfully logged out');
 

})


export {userauth}