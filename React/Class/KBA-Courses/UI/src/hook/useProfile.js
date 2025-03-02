import { useEffect,useState } from "react";

export default function useProfile () {
    const [profile, serProfile] = useState(null);
    const [loading , setLoading] = useState(true);

    useEffect (() =>{
        const fetchProfile = async () =>{
             try{
                const res= await fetch ("/api/profile",{
                    credentials:"include"
                });
                if(res.ok){
                    const data = await res.json();
                    serProfile(data);
                }else{serProfile(null)}
             }catch(error){console.error('Profile fetch error :',error)
                serProfile(null)
             }finally{
                setLoading(false);
             }
        }
        fetchProfile();
    },[]);
 
           return{profile,loading};

}