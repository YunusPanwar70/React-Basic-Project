import React from 'react';
import { useWeather } from '../context/Weather';

function Input(props) {
    const Weather = useWeather();
    return (
        <input className='input-field' type="text" placeholder='Search here' value={Weather.searchCity} onChange={(e) => Weather.setSearchCity(e.target.value)} />
    );
}
export default Input; 