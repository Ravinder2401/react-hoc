import React from 'react'


// A higher-order function is a function that returns another function when it’s called. Often they also take a function as an argument, but this isn’t required for a function to be considered higher-order.

const HighOrderFunction = () => {
    const logAndReturn = (func) => {
        return function(...args) {
            const result = func(...args);
            console.log(`Result - ${result}`);
            return result;
        }
    }

    const add = (a,b) => a + b;
    const subtract = (a,b) => a-b;

    const addAndLog = logAndReturn(add);
    const subtractAndLog = logAndReturn(subtract);

    addAndLog(4, 4);
    subtractAndLog(4, 3);
    
  return (
    <div>HighOrderFunction</div>
  )
}

export default HighOrderFunction