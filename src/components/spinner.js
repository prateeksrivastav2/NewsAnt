import React from 'react'
import loading from './loading.gif'


const spinner=()=>{
    return (
      <div className='text-center' style={{marginTop:'200px'}}>
        <img src={loading} alt="loading" />
      </div>
    )
  
}

export default spinner
