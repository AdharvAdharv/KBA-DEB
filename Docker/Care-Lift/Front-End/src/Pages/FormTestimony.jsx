import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

import leftArrow from '../assets/Images/left arrow.svg'

const FormTestimony =  () => {

    const navigate =useNavigate();
    
    const location = useLocation();
    const {fundraisername,amount,relation,patientname,patientage,medicalcondition,
        hospitalstatus,hospitalname,city,patientimage}=location.state || {};
    
    const [medicaldocuments,setMedicalDocuments]=useState(null)
    const [isChecked,setIsChecked] =useState(false)
    
    const handleSubmit = async (e) => {
        e.preventDefault();
         try {
      const formData = new FormData();
      formData.append('FundraiserName',fundraisername)
      formData.append('Amount',amount)
      formData.append('Relation',relation)
      formData.append("PatientName", patientname);
      formData.append("PatientAge", patientage);
      formData.append("MedicalCondition", medicalcondition);
      formData.append("HospitalStatus", hospitalstatus);
      formData.append("HospitalName", hospitalname);
      formData.append("City", city);
      formData.append("patientImage", patientimage);
      formData.append("documentImage",medicaldocuments);

      const response = await fetch('/api/addfundraiser', {
        method: "POST",
        credentials: 'include',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Error in adding fundraising');
      }
      alert('Fundraising Added Successfully')
      navigate('/homepage')

    } catch (err) {
      console.log(err);
      alert('Something went wrong: ' + err.message);
    }}

  return (
    <div>
        <div  className="bg-stone-400 flex justify-center">
        
    <Link to='/formpatientdetails' className="flex place-items-center mr-[40px] " >
    <img className="w-6 mr-2" src={leftArrow} alt="Back" />
         <p className="text-xl">Back</p>
    </Link>
    

     {/* box  */}
  <div>
    
    <form onSubmit={handleSubmit} >
 
 <div className="bg-white w-[700px] mt-[70px] pt-[20px] rounded pb-8">

    <p className="text-center text-3xl text-red-900 font-serif ">Tell the story about why are you running a Fundraiser</p>
    
 <div className="px-12 pt-8">
    <p className="text-xl  font-semibold">Hi,</p>
    <p className="text-lg">My name is {fundraisername}  and iam raising funds for {relation} ,
    {patientname} who is suffering from {medicalcondition} and is {hospitalstatus} at  {hospitalname}
     ,{city} .The family has done all it can collect to the total amount required for the treatment but 
     <span className="text-red-700 font-bold"> {amount} </span>
      is required to pay for all the medical expenses
    <br></br>
    As the amount required is huge, I request  you to kindly contribute towards  the treatment and help during this time of need.Each contribution is important ! 
    </p>


    <p className="mt-[25px] font-semibold text-xl mb-4">Add Medical Documents ?</p>
</div>
    
   
     {/* Upload patient Image */}
     <div className="flex flex-col items-center space-y-3">
            
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setMedicalDocuments(e.target.files[0])}
              className="w-[220px] py-2 px-4 rounded-lg text-white bg-blue-600 cursor-pointer hover:bg-blue-700 transition"
           required/>
          </div>
  {/* Testimony */}
<div className="flex items-start mx-[30px] mt-10">
  <input id="agree" type="checkbox" className="mr-4 w-[25px] h-[25px] mt-1" 
  checked={isChecked} 
  onChange={ () =>setIsChecked(!isChecked)} />
  
  <p className="text-sm leading-relaxed">
    I agree to <span className="font-semibold text-blue-800">LifeCare's</span> Terms of Use, service agreement (
    <span className="font-semibold text-blue-800">USA</span> and 
    <span className="font-semibold text-blue-800"> India</span>), 
    <span className="font-semibold text-blue-800"> Privacy Policy, Plans & Pricing</span>, and Medibuddy benefits.
    I acknowledge and confirm that the information provided above is true and correct to the best of my knowledge 
    and belief, and I agree to be liable if any of the above information is found to be false or misleading. 
    I hereby give my consent for sharing it with regulatory authorities or disclosing it as may be required by law.
  </p>
</div>
    
</div>

 
 
 <button className="bg-red-900 w-full h-[50px] text-white mb-7  rounded-xl   font-sans font-semibold" 
 disabled={!isChecked} >Submit</button>
 </form>
</div>

</div>
    </div>
  )
}

export default FormTestimony