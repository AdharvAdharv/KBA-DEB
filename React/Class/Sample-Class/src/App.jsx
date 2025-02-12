import React from 'react'
import Demo from './Demo'
import Card from './Card'

const App = () => {

  const cardsData = [
    {
      title:'Card 1',
      text : 'This is the first Card',
      customClasses: 'bg-yellow-300'
    },
    {
      title:'Card 2',
      text : 'This is the second Card',
      customClasses: 'bg-blue-300'
    },
    {
      title:'Card 3',
      text : 'This is the third Card',
      customClasses: 'bg-slate-300'
    }
  ]

  return (
    <>
    <div className='text-5xl text-red-700'>App</div>
    <Demo />
    {
      cardsData.map((card,index) =>(
        <Card key = {index}
              title= {card.title}
              text = {card.text}
              customClasses= {card.customClasses} />
      ))
    }
    </>
  )
}

export default App