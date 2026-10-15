import React from 'react'
import Ticket from './Ticket'

const App = () => {
  return (
    <div>
      <h1 style={{textAlign:'center',fontWeight:'550',fontSize:'50px',fontStyle:'italic',color:'aliceblue',backgroundColor:'rgb(12, 70, 84)',width:'100%',margin:'0px'}}>Lottery Game</h1>
      <Ticket />
    </div>
  )
}

export default App