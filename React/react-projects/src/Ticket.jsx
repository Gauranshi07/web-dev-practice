import React from 'react'
import {useState} from 'react'
import {getTicket} from './helper'

const Ticket = ({ticket,setTicket}) => {

    function updateNumber(){
setTicket(getTicket())
}
  return (
    <div>
        <button onClick={updateNumber} style={{width:'170px',height:'40px',fontSize:'20px',border:'1px solid rgb(12, 70, 84)',borderRadius:'10px',backgroundColor:'rgb(12, 70, 84)',color:'aliceblue',fontWeight:'550',marginLeft:'50px'}}>Get New Ticket</button>
    </div>
  )
} 

export default Ticket