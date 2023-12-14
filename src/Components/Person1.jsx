import React from 'react'
import HOC from './HOC';

const Person1 = (props) => {
  return (
    <>
    <h3>High Order Component in React to reuse programming component logic.</h3>
    <h4>Hi {props.name}</h4>
    <div>Person1 have $ {props.money}</div>
    <button onClick={props.handleIncrease}>Add money</button>
    <hr/>
    </>
  )
}

export default HOC(Person1);