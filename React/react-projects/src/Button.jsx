export default function Button({action}){
    return <button onClick={action} style={{width:'170px',height:'40px',fontSize:'20px',border:'1px solid rgb(12, 70, 84)',borderRadius:'10px',backgroundColor:'rgb(12, 70, 84)',color:'aliceblue',fontWeight:'550',marginTop:'15px'}}>Get New Ticket</button>
}