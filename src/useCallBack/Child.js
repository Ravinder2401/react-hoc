import React,{memo} from 'react'

const Child = ({countTwo}) => {
    console.log('child component called');
  return (
    <div>
        <div className='container m-4'>
            <h5>Child Counter {countTwo}</h5>            
        </div>
    </div>
  )
}

export default memo(Child)