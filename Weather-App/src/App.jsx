import WeatherComponent from "./WeatherComponent";
import logo from "./assets/logo.png";
import "./App.css";

function App() {
  return (
    <>
      <h1>
        <img className="logo" src={logo}></img>Weather Forecast
      </h1>
      <WeatherComponent />
      <div className="input-container">
        <input placeholder="Enter your city name"></input>
        <span id="send" className="material-symbols-outlined">
          send
        </span>
      </div>
    </>
  );
}

export default App;
