import React from 'react'
import KBALogo from '../assets/images/KBALogo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="w-auto h-[80px] bg-gray-300	 pl-6 pt-2 flex justify-between place-items-center shadow-lg shadow-black">
    <img className="" src= {KBALogo} alt="KBA Logo" />
    <div className=" font-serif text-xl text-fuchsia-900">
        <Link to='/home' className="pr-6" >Home</Link>
        <a className="pr-6" href="CoursesKBA.html">Courses</a>
        <a className="pr-6" href="ContactUs.html">Contact Us</a>
        <a className="pr-6" href="AddCourse.html">Add Course</a>
        <a className="pr-6" href="loginpage.html">Logout</a>
    </div>
</nav>
  )
}

export default Navbar