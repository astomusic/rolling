import * as React from 'react';

import { IconProps } from '../common/Icon';

const CheckerMid = ({ color, size }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
      <g fill="none" fillRule="evenodd">
        <circle cx="15" cy="15" r="15" fill="#25DFCB" />
        <path stroke="#FFF" strokeWidth="2" d="M7 13.39l6.93 7.753L24 9" />
      </g>
    </svg>
  );
};

export default CheckerMid;
