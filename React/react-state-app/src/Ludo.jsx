//States using objects

import './Ludo.css'
import {useState} from 'react'

const Ludo = () => {
    const [count,setCount] = useState({blue:0,red:0,yellow:0,green:0});
    const [arr,setArr]=useState([""]);
    
    function updateBlue(){
        setCount((prevCount)=>{
            return { ...prevCount, blue: prevCount.blue+1}
    })
    setArr((prevArr)=>{
        return [...prevArr, "Blue Moves Updated"]
    })
}
    function updateRed(){
        setCount((prevCount)=>{
            return { ...prevCount, red: prevCount.red+1}
    })}
    function updateYellow(){
        setCount((prevCount)=>{
            return { ...prevCount, yellow: prevCount.yellow+1}
    })}
    function updateGreen(){
        setCount((prevCount)=>{
            return { ...prevCount, green: prevCount.green+1}
    })
}
  return (
    <div className="Ludo">
        <div className="ludo1">
        <div>
            <h1>Blue Moves: {count.blue}</h1>
            <h1>Array: {arr}</h1>
            <button onClick={updateBlue} className="blue">+1</button>
        </div>
        <div >
            <h1>Red Moves: {count.red}</h1>
            <button onClick={updateRed} className="red">+1</button>
        </div>
        </div>
        <div className="ludo2">
        <div >
            <h1>Green Moves: {count.green}</h1>
            <button onClick={updateGreen} className="green">+1</button>
        </div>
        <div >
            <h1>Yellow Moves: {count.yellow}</h1>
            <button onClick={updateYellow} className="yellow">+1</button>
        </div>
        </div>
    </div>
  )
}

export default Ludo