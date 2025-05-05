import React, { useState } from "react";
import bgimage from "../assets/images/bg-image.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

const Signup = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [role,setRole]=useState();
  const [error,setError]=useState("")

  const navigate = useNavigate();
    const handleSubmit = async (e)=>{
      e.preventDefault();
      try{
        const response = await axios.post("/api/signup",
          {
            name,
            email,
            password,
          },
          {
            withCredentials:true,
            headers:{
              'Content-Type':'application/json',
            },
          }
        )

       
       navigate('/login')


      }catch(error){
        setError(error.response?.data?.msg || "Sign up failed");      }
    }



  return (
    <>
      <div
        className="flex justify-center  bg-cover bg-center h-screen "
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <div className="bg-white opacity-80 w-96 h-[500px] pr-4 pl-12 rounded-md mt-10 ">
          <p className="font-black text-4xl font-serif text-center mt-6	">
            SignUp
          </p>
         
         <form onSubmit={handleSubmit} >
          <label className="text-xl font-serif mt-6	">Name :</label>
          <input
            className="rounded-md ring ring-black w-[290px] h-[30px] mt-4 mb-6"
            type="text"
            value={name}
            onChange={(e) =>setName(e.target.value)}
            required
           />

          <label className="text-xl font-serif mt-6	">Email :</label>
          <input
            className="rounded-md ring ring-black w-[290px] h-[30px] mt-4 mb-6"
            type="email"
            value={email}
            onChange={(e) =>setEmail(e.target.value)}
            required
          />

          <label className="text-xl font-serif ">Password :</label>
          <input
            type="password"
            className="rounded-md ring ring-black w-[290px] h-[30px] mt-4 mb-6"
            value={password}
            onChange={(e) =>setPassword(e.target.value)}
            required
          />
          

          <button
            className=" bg-red-900 text-white font-bold rounded-3xl w-[290px] h-[35px] mt-6 mx-auto"
            type="submit"
          >
            Sign Up
          </button>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>} 
          <div className="mt-6 mb-6">
            <p className="text-xl font-serif	">
              Already have a account ?{" "}
              <Link to='/login' className="text-red-900 font-serif	" >
               Login</Link> 
              
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
