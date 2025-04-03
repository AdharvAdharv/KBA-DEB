import React from "react";
import logo from "../assets/images.png";
import { Link } from 'react-router-dom'

const FrontPage = () => {
  return (
    <>
      
       <div>
        <div className=" flex justify-between m-[50px] text-2xl">
           <p>Home</p>
           <p>Issue Certificate</p>
        </div>

        <div className="grid justify-center">
            <p className="flex justify-center text-3xl font-bold ">Certificate App</p>
            <img src={logo} alt="image" className="mt-[50px] ml-[40px]" />

            <div className=" mt-[50px]">
                <input type="text" placeholder="Enter your certificate ID" className="ring ring-cyan-600 rounded" />
                <button className=" bg-cyan-600 ml-[20px] w-[100px] h-[30px] rounded">Serach</button>
            </div>
        </div>
       </div>
      
    </>
  );
};

export default FrontPage;
