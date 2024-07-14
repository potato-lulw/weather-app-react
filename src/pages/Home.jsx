import React from 'react'
import CityInput from '../components/CityInput'
import Hero from '../components/Hero'
// import WeatherOutput from '../components/WeatherOutput'
import { useCity } from '../context/CityContextProvider'

const Home = () => {
    const {city} = useCity();
  return (
    <div className=' min-h-[100vh]  flex flex-col justify-start items-center  relative overflow-hidden'>
        
        <Hero/>
        <CityInput/>
        {/* {city !== "" && <WeatherOutput/>} */}
       
    </div>
  )
}

export default Home