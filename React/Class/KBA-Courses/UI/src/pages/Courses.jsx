import React from 'react'
import Navbar from '../components/Navbar'
import CourseGrid from '../components/CourseGrid'

const Courses = () => {
  return (
    <>
    <Navbar/>
    <CourseGrid isHome={true} />

    </>
  )
}

export default Courses