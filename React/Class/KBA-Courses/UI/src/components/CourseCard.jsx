import React,{useState} from 'react';
import courseImage from '../assets/images/courseImage.jpeg'

 
const CourseCard = ({course}) => {  
  
  const [showFullDescription,setFullDescription] =useState(false)

  const description = showFullDescription ? course.description : course.description
  return (
    <div className="w-[400px] h- bg-stone-400 pt-6 rounded ml-12 place-items-center ">
    <div className="place-items-center ">
        <p className="font-bold text-2xl mb-6"> {course.title} </p>
        <img className="rounded" src= {courseImage} alt="img" />
    </div>
    <div className="p-9  place-items-center">
    <p className="font-serif"> {description} </p>
       
       <button className='flex flex-col w-full px-5 text-blue-800 hover:text-white
       py-2' onClick={() =>setFullDescription(!showFullDescription)}>
        {showFullDescription ? 'Less' : 'More' } 
       </button>

        <button className="bg-blue-900 text-white rounded w-[110px] h-[40px] mt-3" >Learn More</button>
        
    </div>
</div>
  )
}

export default CourseCard