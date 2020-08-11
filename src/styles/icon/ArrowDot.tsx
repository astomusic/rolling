import * as React from 'react';

import { IconProps } from '../common/Icon';

const ArrowDot = ({ color, size }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="140" height="68" viewBox="0 0 140 68">
      <defs>
        <linearGradient id="a" x1="0%" y1="39.331%" y2="62.889%">
          <stop offset="0%" stopColor="#4CF1E7" />
          <stop offset="100%" stopColor="#25DFCB" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        fill="url(#a)"
        fillRule="evenodd"
        d="M666 1351a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-8-8a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-8-8a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-8-8a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-8-8a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-8-8a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-8-8a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-8-8a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-68-8a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm12 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm12 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm12 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm12 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm12 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-72 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
        transform="translate(-528 -1287)"
      />
    </svg>
  );
};

export default ArrowDot;
