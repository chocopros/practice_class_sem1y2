//import { useState } from 'react'
import Card_count from './assets/components/Card_count'//Import Card
import Card_led from './assets/components/Card_led'
import Card_Pass from './assets/components/Card_Pass'

function App() {

  return (
    <div className="container">
      <Card_count />
      <Card_led />
      <Card_Pass/>

    </div>
  )
}

export default App
