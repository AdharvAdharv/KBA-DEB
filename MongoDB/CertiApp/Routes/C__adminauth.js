import { Router } from "express";
import Authenticate from "../Middleware.js/auth.js";
import AdminCheck from "../Middleware.js/Admincheck.js";
import { Certificate } from "../Model/Schema.js";

const adminauth=Router();

adminauth.post('/addcertificate',Authenticate,AdminCheck,async(req,res)=>{
     try{
        const {Course,CertificateId,CandidateName,Grade,IssueDate}=req.body;
        console.log(CertificateId);
        
        console.log('-----Add Certificate page-----');
        
        const exist= await Certificate.findOne({certificateID:CertificateId})
        
        if( exist ){
         
         console.log('Certificate ID already exist');
         res.status(400).send('Certificate ID already exist')
         
        }else{
         
         const newCerti = new Certificate({
         course:Course,
         certificateID:CertificateId,
         candidateName:CandidateName,
         grade:Grade,
         issueDate: IssueDate
        
      })
      await newCerti.save()
         res.status(201).send('Certificate Added');
         console.log('Certificate Added');
        
         
        }
 
     }catch{
        res.status(500).send("Internal Server error")
     }
    
})

adminauth.get('/ShowCertificate',async (req,res)=>{
   try{
      console.log('----Show Certificate----');
      
       const CID=req.query.CertificateId 
       console.log(CID);
       const result= await Certificate.findOne({certificateID:CID})
      
       
      
       if(result){
         console.log(result);
         res.status(200).send(result)
         

       }else{
         console.log('Invalid Certificate ID');
         res.status(404).send('Invalid Certificate ID')
         
       }

   }catch{
       res.status(500).send('Internal Server error')
   }
   
})

adminauth.get('/logout',(req,res)=>{

      res.clearCookie('authtoken')
      
      res.status(200).send('Logged out Successfully')
      console.log('Logged out Successfully');
      

})

export default adminauth;