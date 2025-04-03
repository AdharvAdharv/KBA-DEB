import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SearchBook from '../assets/images/book-solid.svg';
import ProfileIcon from '../assets/images/profile-icon.png';
import SearchGenre from '../assets/images/book-open-solid.svg';
import AboutUsIcon from '../assets/images/AboutUs.svg';
import bellIcon from '../assets/images/bell-regular.svg';
import messageIcon from '../assets/images/message-solid.svg'

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div>
        <input
          className="w-[800px] h-[50px] ring ring-black ml-[250px] mt-[155px] rounded-l-full   "
          type="text"
        />
        <button className="w-[100px] h-[50px] ring ring-black rounded-r-full ml-[-4px] mt-[50px] bg-red-900">
          {" "}
          <span className="text-white font-bold ">Search</span>
        </button>

        <div className="font-bold text-xl text-white mt-16 flex justify-between">
          <button className="bg-red-900 w-[200px] h-[150px] rounded-full ml-[100px]">
            {" "}
            <img
              className="mx-auto w-[50px] h-[50px] "
              src={SearchBook}
              alt="logo"
            />
            Search by Book Name
          </button>
          <button className="bg-red-900 w-[200px] h-[150px] rounded-full ">
            {" "}
            <img
              className="mx-auto w-[50px] h-[50px]"
              src={ProfileIcon}
              alt="logo"
            />
            Search by Author Name
          </button>
          <button className="bg-red-900 w-[200px] h-[150px] rounded-full mr-[100px]">
            {" "}
            <img
              className="mx-auto   w-[50px] h-[50px]"
              src={SearchGenre}
              alt="logo"
            />{" "}
            Search by Genre
          </button>
        </div>

        <div className="font-bold text-xl text-white mt-16 flex justify-between">
          <button className="bg-red-900 w-[200px] h-[150px] rounded-full ml-[100px]">
            {" "}
            <img
              className="mx-auto w-[50px] h-[50px] "
              src={AboutUsIcon}
              alt="logo"
            />
            About Us
          </button>
          <button className="bg-red-900 w-[200px] h-[150px] rounded-full ">
            {" "}
            <img
              className="mx-auto w-[50px] h-[50px]"
              src={bellIcon}
              alt="logo"
            />
            New Arrivals
          </button>
          <button className="bg-red-900 w-[200px] h-[150px] rounded-full mr-[100px]">
            {" "}
            <img
              className="mx-auto   w-[50px] h-[50px]"
              src={messageIcon}
              alt="logo"
            />{" "}
            Message
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
