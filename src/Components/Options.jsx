import React from 'react'

function Options({ click, totalValue, reset}) {
  return (
    <div className='options'>
      <button onClick= {() => click('good')}>Good </button>
      <button onClick= {() => click('neutral')}>Neutral </button>
      <button onClick= {() => click('bad')}>Bad </button>
      {totalValue >= 1 && <button onClick={() => reset()}>Reset</button> }
    </div>
  )
}

export default Options