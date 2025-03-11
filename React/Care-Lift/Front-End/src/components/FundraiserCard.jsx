import React from 'react'
import { useNavigate } from 'react-router-dom';

import icon from '../assets/Images/heart-solid.svg'

const FundraiserCard = ({item}) => {

    const navigate= useNavigate();

    const handleclick= ()=>{
        navigate(`/patientdetails/${item.patientId}`)
    }

    const imageSrc = item.image1.startsWith('data:image')
    ? item.image1 : `data:image/jpeg;base64,${item.image1}`;
  return (
    <>
     <div className="bg-slate-400 w-[400px] h-[500px] rounded-xl " onClick={handleclick}  >
        
        <img  className="w-[400px] h-[250px] object-cover rounded-xl" src={imageSrc}  alt="image" />
        
        <p className="text-xl font-bold m-[10px]  ">{item.patientName} is Fighting for Their Life – They Need Your Help </p>

        <div className="flex justify-between font-serif px-[20px] ">
            <p>Funds required</p>
            <p>Campaign ends in </p>
        </div>

        <div className="flex justify-between px-[20px] ">
            <p className="text-red-700 font-bold">{item.remainingAmount}</p>
            <p className="text-orange-500">Patient ID : {item.patientId}</p>
        </div>
      
        
        <button className="bg-cyan-400 h-[50px]  w-[250px] mt-[50px]  mx-[70px] flex justify-center place-items-center rounded-xl" > 
            <img className="w-[40px]" src={icon}  alt="image" />
            <span className="text-2xl font-bold text-white ml-5 "  >CONTRIBUTE </span></button>

     </div>
    </>
  )
}

export default FundraiserCard