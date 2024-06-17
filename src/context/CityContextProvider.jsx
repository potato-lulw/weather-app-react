import React, { createContext, useContext, useState } from 'react';


const CityContext = createContext();

export const useCity = () => {
  return useContext(CityContext);
};

export const CityProvider = ({ children }) => {
  const [city, setCity] = useState(''); 

  const changeCity = (newCity) => {
    setCity(newCity);
  };

  return (
    <CityContext.Provider value={{ city, changeCity }}>
      {children}
    </CityContext.Provider>
  );
};


