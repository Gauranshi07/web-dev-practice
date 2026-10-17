import React from 'react'
import {useState} from 'react'
import Lottery from './Lottery'
import Ticket from './Ticket'

const LotteryGame = () => {
    const [ticket,setTicket]=useState(0);

  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center' , justifyContent:'center' }}>
        <h1 style={{textAlign:'center',fontWeight:'550',fontSize:'50px',fontStyle:'italic',color:'aliceblue',backgroundColor:'rgb(12, 70, 84)',width:'100%',margin:'0px'}}>Lottery Game</h1>
    <div style={{display:'flex',flexDirection:'column',alignItems:'center', border:'2px solid rgb(12, 70, 84)', borderRadius:'20px', width:'550px', minHeight:'185px', marginTop:'170px'}}>
        <Lottery ticket={ticket} />
        <Ticket setTicket={setTicket} ticket={ticket}/>
    </div>
    </div>
  )
}

export default LotteryGame