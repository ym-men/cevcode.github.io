import React from 'react';

export const Loader = () => {
  return (
    <div className="loader__wrapper">
      <svg
        className="loader__spinner"
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="loader__path"
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
          cx="33"
          cy="33"
          r="30"
        />
      </svg>
    </div>
  );
};

export default Loader;
