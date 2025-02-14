import React from "react";
import KBALogo from '../assets/images/KBALogo.png'

const Nav = () =>{
    return (
        <nav className="w-auto h-24 bg-stone-400  flex justify-between ">
        <div className="w-[100px] h-24  place-items-center pt-3">
          <a href="#">
            <img src={KBALogo} alt="KBA Logo"  className="pl-10 pt-" />
          </a>
         </div>
         <div className=" w-[45 0px] h-24 text-xl font-bold pt-16 ">
            <a className="p-2 hover:bg-white rounded" href="Homepage.html">Home</a>
            <a className="p-2 hover:bg-white rounded" href="CoursesKBA.html">Courses</a>
            <a className="p-2 hover:bg-white rounded" href="AddCourse.html">Add Course</a>
            <a className="p-3 hover:bg-white rounded" href="ContactUs.html">Contact Us</a>
         </div>
    </nav>
    )
}

export default Nav;