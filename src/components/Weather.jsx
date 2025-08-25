import React, { useEffect, useState } from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import humidity_icon from '../assets/humidity.png'
import wind_icon from '../assets/wind.png' 

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('New Delhi');

  const search = async () => {
    try {
      const apiKey = import.meta.env.VITE_APP_ID;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
      const response = await fetch(url);  
      const data = await response.json();
      console.log(data);

      setWeatherData({
        humidity: data.main.humidity,
        temperature: Math.floor(data.main.temp - 273.15),
        wind: data.wind.speed,
        location: data.name,
        icon: data.weather[0].icon,   // ✅ weather icon
      });
    } catch (error) {
      console.log(`Problem: ${error}`);
    }
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <div className="weather">
      <div className="search-bar">
        <input 
          value={city} 
          type="text" 
          placeholder="Search" 
          onChange={e => setCity(e.target.value)} 
        />
        <img src={search_icon} alt="search" onClick={search} />
      </div>

      {weatherData && (
        <>
          <img 
            src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
            alt="weather icon"
            className="weather-icon"
          />
          <p className="temperature">{weatherData.temperature}°C</p>
          <p className="location">{weatherData.location}</p>

          <div className="weather-data">
            <div className="col"> 
              <img src={humidity_icon} alt="humidity" className="weather-icon"/>
              <div>
                <p>Humidity</p>
                <p>{weatherData.humidity}%</p>
              </div>
            </div>
            <div className="col"> 
              <img src={wind_icon} alt="wind" className="weather-icon"/>
              <div>
                <p>Wind Speed</p>
                <p>{weatherData.wind} Km/hr</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Weather
