import AddItem from "./pages/AddItem"
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ItemGrid from "./pages/ItemGrid"


function App() {
    

  return (
    <>
     <BrowserRouter>
       <Routes>
       
       <Route path='/' element={<Navigate to='/additem'/> } />
        <Route path='/additem' element={<AddItem />} />
        <Route path='/itemgrid' element={<ItemGrid />} />
       
       
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
