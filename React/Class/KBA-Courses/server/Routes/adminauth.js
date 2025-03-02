import { Router } from "express";
import { authenticate } from "../Middleware/auth.js";
import admincheck from "../Middleware/admincheck.js";
import { courseSample } from "../Model/model.js";
import upload from "../Middleware/upload.js";
import sharp from 'sharp';

const adminauth= Router();  

const convertToBase64 = (buffer) => {
  return buffer.toString("base64");
};

adminauth.post('/addcourse',authenticate,admincheck,upload.single('courseImage'),  async(req,res)=>{
    
  try{
      
    const {CourseName,CourseID,CourseType,Price,Description}=req.body;
    
    const existingCourse= await courseSample.findOne({courseId:CourseID})
     
   
     if(existingCourse){
      res.status(400).json({msg:"Course already exist"});
      console.log('Course already exist');
      
     }
     else{
       let imageBase64 = null;
       if(req.file){
         //converting image buffer to base64 string
         console.log("File received:", req.file);        
        
         imageBase64 = convertToBase64(req.file.buffer)
        console.log("Base64 Image:");
       }
     
      const newCourse = new courseSample({
          courseName:CourseName,
          courseId:CourseID,
          courseType:CourseType,
          price: Number(Price),
          Description:Description,
          Image:imageBase64
        });
        console.log("Saving Course....");
        console.log("new course data" ,newCourse);
        
        
        await newCourse.save()               
       
        
        res.status(201).json({msg:`${CourseName} stored successfully`, data: newCourse})
      console.log('Course Added');
       }
  }
  catch{
      res.status(500).send("Internal Server Error")
  }
})


adminauth.get('/getAllCourses',async (req,res) =>{
  try{
      const courses = await courseSample.find({});
      res.json(courses)
  }catch (err){
    console.log(err);
    res.status(500).json({
      msg:"Internal Server Error"
    });
    
  }
})


// adminauth.get('/getCourse',async (req,res)=>{
//   try{
//     console.log('hi');
    
//   const Name =req.query.CourseName;
//   console.log(Name);

//   const result= await courseSample.findOne({courseName:Name});
   
//   if(result){
//     console.log(result);
//     res.status(200).send(result)
    
//   }else{
//     console.log("Course not exist");
//     res.status(404).send("Course not exist")
    
//   }
//   }catch{
//     res.status(500).send('Internal server error')
//   }
// })


adminauth.get('/getCourse', async (req,res) =>{
  try{
    const Name =req.query.CourseName;
 
    const result = await courseSample.findOne({courseName:Name});

    if( !result ){
      res.status(404).json({msg:"No such course "})
    }else{
      res.status(200).json({
        coursename:result.courseName,
        courseid:result.courseId,
        coursetype:result.courseType,
        description:result.Description,
        price:result.price,
        imageUrl:`/api/getCourseImage?courseName =${encodeURIComponent(name)}`        

      })
    }
  }catch (err){
    console.log(err);
    res.status(500).json({
      msg:"Internal Server Error"
    });
    
  }
})




adminauth.get('/getCourseImage',async (req,res) =>{

  try{
        const name = req.query.courseName;
        const result = await courseSample.findOne({courseName:name})

            if(!result || !result.Image) {
              return res.status(404).json({msg:"Image not Found"});
            }

            //decode the base64 Image
              const imageBuffer = Buffer.from(result.image,"base64");
              const compressdImage = await sharp(imageBuffer)
              .resize({width:300})
              .jpeg({quality:70})
              .toBuffer();

              res.set("Content-Type","image/jpeg");
              res.send(compressdImage)

  }catch(error){
        console.log("Error Fetching Image",error)
        res.status(500).json({msg:"Internal Server Error"})
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
