import React, { useEffect, useState } from 'react'
import '../Styles/weather.css'
import Card from './Card'

const Weather = () => {
  const [weatherData, setWeatherData] = useState("Ramnagar");
  const [tempInfo, setTempInfo] = useState({});


  const getWeatherData = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherData}&units=metric&appid=167d7a33bcef558be744e07968b3505e`;
      let res = await fetch(url);
      res = await res.json();
      
      const {humidity, pressure, temp} = res.main;
      const {name} = res;
      const {country, sunset} = res.sys;
      const {speed} = res.wind;
      const {main:weatherMood} = res.weather[0];

      const weatherInfo = {
        temp,
        humidity,
        pressure,
        name,
        country,
        sunset,
        speed,
        weatherMood,
      };
      setTempInfo(weatherInfo);
      setWeatherData("")
    } catch (error) {
        console.log(error);
    }

  };

  useEffect(() => {
    getWeatherData();
  },[]);
  return (
    <div>
      <div className='container'>
        <div className='content'>
          <input type="search"
          placeholder='search...'
          autoFocus
          value={weatherData}
          onChange={(e)=>setWeatherData(e.target.value)}
          />
        </div>
      
        <div>
          <button onClick={getWeatherData}>Search</button>
        </div>
      </div>
      <Card data={tempInfo}/>
    </div>
  )
}

export default Weather