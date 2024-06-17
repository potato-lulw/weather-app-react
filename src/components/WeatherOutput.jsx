import React, { useEffect, useState } from "react";
import { useCity } from "../context/CityContextProvider";

const WeatherOutput = () => {
  const { city } = useCity();
  const [latLon, setLatLon] = useState(null);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    const fetchGeoData = async () => {
      console.log("Fetching geo data");
      try {
        const response = await fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`
        );
        const data = await response.json();
        if (data.length > 0) {
          const { lat, lon } = data[0];
          setLatLon({ lat, lon });
          setError(null);
        } else {
          setError('No data found');
          setLatLon(null);
        }
        console.log(data);
      } catch (err) {
        setError('Failed to fetch data');
        setLatLon(null);
      }
    };

    if (city && apiKey) {
      fetchGeoData();
    }
  }, [city, apiKey]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!latLon) return;

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latLon.lat}&lon=${latLon.lon}&appid=${apiKey}`
        );
        const data = await response.json();
        setWeatherData(data);
        setError(null);
        console.log(data);
      } catch (err) {
        setError('Failed to fetch weather data');
        setWeatherData(null);
        console.log(err);
      }
    };

    if (latLon) {
      fetchWeatherData();
    }
  }, [latLon, apiKey]);

  return (
    <div className="bg-white mt-4 w-[80vw] flex justify-center items-center p-4">
      <div>
        <h2 className="text-2xl">
          Showing details for
          <span className="text-sky-700 font-medium">&nbsp;{city}</span>
        </h2>
        {error && <p className="text-red-500">{error}</p>}
        {latLon && (
          <div>
            <p>Latitude: {latLon.lat}</p>
            <p>Longitude: {latLon.lon}</p>
          </div>
        )}
        {weatherData && (
          <div>
            <p>Temperature: {weatherData.main.temp}</p>
            <p>Weather: {weatherData.weather[0].description}</p>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherOutput;
