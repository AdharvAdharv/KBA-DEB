import React,{useState} from 'react'

const CourseForm = ({heading}) => {
  const [courseName,setCourseName] = useState("");
  const [courseId , setCourseId ] = useState("");
  const [courseType , setCourseType] = useState("Self-Paced");
  const [description , setDescription] = useState("")
  const [price , setPrice] = useState("")
  

  const [courseImage , setCourseImage ] = useState(null)

  const handleSubmit = async (e) =>{
   e.preventDefault();
   try{
      const Form =new FormData();
      Form.append("CourseName",courseName)
      Form.append("CourseID",courseId)
      Form.append("CourseType",courseType)
      Form.append("Description",description)
      Form.append("Price",price)
      
      if(courseImage){
      Form.append("courseImage",courseImage)
      }
      const res = await fetch ("/api/addcourse",{
         method:"POST",
         credentials: "include",
         body: Form, 
      });
      if(!res.ok){
         throw new Error ("Error adding course")
      }
      alert ("Course Added Successfully !");
      setCourseName("");
      setCourseId("")
      setCourseType("")
      setDescription("")
      setPrice("")
      setCourseImage("")

   }catch(err){
       console.log(err); 
       alert ("something went wrong :" + err.message)

   }
  }

  return (
   <div className="flex justify-center">
         <div className="bg-gray-400 w-[600px] h-[670px] mt-12 font-sans font-semibold  pt-6 pl-12 rounded">
            <p className="text-center text-3xl text-fuchsia-900 font-bold font-serif">   
               { heading ? "Add Course": "Update Course"}
            </p>
            <form onSubmit={handleSubmit}>
            <label >Course Name</label>
            <input className="w-[500px] h-[28px] rounded mt-2 mb-5 pl-3 bg-white"
            type="text"
            placeholder="eg.Certified Blockchain Associate"
            value={courseName}
            onChange={(e) => setCourseName (e.target.value)} />
            
            <label> Course ID </label>
            <input className="w-[500px] h-[28px] rounded mt-2 mb-5 pl-3 bg-white"
             type="text"
              placeholder="eg.1"
              value={courseId} 
              onChange={(e) => setCourseId (e.target.value)}/>
            
            <label >Course Type</label>
             <select className="w-[500px] h-[28px] rounded mt-2 mb-5 pl-3 font-normal	bg-white " 
             value={courseType}
             onChange={(e) => setCourseType (e.target.value)}>
                <option value="course1">Self Placed</option>
                <option value="">course2</option>
             </select>
             
             <label >Description</label>
             <textarea 
             className="mt-2 mb-5 bg-white" 
              cols="49" rows="3"
              value={description}
              onChange={(e) =>setDescription (e.target.value)} 
              required ></textarea>
              <br></br>

             <label >Price</label> <br></br>
             <input 
             type='text'   
             className="w-[500px] h-[28px] rounded mt-2 mb-7 pl-3 font-normal	bg-white " 
             value={price}
             onChange={(e) =>setPrice (e.target.value) }/>
               
               <div>
          <label className="block text-gray-700 font-bold mb-2">
            Course Image (optional)
          </label>
          <input
            className="w-[500px] h-[28px] rounded mt-2 mb-7 pl-3 font-normal	bg-white " 
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setCourseImage(e.target.files[0]);
              }
            }}
          />
        </div>

             

             <button className="bg-fuchsia-900 w-[500px] h-[35px] text-white rounded mt-2 mb-7">Submit</button>
             </form>
        </div>
        </div>
  )
}

export default CourseForm