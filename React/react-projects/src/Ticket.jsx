import TicketNum from './TicketNum'

const Ticket = ({ticket}) => {

  return (
    <div>
      <h1>Lottery: {
        ticket.map((num,idx)=>(
          <TicketNum num={num} key={idx}/>
        ))
      }</h1>
    </div>
  )
} 

export default Ticket