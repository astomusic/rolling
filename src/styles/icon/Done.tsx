import React from 'react';

import { IconProps } from '../common/Icon';

const Done = ({ color, size }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14">
      <path
        fill="none"
        fillRule="evenodd"
        stroke="#1B7FCB"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M312 212.175L316.148 218 325 207"
        transform="translate(-311 -206)"
      />
    </svg>
  );
};

export default Done;
