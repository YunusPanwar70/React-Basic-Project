import React from 'react';

function CharacterCoverterUI() {
    return (
        <main className="container">
            <h1>Type In Your Words.</h1>
            <input type="text" className="input" />
            <div className="buttons">
                <button className="upperCase btn">UpperCase</button>
                <button className="lowerCase btn">LowerCase</button>
                <button className="capital btn">Capital</button>
                <button className="bold btn">Bold</button>
                <button className="italic btn">Italic</button>
                <button className="underLine btn">UnderLine</button>
            </div>
            <div className="output">

            </div>
        </main>
    );
}

export default CharacterCoverterUI;