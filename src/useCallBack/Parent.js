import React,{memo} from 'react'
import Child from './Child';

const Parent = ({countOne}) => {
  console.log('parent component called');
  return (
    <div>
      <div className='container m-4'>
          <h5>Parent Counter {countOne}</h5>
      </div>
    </div>
  )
}

export default memo(Parent)