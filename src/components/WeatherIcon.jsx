import React from 'react';

const WeatherIcon = ({ iconCode, description }) => {
    console.log(iconCode, description);
    
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  
  return (
    <div className='flex mt-2 gap-2 items-center justify-center w-fit '>
      <img src={iconUrl} alt={description} style={{ width: '35px', height: '35px' }} className='bg-blue-500 rounded-full'/>
      <p className='capitalize'>{description}</p>
    </div>
  );
};

export default WeatherIcon;
