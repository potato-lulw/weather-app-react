import React, { Suspense, useEffect, useState } from "react";
import { useCity } from "../context/CityContextProvider";
import GeoInfoCard from "./GeoInfoCard";
import WeatherInfoCard from "./WeatherInfoCard";
import Loading from "./Loading";
import Error from "./error";

const WeatherOutput = () => {
  const { city } = useCity();
  const [latLon, setLatLon] = useState(null);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  useEffect(() => {
    console.log("Hello");
    const fetchGeoData = async () => {
      console.log("Fetching geo data");
      try {
        const response = await fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`
        );
        const data = await response.json();
        if (data.length > 0) {
          const { lat, lon, country, state } = data[0];
          setLatLon({ lat, lon });
          setCountry(country);
          setState(state);
          setError(null);
        } else {
          setError("No data found");
          setLatLon(null);
        }
        console.log(data);
      } catch (err) {
        setError("Failed to fetch data");
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
        setError("Failed to fetch weather data");
        setWeatherData(null);
        console.log(err);
      }
    };

    if (latLon) {
      fetchWeatherData();
    }
  }, [latLon, apiKey]);

  return (
    <div className=" mt-4 md:w-fit w-[95vw] flex justify-center items-center  ">
      <div className="w-full">
        <h2 className="text-2xl text-center">
          Weather in
          <span className="text-sky-700 font-medium">&nbsp;{city}</span>
        </h2>
        {error && <Error/>}
        {/* todo: make an error card */}

        <div className="flex justify-between w-full flex-col md:flex-row gap-2  items-center my-2">
          <Suspense fallback={<Loading type={"spin"} color={"#bae6fd"}/>}>
            {!error && weatherData && <WeatherInfoCard data={weatherData} />}
          </Suspense>
          <Suspense fallback={<Loading type={"spin"} color={"#bae6fd"} />}>
            {!error && latLon && (
              <GeoInfoCard latLon={latLon} country={country} state={state} />
            )}
          </Suspense>
        </div>
        {/* <Loading type={"spin"} color={"#bae6fd"} /> */}
      </div>
    </div>
  );
};

export default WeatherOutput;
