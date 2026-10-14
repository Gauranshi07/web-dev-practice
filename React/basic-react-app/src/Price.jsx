export default function Price({oldPrice, newPrice}) {
    return(
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent:'center', marginTop:'10px', backgroundColor:'#235b3f',height:'64px',borderRadius:'0px 0px 10px 10px'}}>
        <span style={{ textDecoration: 'line-through', color: '#333', fontSize:'16px' , letterSpacing:'1px' }}>{oldPrice}</span>
        <span style={{ color: '#000', fontSize:'20px' , fontWeight:'bold' }}>{newPrice}</span>
        </div>
    )
}
