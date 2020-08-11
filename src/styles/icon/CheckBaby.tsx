import React from 'react';

import { IconProps } from '../common/Icon';

const CheckBaby = ({ color, size }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13">
      <path
        fill="none"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M0 4.343L4.034 9.093 11.244 0"
        transform="translate(2 2)"
      />
    </svg>
  );
};

export default CheckBaby;
