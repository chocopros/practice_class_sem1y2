import React, { useEffect } from 'react'
import { useState } from 'react'

const Card_Pass = () => {

  const colors = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871"];

  const [valueText, setvalueText] = useState('password')

  const toggleStateValue= () => {
    if (valueText==='password'){
        setvalueText('text')
    }else{
        setvalueText('password')
    }

  }
  const getRandomElement = arr  => {
    const indexRamdon= Math.floor(Math.random ()* arr.length)
    return arr[indexRamdon]
  }

  let ramdonColor = getRandomElement(colors)
  const [color, setColor] = useState(ramdonColor)

  useEffect(() => {
    const randomColor = getRandomElement(colors)
    setColor(randomColor)
  }, [valueText])




  return (
    <div className='card_passw' style={{backgroundColor:color}}>
        <label htmlFor="pass">Contraseña</label>
        <div className="passw">
            <input className='passw_input' type={valueText}/>
            <button onClick={toggleStateValue} className='btn-options2'> <i className='bx bxs-low-vision'></i> </button>
        </div>
    </div>
  )
}

export default Card_Pass