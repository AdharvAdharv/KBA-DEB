import React, { useState } from 'react'
import {Link ,useNavigate} from 'react-router-dom'
const Login = () => {
  const [userName,setUserName] = useState("");
  const [password,setPassword] =useState("");
  const [error,setError] =useState("");

  const navigate=useNavigate()
     
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      const response = await fetch ('/api/login',{
        method:'POST',
        credentials:'include',
        headers:{
          'Content-Type':'application/json',  
        },
        body:JSON.stringify({UserName:userName,Password:password}),
      });
            if(!response.ok){
              const errData = await response.json();
              throw new Error (errData.msg || "Login failed");
            }
            navigate('/homepage')

    }catch(error){
      alert( 'Invalid credentials. Please try again.');
       setError(error.message || 'Invalid credentials :Please try again' )
    }
  }

  return (
    <div>
<div className="flex justify-center items-center h-screen">
    <div className=" w-96 h-[400px]   pl-12 ring ring-black rounded-md shadow-2xl shadow-black">
       
        

            <p className="font-black text-4xl font-serif text-center mt-6	">Login</p>
            <form onSubmit={handleSubmit}>
        
            <label className="text-xl font-serif mt-6	" >User Name :</label>
            <input className="rounded-md ring ring-black w-[290px] h-[30px] mt-4 mb-6" type="text" 
            value={userName}
            onChange={(e) =>setUserName(e.target.value)}
            required />
        
       
        
            <label className="text-xl font-serif ">Password :</label>
            <input type="password" className="rounded-md ring ring-black w-[290px] h-[30px] mt-4 mb-6"
            value={password}
            onChange={(e) =>setPassword(e.target.value)}
            required />


          <button className=" bg-blue-700 text-white font-bold rounded-3xl w-[290px] h-[35px] mt-6 mx-auto" 
          type="submit"> Login</button>
        </form>
        
   
             
        <div className="mt-6 mb-6" >
            <p className="text-xl font-serif	">Don't have a Account 
              <Link to="/signup" className="text-blue-700 font-serif	" >Sign Up</Link> </p>
        </div>
    </div>
    
</div>
      
    </div>
  )
}

export default Login