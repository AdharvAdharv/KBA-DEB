import React, { useState } from 'react'

import leftArrow from '../assets/Images/left arrow.svg'
import { Link, useNavigate } from 'react-router-dom'

const FormFundraiser = () => {

  const [fundraisername,setFundraiserName]=useState("");
  const [amount,setAmount]=useState("");
  const [relation,setRelation]=useState("");

  const navigate=useNavigate()


  const handleSubmit= (e)=>{
    e.preventDefault();

    navigate(
      '/formpatientdetails',{
        state:{fundraisername,amount,relation}
      });

  }

  return (
    <>
      <div  className="bg-stone-300 min-h-screen flex justify-center items-center p-6"  >
    
    {/* left arrow */}
  <Link to='/homepage' className="  flex place-items-center  mr-[40px]" >
        
  <img className="w-6 mr-2" src={leftArrow} alt="Back" />

         <p className="text-xl">Back</p>
      
    </Link>

 {/* box  */}
  <div>
    <form onSubmit={handleSubmit}>
 <div className="bg-white shadow-lg rounded-lg p-8 w-[600px]">
    
    <p className="text-center text-3xl text-red-900 font-serif mb-[20px] ">
      Tell us more about Your Fundraiser</p>
     
    <label className=" font-semibold" > Your Name </label>
   
    <input className="w-full p-2 rounded border border-gray-400 mb-8"   type="text" 
    value={fundraisername}
    onChange={(e) => setFundraiserName (e.target.value)}
    placeholder="Enter your Name"  required/><br></br>

    <label className=" font-sans font-semibold" > How much you want to raise ?</label>
    
    <input className="w-full p-2 rounded border border-gray-400 mb-8"  type="number" 
    value={amount}
    onChange={(e) => setAmount(e.target.value)}
    placeholder="Should be minimum rs.10000"
    min='10000' required />
   
    <label className="mt-[60px] font-sans font-semibold"> Relation with Patient</label>
   
    <select className="w-full p-2 rounded border border-gray-400 mb-8 " 
    value={relation}
    onChange={(e) => setRelation(e.target.value)} required>
      <option value="" disabled  >Select Relation</option>
        <option value="Friend">Friend</option>
        <option value="Father">Father</option>
        <option value="Mother">Mother</option>
        <option value="Son">Son</option>
        <option value="Daughter">Daughter</option>
        <option value="Brother">Brother</option>
        <option value="Sister">Sister</option>
        <option value="Husbund">Husbund</option>
        <option value="Wife">Wife</option>
        
    </select>
    <br></br>
    <label className="mt-[60px] font-sans font-semibold"> Your Employement status </label>
    <select className="w-full p-2 rounded border border-gray-400 mb-8"  name="" id="">
        <option value="">Salaried</option>
        <option value="">Self-Employed</option>
        <option value="">Student</option>
        <option value="">Homemaker</option>
        <option value="">Unemployed</option>
    </select>

 <br></br>
    <label className=" font-sans font-semibold "> How did you firsr heard about CareLift ? </label>
    <select className="w-full p-2 rounded border border-gray-400 "  name="" id="">
        <option value="">Instagram</option>
        <option value="">Facebook</option>
        <option value="">Whatsapp</option>
        <option value="">Search Engine</option>
        <option value="">Twitter</option>
        <option value="">Recommended by Doctor</option>
        <option value="">Recommended by Hospital</option>
        <option value="">Newspaper/Tv/Brochure</option>
        <option value="">Friend / Family</option>
        <option value="">Other</option>
    </select>
    
  
    <br></br>
</div>
 
 <button className="bg-red-900 w-full h-[50px] text-white mb-7 font-sans font-semibold">
  Save and Continue</button>
  
 </form>
</div>


</div>

    </>
  )
}

export default FormFundraiser