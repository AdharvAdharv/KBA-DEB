import React, { useEffect, useState } from 'react'
import FundraiserCard from './FundraiserCard'

const FundraiserGrid = () => {

  const [campaign,setCampaign] =useState([])
  const [loading,setLoading] =useState(true)

   useEffect( ()=>{
    const fetchCampaign= async ()=>{
      try{
        const response = await fetch ('/api/getAllFundraising');
        if(!response.ok){
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json();
        setCampaign(data)
        setLoading(false)
      }catch(error){
        console.log(error);
        setLoading(false)
           
      }
    }
    fetchCampaign();
   },[])

  return (
    <>
    <div class=" mt-[100px] ml-[30px] grid sm:grid-cols-1  md:grid-cols-3 gap-[40px] mb-[50px]">

      { 
      loading ? (<p>Loading...</p>):(
      campaign.map((item) =>(
        
        <FundraiserCard key={item.patientId} item={item}/>)
      ))
      }
    </div>
    </>
  )
}

export default FundraiserGrid