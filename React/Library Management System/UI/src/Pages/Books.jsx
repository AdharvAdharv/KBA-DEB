import React from 'react'
import BookGrid from '../Components/BookGrid'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Books = () => {
  return (
    <div className='bg-red-100'>
    <Navbar />
    <BookGrid />
    <Footer />
    </div>
  )
}

export default Books