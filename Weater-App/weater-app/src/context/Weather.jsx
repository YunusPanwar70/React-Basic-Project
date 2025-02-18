import React, { createContext, useContext, useState } from 'react';

const WeatherContext = createContext(null);

export const useWeather = () => {
    return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
    const [data, setData] = useState(null);
    const [searchCity, setSearchCity] = useState(null);

    // const fetchData =()=>{
        
    // }
    return (
        <WeatherContext.Provider value={{ data, searchCity }}>
            {props.childern}
        </WeatherContext.Provider>
    );
};