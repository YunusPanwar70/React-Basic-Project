import React from 'react';
import { useState } from 'react';

function CountComponent() {
    const [count, setCount] = useState(12);
    return (
        <div>
            <p>Count Component - {count}</p>
            <button onClick={() => { setCount(count + 1); }}>Increment</button>
        </div>
    );
}

export default CountComponent;