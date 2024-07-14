import React from 'react'
import { FaEarthAsia } from "react-icons/fa6";
import {Link} from "react-router-dom"
import { useCity } from '../context/CityContextProvider';
const Navbar = () => {
  const {updateCity} = useCity();
  return (
    <nav className='flex justify-start px-4 py-4 w-full  max-w-none shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-30 bg-sky-50'>
      <Link to={"/"} className='flex gap-2 items-center' onClick={() => updateCity("")}>
        <FaEarthAsia className='sm:text-3xl text-2xl text-blue-400'/>
        <h1 className='font-bold sm:text-3xl text-2xl '>Weather<span className='text-blue-400 '>App</span></h1>
      </Link>

    </nav>
  )
}

export default Navbar