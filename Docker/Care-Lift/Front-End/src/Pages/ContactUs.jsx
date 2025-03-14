import React from 'react'
import Navbar from '../components/Navbar'

const ContactUs = () => {
  return (
    <div>
        <Navbar />

<div className=" bg-gradient-to-t from-blue-600 to-white h-[640px] w-full flex justify-center ">
   
   {/* box  */}
   <div className="bg-white sm:w-[470px] md:w-[590px] h-[530px] mt-[60px] font-sans font-semibold  pt-6 pl-12 rounded">
      <p className="text-center text-3xl text-red-900 font-serif">Talk to Us</p>
     <form action="">
      <label > Name :</label>
      <input className="w-[500px]  h-[28px] rounded mt-2 mb-5 pl-3 ring ring-black" type="text" />
     
      <label > Phone Number : </label>
      <input className="w-[500px] h-[28px] rounded mt-2 mb-5 pl-3 ring ring-black" type="text" />
      
      <label > Email :</label>
      <input className="w-[500px] h-[28px] rounded mt-2 mb-5 pl-3 ring ring-black" type="text" />

       <label >Message :</label>
       <textarea className="mt-2 mb-5 ring ring-black rounded"  cols="49" rows="3"
        placeholder="Describe your message here" ></textarea>
        <br></br>
      
      

       <button className="bg-red-900 w-[500px] h-[35px] text-white rounded-3xl mt-2 mb-7">Submit</button>
       </form>
</div>
  





</div>
    </div>
  )
}

export default ContactUs