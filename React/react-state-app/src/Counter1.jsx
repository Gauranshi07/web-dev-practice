import React from 'react'
import {useState,useEffect} from 'react'

const Counter1 = () => {
    let [countx,setCountx]=useState(0);
    let [county,setCounty]=useState(0);

    function inrCountx(){
        setCountx(currCount=>currCount+1);
    }

    function inrCounty(){
        setCounty(currCount=>currCount+1);
    }
    useEffect(function printCount(){
        console.log("Countx has increased by 1");
    },[countx])

    useEffect(function printSomething(){
        console.log("Both count can increase by 1");
    },[countx,county])

    useEffect(function pageLoad(){
        console.log("Welcome to our page");
    },[])

  return (
    <div>
        <h1>Countx={countx}</h1>
        <button onClick={inrCountx}>+1</button>

        <h1>County={county}</h1>
        <button onClick={inrCounty}>+1</button>
    </div>
  )
}

export default Counter1
