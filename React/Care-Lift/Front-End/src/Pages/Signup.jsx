import React ,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'         

const Signup = () => {

    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName]  = useState("");
    const [userName,setUserName]  =useState("");
    const [password,setPassword]  =useState("")
    const [error,setError]  =useState("")

    const navigate = useNavigate()

    const handleSignup = async (e)=>{
      e.preventDefault();
    try{
      
          const response = await fetch ("/api/signup",{
            method:"POST",
            credentials:"include",
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify({
              FirstName:firstName,
              LastName:lastName,
              UserName:userName,
              Password:password
            }),
          });

              if( !response.ok){
                const errData = await response.json();
                throw new Error ( errData.msg || "Sign up failed")
              }

              navigate("/login")

    }catch(error){
      setError(error.message || "Sign up failed")
    }
    }

  return (
    <div className="flex justify-center mt-10 ">
    <div className=" w-96 h-[600px] pr-4 pl-12 ring ring-black rounded-md shadow-2xl shadow-black">
       
        

            <p className="font-black text-4xl font-serif text-center mt-6	mb-6">SignUp</p>
            <form onSubmit={handleSignup}>
        
            <label className="text-xl font-serif 	" >First Name :</label>
            <input className="rounded-md ring ring-black w-[290px] h-[30px] mt-2 mb-6" type="text" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required/>       
        
            <label className="text-xl font-serif mt-6	">Last Name :</label>
            <input className="rounded-md ring ring-black w-[290px] h-[30px] mt-2 mb-6" type="text"
            value={lastName}
            onChange={ (e) =>setLastName(e.target.value)}
            required/>       

            <label className="text-xl font-serif mt-6	" >User Name :</label>
            <input className="rounded-md ring ring-black w-[290px] h-[30px] mt-2 mb-6" type="text"
            value={userName}
            onChange={ (e) => setUserName(e.target.value)}
            required/>
        
            <label className="text-xl font-serif ">Password :</label>
            <input  className="rounded-md ring ring-black w-[290px] h-[30px] mt-2 mb-4" type="password" 
            value={password}
            onChange={(e) => setPassword (e.target.value)}
            required/>

          <button className=" bg-blue-700 text-white font-bold rounded-3xl w-[290px] h-[35px] mt-6 mx-auto"
           type="submit"> Sign Up </button>

        </form>

        <div className="mt-6 mb-6" >
            <p className="text-xl font-serif	">Already have a account ? 
              <Link to="/login" className='text-blue-700'>Login</Link>
                 </p>
        </div>
    </div>
    
</div>
  )
}

export default Signup