import React from 'react'
import HOC from './HOC';

const Person2 = ({money,handleIncrease}) => {
  return (
    <>
    <div>Person2 have $ {money}</div>
    <button onClick={handleIncrease}>Add money</button>
    <hr/>
    </>
  )
}

export default HOC(Person2,4);