import { useEffect, useState } from "react";
import wind from "./assets/wind.svg";
import humidity from "./assets/humidity.svg";
import uv from "./assets/uv.svg";
import visible from "./assets/visible.svg";
import pressure from "./assets/pressure.svg";
import feels from "./assets/feels.svg";
import axios from "axios";

const API_KEY = import.meta.env.VITE_APIKEY;

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const inputElement = document.querySelector("input");
    const sendButton = document.querySelector("#send");
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${inputElement.value}`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    sendButton.onclick = function () {
      fetchData();
      inputElement.value = "";
    };
  }, []);

  if (!weatherData) {
    return <div>Please enter your city below</div>;
  }

  return (
    <div className="mainData">
      <div className="mainData-section">
        <h2>{weatherData.location.name}</h2>
        <div className="mainData-Weather-Details">
          <img
            className="condition-icon"
            src={weatherData.current.condition.icon}
          ></img>
          <div className="temp-Details">
            <p className="temperature">{weatherData.current.temp_c}°</p>
            <p className="condition">{weatherData.current.condition.text}</p>
          </div>
        </div>
      </div>
      <div className="wind">
        <img src={feels}></img>
        <h2 className="wind-heading">Feels like</h2>
        <p>{weatherData.current.temp_c}°</p>
      </div>
      <div className="wind">
        <img src={wind}></img>
        <h2 className="wind-heading">Wind</h2>
        <p>{weatherData.current.wind_kph} km/h</p>
      </div>
      <div className="wind">
        <img src={humidity}></img>
        <h2 className="wind-heading">Humidity</h2>
        <p>{weatherData.current.humidity}%</p>
      </div>
      <div className="wind">
        <img src={uv}></img>
        <h2 className="wind-heading">UV</h2>
        <p>{weatherData.current.uv}</p>
      </div>
      <div className="wind">
        <img src={visible}></img>
        <h2 className="wind-heading">Visibility</h2>
        <p>{weatherData.current.vis_km} km</p>
      </div>
      <div className="wind">
        <img src={pressure}></img>
        <h2 className="wind-heading">Air pressure</h2>
        <p>{weatherData.current.pressure_mb} hpa</p>
      </div>
    </div>
  );
};

export default WeatherComponent;
