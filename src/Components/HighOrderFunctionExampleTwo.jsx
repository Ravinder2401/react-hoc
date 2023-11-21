// import React from 'react'

// const HighOrderFunctionExampleTwo = () => {
//     // Basic Approach for calculating area, circumference, and diameter of the given array.
//     const radius = [3,1,2,4];

//     const calculateArea = (radius) => {
//         const output = [];
//         for (let i = 0; i < radius.length; i++) {
//             output.push(Math.PI * radius[i] * radius[i]);
//         }
//         return output;
//     }

//     const calculateCircumference = (radius) => {
//         const output = [];
//         for (let i = 0; i < radius.length; i++) {
//             output.push(2 * Math.PI * radius[i]);
//         }
//         return output;
//     }

//     const calculateDiameter = (radius) => {
//         const output = [];
//         for (let i = 0; i < radius.length; i++) {
//             output.push(2 * radius[i]);
//         }
//         return output;
//     }
//     console.log('Area---',calculateArea(radius));
//     console.log('Circumference---',calculateCircumference(radius));
//     console.log('Diameter---',calculateDiameter(radius));
//   return (
//     <div>HighOrderFunctionExampleTwo</div>
//   )
// }

// export default HighOrderFunctionExampleTwo

import React from 'react'

const HighOrderFunctionExampleTwo = () => {
    // Functional Programming Approach for calculating area, circumference, and diameter of the given array.
    const radius = [3,1,2,4];

    const area = (radius) => {
        return Math.PI * radius * radius;
    }

    const circumference = (radius) => {
        return 2 * Math.PI * radius;
    }

    const diameter = (radius) => {
        return 2 * radius;
    }

    const calculate = (radius,logic) => {
        const output = [];
        for (let i = 0; i < radius.length; i++) {
            output.push(logic(radius[i]));
        }
        return output;
    }

    console.log('Area---',calculate(radius,area));
    console.log('Circumference---',calculate(radius,circumference));
    console.log('Diameter---',calculate(radius,diameter));
  return (
    <div>HighOrderFunctionExampleTwo</div>
  )
}

export default HighOrderFunctionExampleTwo