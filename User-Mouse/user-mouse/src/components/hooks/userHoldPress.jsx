import { useRef } from 'react';

export function useHoldPress(callback, delay = 500) {
  const timerRef = useRef(null);
  const isHeldRef = useRef(false);
  
  const handleMouseDown = () => {
    isHeldRef.current = false;
    timerRef.current = setTimeout(() => {
      isHeldRef.current = true;
      callback(true); // show popup
    }, delay);
  };

  const clearHold = () => {
    clearTimeout(timerRef.current);
    if (isHeldRef.current) {
      callback(false); // hide popup
    }
  };

  return {
    onMouseDown: handleMouseDown,
    onMouseUp: clearHold,
    onMouseLeave: clearHold,
  };
}
