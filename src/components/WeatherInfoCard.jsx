import React from "react";
import WeatherIcon from "./WeatherIcon";
import { IoIosWater } from "react-icons/io";
import { FaWind } from "react-icons/fa6";
import { FaCloud } from "react-icons/fa";
import { BiSolidDownArrowAlt, BiSolidUpArrowAlt } from "react-icons/bi";
const WeatherInfoCard = ({ data }) => {
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  return (
    <div className="bg-sky-200 flex flex-col w-full  p-5 gap-4 rounded-md">
      <div className="text-lg font-medium text-sky-600 p-4 rounded-md text-center flex flex-col items-center">
        <p className="text-6xl relative">
          {(data.main.temp - 273.15).toPrecision(3)} °C <img className="absolute top-[-70%] right-0 w-[75px] h-[75px]" src={iconUrl} alt="WeatherIcon" />
        </p>
        <p className="rounded-full inline-block px-2 mt-2 bg-blue-300 text-sky-700">
          Feels Like: {(data.main.feels_like - 273.15).toPrecision(3)} °C
        </p>

          <WeatherIcon
            iconCode={data.weather[0].icon}
            description={data.weather[0].description}
          />
        <div className="bg-sky-100 flex justify-center mt-8 p-2 w-fit px-10 rounded-full gap-8 ">
          <div className="flex items-center flex-col">
            <IoIosWater className="md:w-[35px] md:h-[35px] w-[25px] h-[25px] "/> 
            <p>{data.main.humidity}%</p>
            <p className="text-sm">Humidity</p>
          </div>
          <div className="flex items-center flex-col">
            <FaWind className="md:w-[35px] md:h-[35px] w-[25px] h-[25px] "/> 
            <p>{data.wind.speed}m/s</p>
            <p className="text-sm">Wind Speed</p>
          </div>
          <div className="flex items-center flex-col">
            <FaCloud className="md:w-[35px] md:h-[35px] w-[25px] h-[25px] "/> 
            <p>{data.clouds.all}%</p>
            <p className="text-sm">Clouds</p>
          </div>
        </div>
        <div className="bg-sky-100 flex justify-center mt-8 p-2 w-fit px-10 rounded-full gap-8 ">
          <div className="flex items-center flex-col">
            <IoIosWater className="md:w-[35px] md:h-[35px] w-[25px] h-[25px] "/> 
            <p>{data.main.pressure}hPa</p>
            <p className="text-sm">Pressure</p>
          </div>
          <div className="flex items-center flex-col">
            <BiSolidDownArrowAlt className="md:w-[35px] md:h-[35px] w-[25px] h-[25px] "/> 
            <p>{(data.main.temp_min-273.15).toPrecision(3)}</p>
            <p className="text-sm">Min Temp</p>
          </div>
          <div className="flex items-center flex-col">
            <BiSolidUpArrowAlt className="md:w-[35px] md:h-[35px] w-[25px] h-[25px] "/> 
            <p>{(data.main.temp_max-273.15).toPrecision(3)}</p>
            <p className="text-sm">Max temp</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default WeatherInfoCard;
