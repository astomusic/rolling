import * as React from 'react';

import { IconProps } from '../common/Icon';

const PlayerCancel = ({ color, size }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <g fill="none" fillRule="evenodd">
        <circle cx="12" cy="12" r="12" fill="#A0ABBC" />
        <g stroke="#FAFAFA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path d="M0.604 5.896L10.604 5.896" transform="rotate(45 .904 16.596)" />
          <path
            d="M0.604 5.896L10.604 5.896"
            transform="rotate(45 .904 16.596) rotate(90 5.604 5.896)"
          />
        </g>
      </g>
    </svg>
  );
};

export default PlayerCancel;
