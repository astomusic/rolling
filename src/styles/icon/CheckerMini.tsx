import * as React from 'react';

import { IconProps } from '../common/Icon';

const CheckerMini = ({ color, size }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
      <g fill="none" fillRule="evenodd">
        <circle cx="8" cy="8" r="8" fill="#25DFCB" />
        <path stroke="#FFF" d="M4.718 7.392l2.927 3.275 4.252-5.129" />
      </g>
    </svg>
  );
};

export default CheckerMini;
