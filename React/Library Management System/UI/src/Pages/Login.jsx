import React, { useState } from "react";
import bgimage from "../assets/images/bg-image.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin= async (e)=>{
    e.preventDefault();
    try{
      const response = await axios.post('/api/login',
        {
          email,
          password
        },
        {
          withCredentials:true,
          headers:{
            'Content-Type':'application/json'
          },
        }
      )
      navigate('/homepage')

    }catch(error){
      setError(error.response?.data?.msg || "Login failed");      }
  }
  
  return (
    <>
      <div
        className="flex justify-center   bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <div className="bg-white opacity-80 w-96 h-[500px] pr-4 pl-12 rounded-md mt-10 ">
          <p className="font-black text-4xl font-serif text-center mt-6	">
            Login
          </p>

          <form onSubmit={handleLogin}>
            <label className="text-xl font-serif mt-6	">Email :</label>

            <input
              className="rounded-md ring ring-black w-[290px] h-[30px] mt-6 mb-6"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className="text-xl font-serif ">Password :</label>

            <input
              type="password"
              className="rounded-md ring ring-black w-[290px] h-[30px] mt-6 mb-6"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            

            <div className="mt-6 ">
              <a href="" className="text-xl font-serif ">
                {" "}
                Forgot password ?
              </a>

              <div className="inline ml-12">
                <button
                  className=" bg-red-900 text-white font-bold rounded w-[110px] h-[35px]"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </div>
          </form>

          {error && <p style={{ color: "red" }}>{error}</p>} 

          <div className="mt-6 mb-6">
            <p className="text-xl font-serif	">
              Don't have a account ?{" "}
              <Link className="text-red-900 font-serif" to="/signup">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
