import React from 'react'
import {checkWin} from './helper'

const Lottery = ({ticket}) => {
    
    let isWinning=(checkWin(ticket))===15;
    
  return (
    <div>
        <h1 style={{textAlign:'center'}}> 
          {isWinning && "Congratulations you win"}
        </h1>
        <h1>Lottery Ticket = {ticket}</h1>
    </div>
  )
}

export default Lottery