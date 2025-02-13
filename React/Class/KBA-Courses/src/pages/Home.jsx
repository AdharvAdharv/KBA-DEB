import React from 'react'

import Nav from "../components/nav";
import Hero from "../components/Hero";
import TopCourse from "../components/TopCourse";
import CourseGrid from "../components/CourseGrid";
import courses from '../assets/data/course.json'
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div> 
         <Nav />
        <Hero />
        <TopCourse />
        <CourseGrid courses={courses} />
        <Footer ></Footer>
    </div>
  )
}

export default Home