import React, { useEffect, useState } from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import drizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png' 
const Weather = () => {
    const [weatherData, setWeatherData] = React.useState(false);
    const [city, setCity] = React.useState('New Delhi');

    const search = async ()=> {
        console.log(city)
        try {
        const apiKey = import.meta.env.VITE_APP_ID;
        const url = `http://pro.openweathermap.org/data/2.5/weather?q=${city}&APPID=${import.meta.env.VITE_APP_ID}`;

        const response = await fetch(url);  
        const data = await response.json();
        console.log(data);

        setWeatherData({
            humidity: data.main.humidity,
            temperature: Math.floor(data.main.temp- 273.15),
            wind: data.wind.speed,
            location: data.name,
           // icon
        })
        }
    
        catch (error) {

            console.log(`test 1 problem ${error}`)
            
        }
    }

    useEffect(() => {
        search('New York');
    },[])
    
    return (
        <div className='weather'>
            <div className="search-bar">
            <input value={city} type="text" placeholder='Search' onChange={e=>setCity(e.target.value)}/>
            <img src={search_icon} alt="" onClick={search} />
            </div>
            <img src={clear_icon} alt="" className='weather-icon'/>
            <p className='temperature'>{weatherData.temperature}°C</p>
            <p className='location'>{city}</p>
            <div className='weather-data'>
                <div className='col'> 
                    <img src={humidity_icon} alt="" className='weather-icon'/>
                    <div>
                        <p>Humidity</p>
                        <p>{weatherData.temperature}</p>
                    </div>
                </div>
                <div className='col'> 
                    <img src={wind_icon} alt="" className='weather-icon'/>
                    <div>
                        <p>Wind Speed</p>
                        <p>{weatherData.wind} Km/hr</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather
