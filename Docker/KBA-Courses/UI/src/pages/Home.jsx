import React from 'react'

import Hero from "../components/Hero";
import TopCourse from "../components/TopCourse";
import CourseGrid from "../components/CourseGrid";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div> 
        <Navbar />
        <Hero />
        <TopCourse />
        <CourseGrid  />
        <Footer ></Footer>
    </div>
  )
}

export default Home