import React from 'react'
import { useState } from 'react'
const Card_Pass = () => {

  const [valueText, setvalueText] = useState('password')

  const toggleStateValue= () => {
    if (valueText==='password'){
        setvalueText('text')
    }else{
        setvalueText('password')
    }

  }

  return (
    <div className='card_passw'>
        <label htmlFor="pass">Contraseña</label>
        <div className="passw">
            <input className='passw_input' type={valueText}/>
            <button onClick={toggleStateValue} className='btn-options2'> <i className='bx bxs-low-vision'></i> </button>
        </div>
    </div>
  )
}

export default Card_Pass