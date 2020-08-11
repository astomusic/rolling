import React from 'react';

import { IconProps } from '../common/Icon';

const Fail = ({ color, size }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14">
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#CB1B36"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path
          d="M3.257 13.45L14.257 2.45M3.257 2.45L14.257 13.45"
          transform="rotate(45 8.707 5.086) rotate(-45 8.757 7.95)"
        />
      </g>
    </svg>
  );
};

export default Fail;
