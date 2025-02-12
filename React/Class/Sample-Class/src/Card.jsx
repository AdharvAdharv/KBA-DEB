import React, { useState } from 'react'

const Card = ({title,text,customClasses}) => {

    const [likes,setLiked] = useState(0);
    const [titlecolor, setTitilecolor] =useState ('text-black');

    const toggleTitlecolor = () =>{
        setTitilecolor((prevColor) =>
        prevColor === 'text-black' ? 'text-blue-500' : 'text-black' )
    }


  return (
    <div className={`max-w-sm rounded overflow-hidden shadow-lg p-6  ${customClasses}`}>

        <h2 className={`font-bold text-xl mb-2 ${titlecolor}`}>
            {title}
        </h2>
        <p className='text-gray-800 text-base'>
            {text}
        </p>
        <button className='mt-6 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-800'
          onClick={() =>setLiked (likes+1)}  >
            Likes:{likes}
          </button>

          <button className='mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-800 '
          onClick={toggleTitlecolor}  >
         Toggle Title Color
          </button>
    </div>

)
}

export default Card