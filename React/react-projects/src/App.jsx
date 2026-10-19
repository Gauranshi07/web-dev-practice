import React from 'react'
import Lottery from './Lottery'

const App = () => {
  return (
    <div>
      <Lottery n={3} winningSum={15}/>
    </div>
  )
}

export default App