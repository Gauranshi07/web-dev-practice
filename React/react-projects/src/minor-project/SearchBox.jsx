import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import {useState} from 'react'

const SearchBox = () => {
  let [city,setCity]=useState("")
  const API_URL ="https://api.openweathermap.org/data/2.5/weather"
  const API_KEY = "ef9d82f554e571c5277719eace530eb3"

  async function getWeatherInfo(){
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonRes = await response.json();
    console.log(jsonRes)
    let result = {
      temperature : jsonRes.main.temp,
      tempMin : jsonRes.main.temp_min,
      tempMax : jsonRes.main.temp_max,
      feelsLike : jsonRes.main.feels_like,
      humidity: jsonRes.main.humidity,
      pressure: jsonRes.main.pressure,
      description : jsonRes.weather[0].description
    }
    console.log(result)
  }

  function handleInput(evt){
    setCity(evt.target.value);
  }

  function handleSubmit(evt){
    evt.preventDefault();
    console.log(city)
    setCity("");
    getWeatherInfo();
  }

  return (
    <div className="SearchBox">
      <h1>Search for the Weather</h1>
        <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleInput}/>
            <Button variant="contained" type="submit">Search</Button>
        </form>
    </div>
  )
}

export default SearchBox