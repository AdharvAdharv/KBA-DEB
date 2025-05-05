import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'

import AddBook from "./Pages/AddBook"
import Books from "./Pages/Books"
import Cart from "./Pages/Cart"
import Homepage from "./Pages/Homepage"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import BuyBook from './Pages/BuyBook'
import YourOrders from './Pages/YourOrders'


function App() {
 

  return (
    <>
   <BrowserRouter>
   <Routes>
    
    <Route path='/'  element={<Navigate to='/login' /> } />
    <Route path='/signup'   element={<Signup />} />
    <Route path='/login'    element={<Login />} />
    <Route path='/homepage' element={<Homepage />} />
    <Route path='/books'    element={<Books />} />
    <Route path='/addbook'  element={<AddBook />} />
    <Route path='/cart'     element={<Cart />} />
    
    <Route path="/buy/:id" element={<BuyBook/>} />
    <Route path="/yourOrder" element={<YourOrders/>} />

   </Routes>
   </BrowserRouter>
     
    </>
  )
}

export default App
