import React from 'react'
import { useCity } from '../context/CityContextProvider'
import WeatherOutput from '../components/WeatherOutput';
import CityInput from '../components/CityInput';

const Details = () => {
    const {city} = useCity();
  return (
    <div className=' flex flex-col items-center h-screen'>
        <CityInput/>
        {city && <WeatherOutput/>}
    </div>
  )
}

export default Details