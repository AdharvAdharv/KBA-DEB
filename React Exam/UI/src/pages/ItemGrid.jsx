import React, { useEffect, useState } from 'react'
import ItemCard from '../components/ItemCard'  

const ItemGrid = () => {
    const [item,setItem]=useState("");
    const [loading,setLoading]=useState(true)

    useEffect( ()=>{
        const fetchItem= async ()=>{
          try{
            const response = await fetch ('/api/showitem');
            if(!response.ok){
              throw new Error(`HTTP error! Status: ${response.status}`)
            }
            const data = await response.json();
            setItem(data)
            setLoading(false)
          }catch(error){
            console.log(error);
                           
          }
        }
        fetchItem();
       },[])
  return (
    <>
   <h1 className='flex justify-center text-3xl font-bold mt-8' >All Items</h1>
    <div class=" mt-[100px] ml-[30px] grid sm:grid-cols-1  md:grid-cols-3 gap-[40px] mb-[50px]">
     { 
      loading ? (<p>Loading...</p>):(
      item.map((item) =>(
        
        <ItemCard key={item.itemName} item={item}/>)
      ))
      }
    </div>
    </>
     
   
  )
}

export default ItemGrid