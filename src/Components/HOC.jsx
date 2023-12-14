import React, { useState } from 'react'

const HOC = (OriginalComponent) => {
  const NewComponent = (props) => { // use props if we have some props in our initial component.
    const [money,setMoney] = useState(10);
    const handleIncrease = () => {
        setMoney(money * 2);
    };
    return <OriginalComponent handleIncrease={handleIncrease} money={money} {...props}/>
  }
  return NewComponent; 
}

export default HOC

// A Higher order component takes a component (wrapped component) as a input and return an Enhanced component as output.Or It's a plain javascript function that takes component as an argument and return an enhanced component as output.

// It simply takes a component as a input and return a new updated component as output. Used to enhance program logic.


// video link -> https://youtu.be/J5P0q7EROfw?si=JHjx1Ix6lfXgkh2-