import React from 'react'
import Navbar from '../components/Navbar'
import CourseGrid from '../components/CourseGrid'

const Courses = () => {
  return (
    <>
    <Navbar/>
    <CourseGrid isHome={false} />

    </>
  )
}

export default Courses