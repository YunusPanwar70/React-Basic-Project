import React, { createContext, useState } from 'react';

const conterContex = createContext(null);

const CounterProvider = (props) => {
    const [count, setCount] = useState(0);
    return (
        <conterContex.Provider value={{ count, setCount }}>
            {props.children}
        </conterContex.Provider>
    );
};
export { conterContex, CounterProvider };