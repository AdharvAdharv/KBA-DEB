import React, { useEffect, useState } from 'react';
import Logo from "../assets/images/Logo.png";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("http://localhost:8000/check-auth", { withCredentials: true });
        if (response.status === 200) {
          setIsLoggedIn(true);
          // Check if the logged-in user is an admin
          setIsAdmin(response.data.role === 'admin');
        }
      } catch (error) {
        console.error('Error in checking auth status', error);
        setIsLoggedIn(false);
      }
    };

    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8000/logout', {}, { withCredentials: true });
      setIsLoggedIn(false);
      setIsAdmin(false);
    } catch (error) {
      console.error('Error logging out', error);
    }
  };

  return (
    <nav className="w-auto h-[100px] bg-red-900 flex justify-between">
      <img className="w-[110px] h-[100px] ml-12" src={Logo} alt="logo" />
      <div className="text-white font-medium text-2xl my-auto">
        <Link className="mr-[50px]" to='/homepage'>Home</Link>
        <Link className="mr-[50px]" to="/books">Books</Link>
        
        {/* Conditionally render "Add Books" link if user is an admin */}
        {isAdmin && (
          <Link className="mr-[50px]" to="/addbook">Add Books</Link>
        )}
        
        <Link className="mr-[50px]" to="/cart">Cart</Link>
        <Link className="mr-[50px]" to="/yourOrder">Orders</Link>

        {/* Conditionally render "Logout" or "Login" */}
        {isLoggedIn ? (
          <button className="mr-[50px]" onClick={handleLogout}>Logout</button>
        ) : (
          <Link className="mr-[50px]" to='/login'>Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
