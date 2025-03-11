import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const AboutUs = () => {
  return (
    <div>
        <Navbar />

        {/* main body */}
<div className=" bg-gradient-to-t from-blue-700 to-white  w-full">
   {/* div for making colums  */}
    <div className="grid md:grid-cols-2 sm:grid-cols-1 mt-[100px] sm:pl-0 md:pl-[130px]">

        <div className="bg-white md:w-[550px] sm:w-[350px] h-[330px] pl-6 rounded-lg">
        <p className="font-black text-3xl   mt-[30px] ">Who we are </p>
      
        <p className="font-bold text-lg mt-3" >Welcome to Care Lift, a community-driven crowdfunding
             platform dedicated to making a difference. We believe in the power of collective action and
              aim to empower individuals, communities, and organizations to raise funds for causes that matter.
            From medical emergencies to educational pursuits, environmental conservation to disaster relief, we connect people with the support they need to bring their visions to life.</p>
        </div>
    {/* div for space */}
     <div className="md:w-[550px] sm:w-[350px] md:h-[330px]  sm:hidden md:block">
     </div>
     {/* div for space */}
     <div className="md:w-[550px] sm:w-[350px]  h-[330px]">
    </div>

   
    <div className="bg-blue-200 md:w-[550px] sm:w-[350px]  h-[270px] pl-6 rounded-lg">
        <p className="font-black text-3xl   mt-[30px]">Our mission </p>
        <p className="font-bold text-lg mt-3" >Our mission is simple:"To create a world where everyone has the opportunity to make an impact, no matter how big or small."
            We are committed to providing a safe, transparent, and accessible platform for fundraisers and donors alike, ensuring every cause gets the support it deserves.</p>
    </div>
    
       
    <div className="bg-blue-300 md:w-[550px] sm:w-[350px]  h-[300px] pl-6 rounded-lg">
        <p className="font-black text-3xl   mt-[30px]">Why choose Us ?   </p>
        <p className="font-bold text-lg mt-3" >Empathy-Driven: We prioritize meaningful connections and real impact.
            User-Friendly Platform: Easy-to-use tools to create, share, and manage campaigns.
            Secure and Transparent: Trust is at our core. We use secure payment gateways and ensure transparency in fund distribution.
            Global Community: Join a diverse network of donors and changemakers from around the world.</p>
    </div>
    {/* div for space */}
    <div className="md:w-[550px] sm:w-[350px] sm:h-0 md:h-[330px]">
    </div>
      {/* div for space  */}
     <div className="md:w-[550px] sm:w-[350px]  h-[330px] ">
    </div>
    
    
    <div className="bg-blue-400 md:w-[550px] sm:w-[350px]  h-[230px] pl-6 rounded-lg">
        <p className="font-black text-3xl   mt-[30px]">Join Us in Making Difference </p>
        <p className="font-bold text-lg mt-3" >Whether you're looking to start a campaign, support a cause, or simply explore the amazing stories within our community, 
            Care Lift is here for you.
            Let's create a ripple effect of kindness and change, one campaign at a time.</p>
    </div>
</div>
     
          {/* buttons  */}
      <div className="h-[150px] grid justify-center mt-4">
        
       <Link to='/contactus'>
        <button className=" bg-white w-[250px] h-[50px] rounded-xl" >
        <span className=" text-xl font-bold ">Start a free Fundraiser</span></button>
        </Link>

        <Link to='/contactus'>
        <button className="bg-green-600 w-[250px] h-[50px] rounded-xl "  >
        <span  className="text-white text-xl font-bold " >Contact Us</span></button>
        </Link>

      </div>
          
</div>
<Footer />
    </div>
  )
}

export default AboutUs