import React from 'react';

import { IconProps } from '../common/Icon';

const Back = ({ color, size }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="23" viewBox="0 0 35 23">
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#3C4E6C"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      >
        <path
          d="M-4.16 4.755L4.755 13.67 13.67 4.755"
          transform="translate(2 2) rotate(90 4.755 9.212)"
        />
        <path d="M0.297 9.212L30.297 9.052" transform="translate(2 2)" />
      </g>
    </svg>
  );
};

export default Back;
