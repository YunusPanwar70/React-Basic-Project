import React from 'react';

function Header(props) {
    return (
            <h1 className='todo-header'>{props.value}</h1>
    );
}

export default Header;