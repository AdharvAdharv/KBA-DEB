import React from 'react'

const ItemCard = ({item}) => {  
  return (
    <div>
        <div  className="bg-blue-200  p-4 rounded-md shadow-md">               
        <p className="text-gray-500 text-sm"> Item Name :
            <span className="text-lg font-semibold text-black" > {item.itemName}</span></p>

            <p className="text-gray-500 text-sm"> Catogory : 
            <span className="text-lg font-semibold text-black" >{item.catogory}</span></p>

            <p className="text-gray-500 text-sm"> Quantity : 
            <span className="text-lg font-semibold text-black" ></span>{item.quantity}</p>

            <p className="text-gray-500 text-sm"> Price : 
            <span className="text-lg font-semibold text-black" >{item.price}</span></p>
              
               
              
        </div>
    </div>
  )
}

export default ItemCard