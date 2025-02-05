import { Router } from "express";
import { authenticate } from "../Middleware/auth.js";
import admincheck from "../Middleware/admincheck.js";

const adminauth= Router();
const course=new Map()


adminauth.post('/addcourse',authenticate,(req,res)=>{
    console.log("hi");
  try{
      if(req.role == "admin"){
    const {CourseName,CourseID,CourseType,Price,Description}=req.body;
     if(course.get(CourseName)){
      res.status(400).json({msg:"Bad Request"});
     }
     else{
      course.set(CourseName,{CourseID,CourseType,Price,Description})
      res.status(201).send("Course Added")
     }
  }
  else{
      res.status(403).send("You are not allowed to do this ")
  }
}
  catch{
      res.status(500).send("Internal Server Error")
  }

    
 })

//------------This is the First method-------(params method)

//  adminauth.get('/getCourse/:CourseName',(req,res)=>{
//   const Name =req.params.CourseName;
//   console.log(Name);
  
// })

//==============This is the second method=============(query method)

adminauth.get('/getCourse',(req,res)=>{
  try{
  const Name =req.query.CourseName;
  console.log(Name);

  const result=course.get(Name);
 
  

    
  if(result){
    console.log(course.get(Name));
    res.status(200).send(result)
    
  }else{
    console.log("Course not exist");
    res.status(404).send("Course not exist")
    
  }
  }catch{
    res.status(500).send('Internal server error')
  }
})

adminauth.put('/updateCourse',authenticate,(req,res)=>{
  try{

    const {CourseName,CourseType,CourseID,Description,Price}=req.body;
    
    if(req.role=='admin'){

    

    if(course.get(CourseName)){
      course.set(CourseName,{CourseID,CourseType,Description,Price})
      console.log("Course Updated");
      res.status(400).send('Course Updated')
      
      
      
    }else{
      console.log('Course not found');
      res.status(400).send('Course not found')
      
    }
  }else{
    console.log('You are not allowed to do this');
    res.status(400).send('You are not allowed to do this')
    
  }

  }catch{
    res.status(500).send('Internal server error')
  }

})

adminauth.patch('/editCourse',authenticate,admincheck,(req,res)=>{

  const {CourseName,CourseType,Price}=req.body;
  const result=course.get(CourseName);
  console.log(result);
  

  if(result){
    course.set(CourseName,{CourseType,Price,CourseID:result.CourseID,Description:result.Description})

    
    console.log('Course Updated');
    
  }else{
    console.log('Course not found');
    res.status(400).send('Course not found')
    
  }
})

adminauth.delete('/deleteCourse',authenticate,admincheck,(req,res)=>{
      const Name=req.body.CourseName
      console.log( Name);
      try{

        if(course.get(Name)){
          course.delete(Name)

          console.log('deleted');
          console.log(course);
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
