import React from 'react'
import { useState } from 'react'

const Card_led = () => {

  const [ledOnOff, setledOnOff] = useState('off')

  const toggleChange = () => {
    if (ledOnOff==='on'){
      setledOnOff('off')
    }else{
      setledOnOff('on')
    }
  }

  return (
    <div className='card'>
        <div className={`circle ${ledOnOff}`}></div>
        <button onClick={toggleChange} className='btn-options2'>Power</button>
    </div>
  )
}

export default Card_led