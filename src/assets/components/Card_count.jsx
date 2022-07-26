import React from 'react'
import { useState } from 'react'


const Card_count = () => {

    const [count, setCount] = useState(0)

    const handlePlus = () => {setCount(count +1)}
    const handleRes = () => {setCount(state => state-1)}
    const handleReset = () => {setCount(0)}

  return (
    
      <div className="card">
          <h2>{count}</h2>
          <div className="btn-options">
              <button onClick={handlePlus}>+</button>
              <button onClick={handleRes}>-</button>
              <button onClick={handleReset}>Reset</button>
          </div>
      </div>
  
  )
}

export default Card_count