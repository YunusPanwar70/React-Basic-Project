import React, { useState } from 'react';

function HandleCalculator() {
  const [inputValue, setInputValue] = useState('0');

  function isArithmeticSymbol(symbol) {
    return ['+', '-', '*', '/', '%', '.'].includes(symbol);
  }

  function handleButtons(buttonText) {
    let currentValue = inputValue;

    switch (buttonText) {
      case 'AC':
        currentValue = '0';
        break;

      case 'C':
        currentValue = currentValue.length === 1 ? '0' : currentValue.slice(0, -1);
        break;

      case '=':
        try {
          currentValue = eval(currentValue).toString();
        } catch (error) {
          currentValue = 'Error';
        }
        break;

      default:
        const lastChar = currentValue[currentValue.length - 1];
        if (isArithmeticSymbol(lastChar) && isArithmeticSymbol(buttonText)) {
          currentValue = currentValue.slice(0, -1) + buttonText;
        } else {
          if (currentValue === '0' && !isArithmeticSymbol(buttonText)) {
            currentValue = buttonText;
          } else {
            currentValue += buttonText;
          }
        }
        break;
    }

    setInputValue(currentValue);
  }

  return (
    <div className="container">
      <div className="input-section">
        <input type="text" className="inputBox" value={inputValue} readOnly />
      </div>

      <div className="all-buttons">
        {['AC', 'C', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '00', '.', '0', '='].map(function (btn) {
          return (
            <button
              key={btn}
              className={['AC', 'C', '%', '/', '*', '-', '+', '='].includes(btn) ? 'btnorange' : ''}
              onClick={function () {
                handleButtons(btn);
              }}
            >
              {btn}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default HandleCalculator;