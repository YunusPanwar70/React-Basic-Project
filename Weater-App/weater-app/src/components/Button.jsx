import React from 'react';

function Button(props) {
    return (
        <button className='btn' onClick={props.onClick}></button>
    );
}
export default Button;