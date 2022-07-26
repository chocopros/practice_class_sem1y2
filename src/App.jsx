import { useState } from 'react'
import Card_count from './assets/components/Card_count'//Import Card

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Card_count />
      <Card_count />

    </div>
  )
}

export default App
