import React from 'react'
import Flag from "react-world-flags"

const GeoInfoCard = ({latLon, country, state}) => {
  return (
    <div className='flex flex-col gap-2 my-2 bg-sky-200 p-5  shadow-[inset_-12px_-8px_40px_#46464620] rounded-md w-full sm:w-auto'>
        <div className='text-lg font-medium bg-sky-100 p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
            <p>Lat <span className='text-sky-700'>{latLon.lat}</span></p>
            <p>Lon <span className='text-sky-700'>{latLon.lon}</span></p>
        </div>
        <div className='text-lg font-medium bg-sky-100 p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] '>
            <p><span className='text-sky-700 '>{state},</span></p>
            <p className='flex '><span className='text-sky-700'></span> <Flag className="w-8" code={country} fallback = {"No flag found"}/></p>
        </div>
    </div>
  )
}

export default GeoInfoCard