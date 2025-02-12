import React from 'react'

const Demo = () => {

    const name='Marco';
    const x=30;
    const y=20;
    const names =['mathan', 'appu','pallavi'];

    const passed = false;

  return (
    <>
    <div>Demo</div>
     <p>Hello {name} </p>
     <p> The {x} and  {y} sums to {x+y} </p>
     
     <ul className='text-blue-700'>
        {names.map((name,index) => (
          <li key={index}> {name} </li>  
        ))}
     </ul>
     {passed ? <h1 className='text-green-600'> You have passed</h1> : <h1 className='text-red-800'>You have Failed</h1>}

    </>
  )
}

export default Demo