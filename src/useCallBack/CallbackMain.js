import React, { useCallback, useState } from 'react'
import Parent from './Parent'
import Child from './Child';

const CallBackExample1 = () => {
  // reference technicalsuneja / engineer coderwala
  console.log('main component called');
  const[countOne,setCountOne] = useState(0);
    const[countTwo,setCountTwo] = useState(0);
    const incrementCounterOne = useCallback(() => {
      setTimeout(() => {
        setCountOne(countOne + 1);
      }, "1000");
    },[countOne])
    const incrementCounterTwo = useCallback(() => {
      setCountTwo(countTwo + 1);
  },[countTwo])
  return (
    <div className='container'>
      <Parent countOne={countOne} myfun={incrementCounterOne}/>
      <Child countTwo={countTwo}/>
      <button onClick={incrementCounterOne} className='btn btn-dark m-4'>Button1 - {countOne}</button>
      <button onClick={incrementCounterTwo} className='btn btn-dark m-4'>Button2 - {countTwo}</button>
    </div>
  )
}

export default CallBackExample1