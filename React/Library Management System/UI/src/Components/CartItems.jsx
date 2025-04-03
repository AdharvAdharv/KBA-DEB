import React from 'react'

const CartItems = () => {
  return (
    
        <div className="w-[1000px] h-[400px] bg-white mx-auto mt-[100px] pt-[50px] pl-[50px] flex">
            <img className="h-[300px]" src="Assets/book3.jpeg" alt="imgage"/>
            <div className=" h-[300px] w-[700px] ml-[50px] font-serif">
                <p className="text-3xl font-bold ml-[250px]" >WALK INTO THE SHADOWS</p>
                <p className="font-bold text-xl mt-9">Description</p>
                <p className="text-lg">Walk Into the Shadows by Abhishek Kothari is a poignant tale of love, 
                    <br></br> loss, and self-discovery, exploring the depths of human emotions and relationships.</p>
                <div className="mt-10 flex justify-between">
                <span className="font-black text-lg text-red-900    ">$1499</span>
                <button className="bg-red-900 w-[250px] h-[40px] text-white font-black text-xl rounded-full ">Remove </button>
                <button  className="bg-red-900 w-[250px] h-[40px] text-white font-black text-xl rounded-full ">Buy</button>
            </div>
           

        </div>
    </div>
  )
}

export default CartItems