import * as React from 'react';
import { IconProps } from '../common/Icon';

const RightBracket = ({ color, size }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9">
      <path
        fill="none"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="2"
        d="M0 9.7L5 15.2 10 9.7"
        transform="translate(1 -8)"
      />
    </svg>
  );
};

export default RightBracket;
