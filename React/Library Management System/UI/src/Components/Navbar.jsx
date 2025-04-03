import React, { useEffect, useState } from 'react';
import Logo from "../assets/images/Logo.png"
import { Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {

  const [isLoggedIn,setIsLoggedIn] = useState();

   useEffect(()=>{

       const checkAuth= async()=>{
         try{
          const response = await axios

         }catch(error){
          console.error('Error in checking auth status',error);
       }
       }
       checkAuth();
   })

  return (
    <>
        <nav className="w-auto h-[100px] bg-red-900 flex justify-between ">
                <img className="w-[110px] h-[100px] ml-12" src={Logo} alt="logo" />
                <div className="text-white font-medium text-2xl my-auto">
                <Link className="mr-[50px]" to='/homepage' >Home</Link>
                <Link className="mr-[50px]" to="/books">Books</Link>
                <Link className="mr-[50px]" to="/addbook">Add Books</Link>
                <Link className="mr-[50px]" to="/cart" >Cart</Link>
                <Link className="mr-[50px]" to='/login'>Logout</Link>
            </div>

            </nav>
    </>
  )
}

export default Navbar