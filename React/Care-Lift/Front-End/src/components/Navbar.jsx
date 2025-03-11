import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';

import Logo from '../assets/Images/Logo.png'


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavigation = async (event) => {
      const value = event.target.value;
      
      if (value === "logout") {
        if (!window.confirm
          ("Are you sure you want to Logout ?")) {
           return;
          }
        try {
          const res = await fetch("/api/logout", { 
            method: "GET",
            credentials:'include' });
          if (res.ok) {
            alert("Successfully logged out");
            navigate("/login"); 
          } else {
            alert("Logout failed");
          }
        } catch (error) {
          console.error("Error during logout:", error);
          alert("An error occurred during logout.");
        }
      } else if (value) {
        navigate(value);
      }
    };
    
    
  return (
    <div>
         <nav className="w-full bg-slate-400 px-6 md:px-12 py-4 flex flex-col md:flex-row items-center justify-between">
         {/* Logo  */}
        <div className="w-full md:w-auto flex justify-between items-center">
            <img src={Logo} alt="logo" className="h-12"/>
             {/* Mobile Menu Button */}
            <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl focus:outline-none"
        >
          {menuOpen ? '✖' : '☰'}
        </button>
        </div>
    
        {/* Navigation Links  */}
        <div id="menu" className="hidden md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
            <Link to='/homepage' className="text-white text-lg">Home</Link>
            <Link to="/formfundraiser" className="text-white text-lg">Start a Campaign</Link>
            <Link to='/howitworks' className="text-white text-lg">How it Works</Link>
            <Link to="/aboutus" className="text-white text-lg">About Us</Link>
            <select className="bg-transparent ring ring-white text-black p-2 rounded"
            onChange={handleNavigation}>
                <option value="">Select Option</option>
                <option value="/myfundraising">My Fundraiser</option>
                <option value="/contactus">Contact Us</option>
                <option value="logout">Logout</option>
            </select>
        </div>
    </nav>
    </div>
  )
}

export default Navbar