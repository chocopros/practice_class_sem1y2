import { useState } from 'react'
import Card_count from './assets/components/Card_count'//Import Card
import Card_led from './assets/components/Card_led'

function App() {

  return (
    <div className="container">
      <Card_count />
      <Card_led />

    </div>
  )
}

export default App
