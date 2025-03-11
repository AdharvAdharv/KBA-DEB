import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import facebookLogo from '../assets/Images/facebook.png'
import whatsappLogo from '../assets/Images/WhatsApp logo.png'
import Footer from '../components/Footer'

const MyFundraiser = () => {

  const [patient,setPatient] = useState(null)
  const navigate =useNavigate();

   useEffect(()=>{
    const fetchPatient= async () =>{
       try{
        const response = await fetch('/api/myfundraiser');
        const data =  await response.json()
        if (!data || !data.fundraisername) {
          navigate('/notfoundData')
          return;   
        }
        setPatient(data)

       }catch(error){
        console.log('Error in fetching patient details :',error);
        
       }
    }
    fetchPatient();
   },[navigate])
   
   if(!patient){
    return(<p>Not found</p>)
   }

   const patientIMAGE = patient?.image1? patient.image1.startsWith("data:image")
   ? patient.image1: `data:image/jpeg;base64,${patient.image1}`
 : "/placeholder-image.jpg"; // Default image to prevent errors


 const medicalDocuments = patient?.image2? patient.image2.startsWith("data:image")
   ? patient.image2: `data:image/jpeg;base64,${patient.image2}`: "/placeholder-image.jpg";
    
  

   const handleEndFundraising = async ()=>{
     if (!window.confirm
      ("Are you sure you want to stop the fundraiser? This action cannot be undone.")) {
       return;
      }
      navigate('/Withdraw')
   
   }

   const handleContributions = () => {
    // Navigate to the contributions route with the patientId as a parameter
    if (patient.patientId) {
          
      navigate(`/contributions/${patient.patientId}`);
    } else {
      alert("Patient ID not found");
    }
  }
  return (
    <>
         
    <div>
       
         {/* image and button */}
         <div className="bg-slate-300 mt-[100px] mx-[100px] flex rounded-xl ">
            {/* div for image  */}
             <div>
            <img className='w-[500px] h-[500px]' src={patientIMAGE} alt="image" />
             </div>
            {/* right side of the image  */}
            <div className="w-[700px]  place-items-center  ">
                
            <button  
  onClick={handleContributions}
  className="bg-gradient-to-r from-yellow-500 to-yellow-300 h-[70px] w-[400px] mt-[50px] flex justify-center items-center rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl active:scale-95">
  <span className="text-2xl font-bold text-white tracking-wide">💰 View Contributions</span>
</button>
               
                
                 <button onClick={handleEndFundraising} 
                 className="bg-red-800 h-[70px]  w-[400px] mt-[50px] flex justify-center place-items-center rounded-xl" > 
                <span className="text-2xl font-bold text-white ml-5 " >END FUNDRAISING </span></button>  
                
                <p className="font-medium text-xl mt-[50px] ">Goal rs. <span className="text-2xl"> 
                  {patient.amount} </span></p>
                <p className="text-red-700 text-xl font-medium">Amount Needed : {patient.remainingAmount}</p>
               
                

                 <p className=" mt-3 ml-[150px] text-orange-500 font-medium"> Patient ID :{patient.patientId}</p>
            </div>
        </div>
          {/* div for about section */}
        <div className="w-[900px] mt-[50px] px-[100px]">
            <p className="text-4xl font-bold">About </p>
            <p className="text-xl font-serif mt-[20px]" >Hi,My name is {patient.fundraisername}  and iam raising funds for
             my {patient.relation} ,<span className='font-bold'> {patient.patientName} </span> who is suffering from {patient.medicalCondition} and
             is undergoing treatment at {patient.hospitalName} Hospital ,{patient.city} .The family has done all
             it can collect to the total amount required for the treatment but Rs.<span className='font-bold text-red-600'>
               {patient.amount} </span> is required to 
             pay for all the medical expenses
             As the amount required is huge, I request  you to kindly contribute towards  the
             treatment and help during this time of need.Each contribution is important ! 
                </p>
        </div>
        {/* div for documents  */}
         <div className=" mt-[100px] px-[100px] ">
            <p  className="text-4xl font-bold">Medical Documents</p>

             {/* div for image  */}
             <div className="mt-[50px] " >

                    
                        <img className='w-[500px] h-[500px]' src={ medicalDocuments} alt="Medical Documents" />
                    </div>
         </div>

         {/* div for buttons  */}
          <div className="h-[200px] w-full flex justify-between place-items-center bg-slate-300 mt-[80px] px-[150px]">
            
            <button 
            onClick={() => {  
              window.open(`https://www.whatsapp.com/sharer/sharer.php?u=`, '_blank');
            }}
            className=" bg-green-600 w-[250px] h-[50px] rounded-xl flex place-items-center justify-center ">
            <img className="w-[40px]" src={whatsappLogo} alt="image" />
            <span className=" text-2xl text-white font-bold ">SHARE</span></button>
            
             <button
             onClick={() => {
               window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank');
            }}
              className="bg-blue-700 w-[250px] h-[50px] rounded-xl flex place-items-center justify-center" >
                <img className="w-[30px]" src={facebookLogo} alt="image" />
            <span  className="text-white text-2xl font-bold " >SHARE</span></button>

            <Link to='/contribute'>
            <button className="bg-cyan-400 w-[250px] h-[50px] rounded-xl " >
            <span className="text-white text-xl font-bold " >CONTRIBUTE NOW</span>
            </button>
            </Link>

          </div>
        </div>
        <Footer />
    </>
  )
}

export default MyFundraiser