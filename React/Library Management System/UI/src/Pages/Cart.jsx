import React from 'react'
import CartGrid from '../Components/CartGrid'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Cart = () => {
  return (
    <div className="min-h-screen flex flex-col bg-red-100">
      <Navbar />
      <div className="flex-grow">
        <CartGrid />
      </div>
      <Footer />
    </div>
  )
}

export default Cart