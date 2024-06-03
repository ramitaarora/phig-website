import { useEffect, useState } from 'react';

export default function WeatherIcon() {
    const [temp, setTemp] = useState();
    const [icon, setIcon] = useState('');

    const formatTemp = (temperature) => {
        return String(Math.trunc((temperature - 273.15) * (9 / 5) + 32));
    }

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.9382521&lon=-122.0681807&appid=${process.env.REACT_APP_WEATHER_API_KEY}`, {
            method: 'GET', headers: { accept: 'application/json' }
        })
            .then(response => response.json())
            .then(response => {
                // console.log(response);
                setTemp(response.main.temp);
                setIcon(`https://openweathermap.org/img/wn/${response.weather[0].icon}.png`)
            })
            .catch(err => console.error(err));
    }, [])

    return (
        <div id="weather-icon">
            <img src={icon} alt="weather-icon" height="50px" width="50px" />
            <p>{temp ? `${formatTemp(temp)}°F` : null}</p>
        </div>
    )
}