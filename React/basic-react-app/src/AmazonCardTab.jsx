import AmazonCards from "./AmazonCards";

const AmazonCardTab = () => {
  return (
    <div style={{display:'flex', flexDirection:'row', justifyContent:'center', gap:'10px',flexWrap:'wrap'}}>
        <AmazonCards title="Logitech MX Master" desc="800 DPI" desc2="5 Programmable Buttons" idx={0}/>
        <AmazonCards title="Apple Pencil (2nd Gen)" desc="Intuitive Torch Surface" desc2="Designed for iPad Pro" idx={1}/>
        <AmazonCards title="Zebronics" desc="Designed for iPad Pro" desc2="Intuitive Torch Surface" idx={2}/>
        <AmazonCards title="Petronics Toad" desc="Wireless Mouse 2.4GHz" desc2="Optical Orientation" idx={3}/>
    </div>
  )
}

export default AmazonCardTab