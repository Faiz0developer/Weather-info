import React, { useEffect, useState } from 'react'
import '../Styles/Card.css'

const Card = ({data}) => {

  const [currentWeather, setCurrentWeather] = useState("");
  const {
    temp,
    humidity,
    pressure,
    name,
    country,
    sunset,
    speed,
    weatherMood,
  } = data;

  useEffect(() => {
    if(weatherMood) {
      switch (weatherMood) {
        case "Clouds":
          setCurrentWeather("wi-day-cloudy");
          break;
        case "Haze":
          setCurrentWeather("wi-fog");
          break;
        case "Clear":
          setCurrentWeather("wi-day-sunny");
          break;
        case "Mist":
          setCurrentWeather("wi-dust");
          break;
      
        default:
          setCurrentWeather("wi-day-sunny");
          break;
      }
    }

  },[weatherMood])

  
  // converting to time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;


  return (
    <article className='article'>
      <div className='iTag'>
        <i className={`wi ${currentWeather}`}></i>
      </div>


      <div className='weather-data'>
        <div className='weather-data-temp'>
          <span>{temp}&deg;</span>
        </div>
        <div className='weather-data-city'>
          <div className='weather1'>{weatherMood}</div>
          <div>{name }, {country}</div>
        </div>
        <div className='weather-data-date'>
          <div className='weather-data-date1'>
          {new Date().toLocaleString()}
          </div>
        </div>
      </div>


      <div>
          <div className='weather-condition'>
            <div className='weather-condition-sun'>
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className='para'>
                {timeStr} PM <br/>
                Sunset
              </p>
            </div>
            
            <div className='weather-condition-sun'>
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className='para'>
                {humidity} <br/>
                Humidity
              </p>
            </div>
            
            <div className='weather-condition-sun'>
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className='para'>
                {pressure} <br/>
                Pressure
              </p>
            </div>
            
            
            <div className='weather-condition-sun'>
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className='para'>
                {speed} <br/>
                Speed
              </p>
            </div>
          </div>
      </div>
      


      </article>

  )
}

export default Card