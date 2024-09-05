import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";

export default function SearchCity({setWeatherInfo}) {
    let [city, setCity] = useState("Mumbai");

    let apiKey = "fa8b6b96a01db77ae3d253c0e1c9b50a";
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    function onChangeSearchBox(event) {
        setCity(event.target.value);
    }

    function handleOnSubmit(event) {
        event.preventDefault();
        fetchWeatherInfo();
    }

    async function fetchWeatherInfo() {
        try{
            let res = await fetch(URL);
            let info = await res.json();
            console.log(info);
            let weatherInfo = {
                city: info.name,
                weather: info.weather[0].description,
                temp: info.main.temp,
                humidity: info.main.humidity,
                minTemp: info.main.temp_min,
                maxTemp: info.main.temp_max,
                feelsLike: info.main.feels_like
            }
            console.log(weatherInfo);
            setWeatherInfo(weatherInfo);
        }
        catch(err) {
            console.log(err);
            setWeatherInfo(null);
        }
    }

    useEffect(() => {
        fetchWeatherInfo();
        setCity("");
    } , []);

    return (
        <div>
            <h3>Search For Weather</h3>
            <form onSubmit={handleOnSubmit}>
                <TextField id="outlined-basic" label="City Name" variant="outlined" value={city} onChange={onChangeSearchBox} required/>
                <br /><br />
                <Button variant="contained" type='Submit'>Search</Button>
            </form>
        </div>
    );
}