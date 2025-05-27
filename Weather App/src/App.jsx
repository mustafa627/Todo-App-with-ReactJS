import styles from "./App.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const apiKey = `67c7a7f8dc23aea744624e4d5f7f0cf2`;
  const [cityName, setCityName] = useState("lahore");
  const [apiData, setApiData] = useState(null);
const [userLocation, setUserLocation] = useState("")

 useEffect(() => {
    getUserLocation()
    getData()
 }, [])

  const getData = async () => {
    try {
      console.log("Fetching data...");
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );
      console.log("Data fetched successfully:", response.data);
      setApiData(response.data);
      console.log("city name", cityName);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
   };

  const getUserLocation = () => {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }

    function success(position) {
      console.log("success", position)
      // fetchDataByLocation(position)
      setUserLocation(position)
    }

    function error() {
      console.log("error",)
      getData()

    }



  }


  useEffect(() => {
    if (userLocation) {
      getByLocationWeather()
    }
  }, [userLocation])

  const getByLocationWeather = async () => {
    try {
      const {latitude, longitude} = userLocation.coords
      console.log("Fetching data...");
      const response = await axios.get(
        ` https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
      );
      console.log("Data fetched successfully:", response.data);
      setApiData(response.data);
      console.log("city name", cityName);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(":event", event);
    getData()
  };

  return (
    <>
      <div className={styles.container}>
        <div>
          <h1>Weather App !</h1>
          <br />
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter City "
              onChange={(e) => {
                setCityName(e.target.value);
              }}
            />
          </form>
          <button>Search</button>
        </div>{" "}
        <br />
        <div className={styles.app}>
          {apiData ? (
            <div className={styles.weatherInfo}>
              <h2>City Name : {apiData.name}</h2>
              <span className="styles.temp">
                <img
                  src={`https://openweathermap.org/img/wn/${apiData.weather[0]?.icon}@2x.png`}
                  alt="weather icon"
                />
                <p>Temperature: {apiData.main.temp} °C</p>
              </span>
              <p>Weather: {apiData.weather[0].description}</p>
              <p>Humidity: {apiData.main.humidity}%</p>
              <p>Wind Speed: {apiData.wind.speed} m/s</p>
            </div>
          ) : (
            <p>No data available. Please enter a city name.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
