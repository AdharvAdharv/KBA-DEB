import { Router } from "express";
import { authenticate } from "../Middleware/auth.js";
import admincheck from "../Middleware/admincheck.js";
import { courseSample } from "../Model/model.js";
import upload from "../Middleware/upload.js";

const adminauth= Router();
const course=new Map()


adminauth.post('/addcourse',authenticate,admincheck,upload.single('courseImage'),  async(req,res)=>{
    
  try{
      
    const {CourseName,CourseID,CourseType,Price,Description}=req.body;
    
    const existingCourse= await courseSample.findOne({courseId:CourseID})
   
   
     if(existingCourse){
      res.status(400).json({msg:"Course already exist"});
      console.log('Course already exist');
      
     }
     else{
      const imagePath=req.file ? req.file.path:""; 
      
      
      const newCourse = new courseSample({
          courseName:CourseName,
          courseId:CourseID,
          courseType:CourseType,
          price:Price,
          Description:Description,
          Image:imagePath
        });
        
        
        await newCourse.save()
        
      res.status(201).send("Course Added")
      console.log('Course Added');
       }
  }
  catch{
      res.status(500).send("Internal Server Error")
  }
})



adminauth.get('/getCourse',async (req,res)=>{
  try{
    console.log('hi');
    
  const Name =req.query.CourseName;
  console.log(Name);

  const result= await courseSample.findOne({courseName:Name});
   
  if(result){
    console.log(result);
    res.status(200).send(result)
    
  }else{
    console.log("Course not exist");
    res.status(404).send("Course not exist")
    
  }
  }catch{
    res.status(500).send('Internal server error')
  }
})

adminauth.put('/updateCourse',authenticate,admincheck,async(req,res)=>{
  try{

    const {CourseName,CourseType,CourseID,Description,Price}=req.body;
    const result = await courseSample.findOne({courseName:CourseName})
    
    if(result){
      result.courseId=CourseID;
      result.courseType=CourseType;
      result.Description=Description;
      result.price=Price;

      console.log(result);
      await result.save();
      
      console.log("Course Updated");
      res.status(400).send('Course Updated')
      
      
      
    }else{
      console.log('Course not found');
      res.status(400).send('Course not found')
      
    }
 

  }catch{
    res.status(500).send('Internal server error')
  }

})

adminauth.patch('/editCourse',authenticate,admincheck, async(req,res)=>{

  const {CourseName,CourseType,Price}=req.body;
  console.log(CourseName,CourseType,Price);
  
  const result1=await courseSample.findOne({courseName:CourseName})
  console.log(result1);
  

  if(result1){
    result1.courseType=CourseType;
    result1.price=Price

      await result1.save()
     console.log('Course Updated');
     res.status(200).send(result1)
    
  }else{
    console.log('Course not found');
    res.status(400).send('Course not found')
    
  }
})

adminauth.delete('/deleteCourse',authenticate,admincheck,async(req,res)=>{
      const Name=req.body.CourseName
      console.log( Name);
      const delete1 = await courseSample.findOne({courseName:Name})
     
     
      try{

        if(delete1){
         await courseSample.findOneAndDelete({courseName:Name})

          console.log('deleted');
          
          res.status(201).send('Course Deleted');
          

        }else{
          console.log('Course not found');
          res.status(400).send('Course not found')
          
        }

      }catch{
        res.status(500).send('Internal server error')
      }
      
})



 export default adminauth;
