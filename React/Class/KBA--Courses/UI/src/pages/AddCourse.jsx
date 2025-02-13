import React from 'react'
import Navbar from '../components/Navbar'

const AddCourse = () => {
  return (
    <>
   <Navbar />
        <div class="flex justify-center">
        
         <div class="bg-gray-300 w-[600px] h-[570px] mt-12 font-sans font-semibold  pt-6 pl-12 rounded">
            <p class="text-center text-3xl text-fuchsia-900 font-bold font-serif">Add Course</p>
            <label for="Course Name">Course Name</label>
            <input class="w-[500px] h-[28px] rounded mt-2 mb-5 pl-3 bg-white" type="text" placeholder="eg.Certified Blockchain Associate" />
            <label for="course id"> Course ID </label>
            <input class="w-[500px] h-[28px] rounded mt-2 mb-5 pl-3 bg-white" type="text" placeholder="eg.1" />
            
            <label for="coursetype">Course Type</label>
             <select class="w-[500px] h-[28px] rounded mt-2 mb-5 pl-3 font-normal bg-white " name="" id="" >
                <option value="course1">Self Placed</option>
                <option value="">course2</option>
             </select>
             <label for="">Description</label>
             <textarea class="mt-2 mb-5 bg-white" name="" id="" cols="49" rows="3"  ></textarea>
             <br></br>
             <label for="price">Price</label><br></br>
             <select class="w-[500px] h-[28px] rounded mt-2 mb-7 pl-3 font-normal	bg-white " name="" id="">
                <option value="">Rs.150000</option>
                <option value="">Rs.500000</option>
             </select>

             <button class="bg-fuchsia-900 w-[500px] h-[35px] text-white rounded mt-2 mb-7">Add Course</button>
          </div>
        </div>

   </>
  )
}

export default AddCourse