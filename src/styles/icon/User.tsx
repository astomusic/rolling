import * as React from 'react';

import { IconProps } from 'root/styles/common/Icon';

const User = ({ color, size }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 30 30">
      <g fill="none" fillRule="evenodd" transform="translate(1 1)">
        <circle cx="14" cy="14" r="14" stroke={color} strokeWidth="2" />
        <circle cx="14" cy="24.706" r="9.059" fill={color} mask="url(#b)" />
        <circle cx="14" cy="9.882" r="4.941" fill={color} />
      </g>
    </svg>
  );
};

export default User;
