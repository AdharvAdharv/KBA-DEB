import React ,{useState , useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Dashboard = () => {

    const [profile,setProfile] =useState(null);
    const [error,setError] = useState('');
    const navigate = useNavigate();

    useEffect (()=>{
        const fetchProfile = async ()=>{
            try{
                const response = await fetch('/api/profile',{
                    method:'GET',
                    credentials:'include',
                });
                if(!response.ok){
                   throw new Error('Unauthorised Access')
                }
                const data= await response.json();
                console.log(data.userName);
                
                setProfile(data)
            }catch(err){
               setError(err.message || 'Error fetching profile');
               navigate('/login')
            }
        }
        fetchProfile();
    },[navigate])

  return (
    <div>
        <Link className='m-[50px] text-xl font-semibold text-blue-700' to='/home'> Home</Link>
        <p className='text-3xl font-bold mt-10 ml-10'>Dashboard</p>
        {error && <p className='text-red-600' >{error} </p>}
       {
        profile ? (
            <div>
                <p> Welcome :{profile.userName } </p>
                <p>Your role is : {profile.userRole } </p>

                </div>
        ):(
            <p> Loading Profile ....</p>
        )
       }

    </div>
  )
}

export default Dashboard