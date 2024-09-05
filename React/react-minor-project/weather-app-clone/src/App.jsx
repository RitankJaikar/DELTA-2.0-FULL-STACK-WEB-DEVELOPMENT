import SearchCity from "./SearchCity";
import WeatherInfo from "./WeatherInfo";
import { useState } from "react";

function App() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 310.2,
    humidity: 89,
    maxTemp: 303.2,
    minTemp: 303.2,
    temp: 303.2,
    weather: "mist"
  });

  return (
    <div style={{textAlign: "center"}}>
      <h1>Weather App</h1>
      <SearchCity setWeatherInfo={setWeatherInfo}/>
      <br />
      <WeatherInfo weatherInfo={weatherInfo}/>
      <br /><br />
    </div>
  )
}

export default App