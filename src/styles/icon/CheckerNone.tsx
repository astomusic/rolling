import * as React from 'react';

import { IconProps } from '../common/Icon';

const CheckerNone = ({ color, size }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
      <g fill="none" fillRule="evenodd">
        <circle cx="15" cy="15" r="15" fill="#979797" />
        <path stroke="#FFF" strokeWidth="2" d="M7 15.5h17" />
      </g>
    </svg>
  );
};

export default CheckerNone;
