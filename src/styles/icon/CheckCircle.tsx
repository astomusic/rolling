import React from 'react';

import { IconProps } from '../common/Icon';

const CheckCircle = ({ color, size }: IconProps) => {
  const fillColor = color === '#fff' ? '#FFF' : '#3C4E6C';
  const strokeColor = color === '#fff' ? '#BBC2CD' : '#3C4E6C';
  const pathColor = color === '#fff' ? '#BBC2CD' : '#FFF';
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39">
      <g fill="none" fillRule="evenodd" strokeWidth="3">
        <circle cx="19.5" cy="19.5" r="18" fill={fillColor} stroke={strokeColor} />
        <path
          stroke={pathColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 19.064L17.034 23.814 24.244 14.721"
        />
      </g>
    </svg>
  );
};

export default CheckCircle;
