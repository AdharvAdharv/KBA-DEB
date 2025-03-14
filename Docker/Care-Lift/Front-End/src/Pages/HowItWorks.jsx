import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import sarathImage from '../assets/Images/sarath.jpg'
import { Link } from 'react-router-dom'

const HowItWorks = () => {
  return (
    <div>
        <Navbar />


        <div className=" bg-gradient-to-t from-blue-700 to-white  w-full">
    
    <p className="font-black text-5xl font-serif text-center mt-[50px]">How it Works ?</p>
    

    <div className=" md:flex sm:grid">
        <div>

       
    {/* righ side of the body  */}
     <div className="ml-[150px] "> 
        <p className="font-black text-3xl   mt-[30px]">1. <br></br> Start a free Fundraiser </p>
    <p className="font-bold text-lg mt-3" >Start a free Fundraiser by filling all <br></br> the relevent details.</p>

    <p className="font-black text-3xl   mt-[30px]">2. <br></br> Share your Fundraiser </p>
    <p className="font-bold text-lg mt-3">Share your Fundraiser with friends, <br></br> family and starngers.</p>

    <p className="font-black text-3xl   mt-[30px]" >3. <br></br> Withdraw all your Donations</p>
    <p className="font-bold text-lg mt-3">Withdraw all the money you recieve at the point <br></br> in your fundrainsing journey.</p>
     </div>
     
    </div>
     <div>

     {/* testimony box */}
      <div className="w-[600px] h-[320px] bg-white rounded-xl p-[20px] sm:ml-0 md:ml-[250px] mt-[150px] ">

        {/* top side of the div */}
         <div className="flex">
            {/* div for image  */}
            <div>
        <img className="w-[100px] h-[100px] rounded-xl " src={sarathImage} alt="image" />
        </div>
        {/* div for name */}
        <div className="ml-[30px] mt-[20px]">
        <p className="text-2xl font-bold font-serif">Sarath k balan</p>
        <p className="text-lg font-bold text-green-300">Raised rs.500,000 for his medical Treatment</p>
        </div>
    </div>
       
    <div className="mt-[20px]">
    <p className="font-bold font-serif text-lg">Testimonial :</p>
        <p>My liver transplant was stuck because my family didn't have funds to afford it.Its only because i knocked on
             <span className="font-bold text-mono"> Care Lift's</span>door that iam healthy today. A big thank you to each every one who gave 
            me money.I wouldn't be alive without you. </p>
        </div>
      </div>
    
    </div>
</div>   
     
     
         {/* buttons  */}
      <div className="w-full h-[150px] grid justify-center mt-[50px]">
        
        <Link to='/startcampaingn'>
        <button className=" bg-white w-[250px] h-[50px] rounded-xl" >
        <span className=" text-xl font-bold ">Start a free Fundraiser</span></button>
        </Link>
        
         <Link to='/contactus'>
        <button className="bg-green-600 w-[250px] h-[50px] rounded-xl ">
        <span  className="text-white text-xl font-bold " >Contact Us</span></button>
        </Link>
        
      </div>
          
</div>
        <Footer />
    </div>
  )
}

export default HowItWorks