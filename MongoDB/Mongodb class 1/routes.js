import {Router}  from 'express'
import  sample from './model/sample.js'

const  router=Router()
router.post('/create',async(req,res)=>{
    try{
        
        
        
        const data=req.body;
        
        
        const result=await sample.create(data);
        res.status(201).json( result)
        console.log(result);
        
    }catch(error){

        console.log(error);
        res.status(500).send("Internal Server error")
        
    }
})

router.get('/read',async(req,res)=>{
    try{
        const result=await sample.findById("67a320eb975f011410338bc3");
        res.status(200).send(result);
        console.log(result);
        

    }catch(error){
        console.log(error);
        res.status(500).send('Internal Server Error')
        
    }
})

export {router}