import React from 'react'
import HOC from './HOC';

const Person1 = ({money,handleIncrease}) => {
  return (
    <>
    <h3>High Order Component in React to reuse programming component logic.</h3>
    <div>Person1 have $ {money}</div>
    <button onClick={handleIncrease}>Add money</button>
    <hr/>
    </>
  )
}

export default HOC(Person1);