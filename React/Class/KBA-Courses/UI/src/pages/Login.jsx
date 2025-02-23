import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () => {

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')

    const navigate = useNavigate();

    const handleLogin = async (e) =>{
        e.preventDefault();
        try{
            const response = await fetch('/api/login',{
                method:'POST',
                credentials:'include',
                headers: {
                    'Content-Type' :'application/json',
                },
                body:JSON.stringify({UserName:username,Password:password}),
            });
                  if(!response.ok) {
                    const errData = await response.json();
                    throw new Error(errData.msg || 'Login failed');
                  }

                  navigate('/dashboard');

        }catch(error){
            setError(error.message || 'Invalid credentials : Please try again ');
            
        }
    }

  return (
    <div className="flex justify-center mt-20">
    <div className="bg-slate-400 w-96 h-auto pr-4 pl-12 rounded-md">
        <div className="mt-6">

            <p className="font-bold text-3xl font-serif	">Login</p>
            {error && <p className = "text-red-600 mb-6">{error}</p>} 
        </div>
            <form onSubmit={handleLogin}>
        <div className="mt-6">

            <label className="text-xl font-serif" >User Name :</label>
        </div>
        <div>

            <input className="rounded-md bg-white" 
            type="text"
            id='username'
            name='UserName'
            value={username}
            onChange={(e) => setUsername(e.target.value) }
            required
             />
        </div>
        <div className="mt-6">
            <label className="text-xl font-serif	" >Password :</label>
        </div>
        <div>
            <input type="password" 
            className="rounded-md bg-white"
            id='password'
            name='Password'
            value={password}
            onChange={ (e) =>setPassword(e.target.value)}
            required
            />
        </div>
        <div className="mt-6 ">

            <a href="" className="text-xl font-serif "> Forgot password ?</a>
            
            <div className="inline ml-12"><button className=" bg-fuchsia-900 text-white font-bold rounded w-[110px] h-[35px]" type="submit">Login</button>
        </div>
    </div>
             
        <div className="mt-6 mb-6" >
            <p className="text-xl font-serif	">Don't have a account ? <a className="text-blue-600 font-serif	" >Sign Up</a> </p>
        </div>
        </form>
    </div>
    
</div>
  )
}

export default Login