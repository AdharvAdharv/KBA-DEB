import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'


const SignUp = () => {
 
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [username,setUserName] =useState('');
    const [password,setPassword]=useState('');
    const [userRole,setUserRole] = useState('');
    const [error,setError] = useState('')
    const navigate = useNavigate();


    const handleSignup = async (e) =>{
        e.preventDefault();
        try{
            const response = await fetch('/api/signup/',{
                method:'POST',
                credentials:'include',
                headers: {
                    'Content-Type' :'application/json',
                },
                body:JSON.stringify({
                    FirstName:firstName,
                    LastName:lastName,
                    UserName:username,
                    Password:password,
                    UserRole:userRole,
                }),
            });
                  if(!response.ok) {
                    const errData = await response.json();
                    throw new Error(errData.msg || 'Signup  failed');
                  }

                  navigate('/login');

        }catch(error){
            setError(error.message || 'Signup failed');
            
        }
    }
  
  return (
    <div className="flex justify-center mt-20">
    <div className="bg-slate-400 w-96 h-auto pl-12 font-serif text-xl rounded-md ">
        <div className="mt-6 ">
            <p className="font-bold text-3xl">Sign Up  </p>
            {error && <p className = "text-red-600 mb-6">{error}</p>} 

        </div>
        <form onSubmit={handleSignup}>
        <div className="mt-6 ">
            <label >First Name :</label>
        </div>
        <div><input 
        className="rounded-md bg-white"
         type="text"
         name='FirstName'
         value={firstName}
         onChange={(e) => setFirstName(e.target.value) }
         required
         /></div>

     <div className="mt-6 ">
            <label >Last Name :</label>
        </div>
        <div><input 
        className="rounded-md bg-white"
         type="text"
         name='LastName'
         value={lastName}
         onChange={(e) => setLastName(e.target.value) }
         required
         /></div>
        
        <div className="mt-6">
            <label >UserName :</label>
        </div>
        <div><input className="rounded-md bg-white"
         type="text" 
         name='UserName'
         value={username}
         onChange={(e) => setUserName(e.target.value) }
         required
         /></div>
        
        <div className="mt-6">
            <label >Password :</label></div>
        <div><input className="rounded-md bg-white" 
        type="password" 
        name='Password'
         value={password}
         onChange={(e) => setPassword(e.target.value) }
         required
        /></div>

<div className="mt-6">
            <label >User Role :</label></div>
        <div><select className="rounded-md bg-white     " 
        type="text" 
        name='UserRole'
         value={userRole}
         onChange={(e) => setUserRole(e.target.value) }
         required
        >
        <option value="user">User</option>
        <option value="Admin">Admin</option>
        </select>
        </div>
        
        <div className="mt-6 pl-24">
            <button className="bg-fuchsia-900 text-white font-bold rounded w-[110px] h-[35px]">
                 Sign Up</button></div>
  
        <div className="mt-3 mb-6">
            <p>Already Have a Account ? <Link to="/Login"  className='text-blue-800 '> Login</Link>
            </p> </div>
            </form>
    </div>
</div>
  )
}

export default SignUp