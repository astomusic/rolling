import * as React from 'react';
import { IconProps } from '../common/Icon';

const RightBracket = ({ color, size }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="11" viewBox="0 0 9 11">
      <path
        fill="none"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 10l7-4.5L1 1"
      />
    </svg>
  );
};

export default RightBracket;
