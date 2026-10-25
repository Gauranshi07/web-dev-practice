import React from 'react'
import {useState,useEffect} from 'react'

const Joker = () => {
    let [joke,setJoke]=useState({});
    const URL="https://official-joke-api.appspot.com/random_joke";

    async function getNewJoke() {
        let response= await fetch(URL);
        let data=await response.json();
        console.log(data);
        setJoke({setup: data.setup, punchline: data.punchline})
    }

    useEffect(()=>{
        async function getFirstJoke(){
        let response= await fetch(URL);
        let data=await response.json();
        console.log(data);
        setJoke({setup: data.setup, punchline: data.punchline})
        }
        getFirstJoke();
    },[])

  return (
    <>
    <div>Joker!</div>
    <h3>{joke.setup}</h3>
    <h3>-{joke.punchline}</h3>
    <button onClick={getNewJoke}>Get New Jokes</button>
    </>
  )
}

export default Joker