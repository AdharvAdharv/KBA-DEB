import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logos from './Logos'



function App() {
  const [count, setCount] = useState(0)
  const [liked , setLiked]= useState(false)
  // const [click , setTheme]= useState(false)

  return (
    <>
     <Logos/>
     

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      <button onClick={() =>setLiked((prev) => !prev )}>
        {liked ? 'Liked' :'Disliked'}
      </button> 


      {/* <button onClick={() => setTheme((prev) => !prev )}>
        {clicked ? 'Liked' :'Disliked'}
      </button>    */}


        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
