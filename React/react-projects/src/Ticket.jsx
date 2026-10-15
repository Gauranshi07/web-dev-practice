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
    <div style={{display:'flex',flexDirection:'column',alignItems:'center', border:'2px solid rgb(12, 70, 84)', borderRadius:'20px', width:'550px', height:'250px', margin:'90px 0 0 500px'}}>
        <h1>Lottery</h1>
        <h1>Lottery Ticket = {ticket}</h1>
        <button onClick={getTicket} style={{width:'170px',height:'40px',fontSize:'20px',border:'1px solid rgb(12, 70, 84)',borderRadius:'10px',backgroundColor:'rgb(12, 70, 84)',color:'aliceblue',fontWeight:'550'}}>Get New Ticket</button>
    </div>
  )
} 

export default Ticket