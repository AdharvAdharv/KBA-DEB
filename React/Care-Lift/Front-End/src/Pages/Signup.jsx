import React ,{useState} from 'react'
import { Link } from 'react-router-dom'         

const Signup = () => {
  return (
    <div className="flex justify-center mt-10 ">
    <div className=" w-96 h-[600px] pr-4 pl-12 ring ring-black rounded-md shadow-2xl shadow-black">
       
        

            <p className="font-black text-4xl font-serif text-center mt-6	">SignUp</p>
            <form action="">
        
            <label className="text-xl font-serif mt-6	" >First Name :</label>
            <input className="rounded-md ring ring-black w-[290px] h-[30px] mt-4 mb-6" type="text" required/>       
        
            <label className="text-xl font-serif mt-6	">Last Name :</label>
            <input className="rounded-md ring ring-black w-[290px] h-[30px] mt-4 mb-6" type="text" required/>       

            <label className="text-xl font-serif mt-6	" >User Name :</label>
            <input className="rounded-md ring ring-black w-[290px] h-[30px] mt-4 mb-6" type="text" required/>
        
            <label className="text-xl font-serif ">Password :</label>
            <input type="password" className="rounded-md ring ring-black w-[290px] h-[30px] mt-4 mb-6" required/>

          <button className=" bg-blue-700 text-white font-bold rounded-3xl w-[290px] h-[35px] mt-6 mx-auto" type="submit"> <a href="Login.html"> Sign Up </a></button>
        </form>

        <div className="mt-6 mb-6" >
            <p className="text-xl font-serif	">Already have a account ? 
              {/* <Link to="./Login.jsx">Login</Link> */}
                 </p>
        </div>
    </div>
    
</div>
  )
}

export default Signup