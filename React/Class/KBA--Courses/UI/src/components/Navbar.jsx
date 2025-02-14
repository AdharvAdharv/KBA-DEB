import React from 'react'
import KBALogo from '../assets/images/KBALogo.png'

const Navbar = () => {
  return (
    <nav class="w-auto h-[80px] bg-gray-300	 pl-6 pt-2 flex justify-between place-items-center shadow-lg shadow-black">
    <img class="" src= {KBALogo} alt="KBA Logo" />
    <div class=" font-serif text-xl text-fuchsia-900">
        <a class="pr-6" href="Homepage.html">Home</a>
        <a class="pr-6" href="CoursesKBA.html">Courses</a>
        <a class="pr-6" href="ContactUs.html">Contact Us</a>
        <a class="pr-6" href="AddCourse.html">Add Course</a>
        <a class="pr-6" href="loginpage.html">Logout</a>
    </div>
</nav>
  )
}

export default Navbar