import React from 'react';

const BOUNCE_RATE = 1000;

export const useDebounce = delay => {
  const busy = React.useRef(false);
  const debounce = callback => {
    setTimeout(() => {
      busy.current = false;
    }, delay || BOUNCE_RATE);

    if (!busy.current) {
      busy.current = true;
      callback();
    }
  };

  return {debounce};
};
