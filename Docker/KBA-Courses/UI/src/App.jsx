import React from "react";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Dashboard from './pages/Dashboard'
import AddCourse from './pages/AddCourse.jsx'

import { BrowserRouter, Routes, Route,Navigate, Router } from "react-router-dom";     

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to= '/signup'/> }  />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addcourse" element={<AddCourse />} />

        </Routes>
      </BrowserRouter>
    
       
   </>
  )
}

export default App