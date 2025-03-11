import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Homepage from './Pages/Homepage'
import NotFound from './Pages/NotFound'
import HowItWorks from './Pages/HowItWorks'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import MyFundraiser from './Pages/MyFundraiser'
import Contribution from './Pages/Contribution'
import FormFundraiser from './Pages/FormFundraiser'
import FormPatientDetails from './Pages/FormPatientDetails'
import FormTestimony from './Pages/FormTestimony'
import PatientDetails from './Pages/PatientDetails'
import WithdrawalPage from './Pages/WithdrawalPage'
import ContributionsList from './Pages/ContributionList'
import NotFoundData from './Pages/NotFoundData'

const App = () => {
  return (
    <>
    <BrowserRouter >
       <Routes >
        <Route path='/' element={<Navigate to='/login'/> } />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/homepage' element={<Homepage />} />
        <Route path='/notfound' element={<NotFound />} />
        <Route path='/howitworks' element={<HowItWorks />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/myfundraising' element={<MyFundraiser />} />
        <Route path='/contribute' element={<Contribution />} />
        <Route path='/formfundraiser' element={ <FormFundraiser />} />
        <Route path='/formpatientdetails' element={<FormPatientDetails />} />
        <Route path='/formtestimony' element={<FormTestimony />} />
        <Route path='/patientdetails/:id' element={<PatientDetails />} />
        <Route path='/Withdraw' element={<WithdrawalPage />}  />
        <Route path='/contributions/:patientId' element={<ContributionsList />} />
        <Route path='/notfoundData' element={<NotFoundData />} />
      
       </Routes>
    </BrowserRouter>

    </>
  )
}

export default App