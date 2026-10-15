import React from 'react'
import Lottery from './Lottery'
import Ticket from './Ticket'

const LotteryGame = () => {
  return (
    <div>
        <h1 style={{textAlign:'center',fontWeight:'550',fontSize:'50px',fontStyle:'italic',color:'aliceblue',backgroundColor:'rgb(12, 70, 84)',width:'100%',margin:'0px'}}>Lottery Game</h1>
    <div style={{display:'flex',flexDirection:'column',alignItems:'center', border:'2px solid rgb(12, 70, 84)', borderRadius:'20px', width:'550px', height:'250px', margin:'90px 0 0 500px'}}>
        <Lottery/>
        <Ticket/>
    </div>
    </div>
  )
}

export default LotteryGame