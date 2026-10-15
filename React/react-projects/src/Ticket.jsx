import React from 'react'
import {useState} from 'react'

const Ticket = () => {
    const [ticket,setTicket]=useState(0);

    function getTicket(){
        let max=1000;
        let min=100;
        setTicket(
            Math.floor(Math.random()*(max-min+1))+min
        )
    }
  return (
    <div>
        <h1>Lottery Ticket = {ticket}</h1>
        <button onClick={getTicket} style={{width:'170px',height:'40px',fontSize:'20px',border:'1px solid rgb(12, 70, 84)',borderRadius:'10px',backgroundColor:'rgb(12, 70, 84)',color:'aliceblue',fontWeight:'550',marginLeft:'50px'}}>Get New Ticket</button>
    </div>
  )
} 

export default Ticket