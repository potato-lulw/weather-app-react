import React from 'react'
import CityInput from '../components/CityInput'
import Hero from '../components/Hero'
import WeatherOutput from '../components/WeatherOutput'
import { useCity } from '../context/CityContextProvider'

const Home = () => {
    const {city} = useCity();
  return (
    <div className=' min-h-[90vh] h-screen w-screen flex flex-col justify-start items-center min-h relative overflow-hidden'>
        
        <Hero/>
        <CityInput/>
        {city !== "" && <WeatherOutput/>}
       
    </div>
  )
}

export default Home