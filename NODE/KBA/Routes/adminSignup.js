import { Router } from "express";
const adminSign=Router();

adminSign.post('/signup',(req,res)=>{
    console.log('Admin sign up');
    
})
export default adminSign;