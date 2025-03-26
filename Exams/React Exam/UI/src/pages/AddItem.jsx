import React, { useState } from 'react'
import { Link } from 'react-router-dom';  

const AddItem = () => {
  
    const [itemName,setItemName] =useState("");
    const [catogory,setCatogory] =useState("");
    const [quantity,setQuantity] =useState("");
    const [price,setPrice]=useState("")

    const handleSubmit=  async (e)=>{
        e.preventDefault();
        try{
            const data = { 
                ItemName: itemName,
                Catogory: catogory,
                Quantity: quantity,
                Price: price
            };
    
            const res = await fetch("/api/additem", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
    
            if (!res.ok) {
                throw new Error("Error adding Item");
            }
    
            alert("Item Added Successfully!");
            setItemName("");
            setCatogory("");
            setQuantity("");
            setPrice("");
    
        }catch(error){
            console.log(error); 
        }
    }

  return (
    <>
    <Link to='/itemgrid' >
    <button 
    className="bg-red-900 w-[200px] h-[35px] text-white rounded mt-2 mb-7">
        View Items</button>
        </Link>

    <div className='  m-auto mt-[100px]  w-[500px] h-[400px]'>
        <h1 className='text-2xl font-bold flex justify-center text-blue-700'>Add Item</h1>
       
       
        <form onSubmit={handleSubmit} >
        <label className=" font-semibold" > Item Name : </label>
   
    <input className="w-full p-2 rounded border border-gray-400 mb-8"   type="text" 
    value={itemName}
    onChange={(e) => setItemName (e.target.value)}
    placeholder="Enter Item Name"  required/><br></br>

        <label className=" font-semibold" > Catogory : </label>
   
    <input className="w-full p-2 rounded border border-gray-400 mb-8"   type="text" 
    value={catogory}
    onChange={(e) => setCatogory (e.target.value)}
    placeholder="Enter Catogory"  required/><br></br>

        <label className=" font-semibold" > Quantity </label>
   
   <input className="w-full p-2 rounded border border-gray-400 mb-8"   type="number" 
   value={quantity}
   onChange={(e) =>setQuantity (e.target.value)}
   placeholder="Enter Quantity"  required/><br></br>

        <label className=" font-semibold" > Price : </label>
   
    <input className="w-full p-2 rounded border border-gray-400 mb-8"   type="number" 
    value={price}
    onChange={(e) => setPrice(e.target.value)}
    placeholder="Enter Price"  required/><br></br>
    
    <button className="bg-blue-900 w-[500px] h-[35px] text-white rounded mt-2 mb-7">Submit</button>

  </form>
    </div>
    </>
  )
}

export default AddItem