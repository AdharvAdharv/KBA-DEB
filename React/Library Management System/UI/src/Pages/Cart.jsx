import React from 'react'
import CartGrid from '../Components/CartGrid'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Cart = () => {
  return (
    <div className='bg-red-100'>
        <Navbar />
        <CartGrid />
        <Footer />
    </div>
  )
}

export default Cart