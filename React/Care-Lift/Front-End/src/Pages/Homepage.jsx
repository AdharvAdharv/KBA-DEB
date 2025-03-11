import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import MainImage from '../assets/Images/MainImage.png'
import { Link } from 'react-router-dom'
import FundraiserGrid from '../components/FundraiserGrid'

const Homepage = () => {
  return (
    <div>
          <Navbar />

          <div className="h-[600px] bg-gradient-to-t from-blue-600 to-white w-full  ">
          {/* div for input field and button  */}
    
     
     {/* left and right side of the body */}
    <div className="flex justify-between ">
    {/* left side of body */}
     <div className=" grid ml-[100px]  mt-[70px]">
        <p className="font-black text-5xl font-serif  ">Need Fund for Your <br></br> Medical Treatment ? </p>
        <p className="text-white text-2xl font-bold ">Raise Money to pay hospital & <br></br>
         Medical bills for free.</p>

         <Link to='/contactus'>
        <button className="bg-green-600 w-[250px] h-[50px] rounded-xl  hover:bg-green-700 transition">
        <span  className="text-white text-xl font-bold " >Contact Us</span></button>
        </Link>
          
         <Link to='/formfundraiser'>
        <button className=" bg-white w-[250px] h-[50px] rounded-xl" >
        <span className=" text-xl font-bold ">Start a free Fundraiser</span></button>
        </Link>     
    
    </div>
      {/* div for image */}
     <div className="pr-[150px] ">
        <img className="mt-[150px] sm:hidden md:block " src={MainImage} alt="image"/>
     </div> 
    </div> 
</div>

<FundraiserGrid />
<Footer />

    </div>
  )
}

export default Homepage