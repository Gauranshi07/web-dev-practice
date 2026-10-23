import React from 'react'
import { getTicket, sum} from './helper'
import {useState} from 'react'
import Ticket from './Ticket'
import Button from './Button'

const Lottery = ({n , winCondition}) => {
    
  let [ticket,setTicket] = useState(getTicket(n))
  let isWinning= winCondition(ticket);

    let buyTicket =()=>{
      setTicket(getTicket(3))
    }
    
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center' , justifyContent:'center' }}>
      <h1 style={{textAlign:'center',fontWeight:'550',fontSize:'50px',fontStyle:'italic',color:'aliceblue',backgroundColor:'rgb(12, 70, 84)',width:'100%',margin:'0px'}}>Lottery Game</h1>

      <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center', border:'2px solid rgb(12, 70, 84)', borderRadius:'20px', width:'550px', minHeight:'185px', marginTop:'170px'}}>
      <Ticket ticket={ticket}/>
      <Button action={buyTicket} />
      <h1 style={{textAlign:'center',color:'rgb(5, 37, 45)'}}>
        {isWinning && "Congratulations you win"}
      </h1>
      </div>
    </div>
  )
}

export default Lottery