import * as React from 'react';

import { IconProps } from '../common/Icon';

const Run = ({ color, size }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <g fill="#A4A6B0" fillRule="nonzero">
          <path d="M10.606 15.312l3.988-3.134a.226.226 0 0 0 0-.354l-3.988-3.136a.226.226 0 0 0-.366.176v6.27c0 .188.218.294.366.178z" />
          <path d="M19.36 4H4.64a.64.64 0 0 0-.64.64v14.72c0 .354.286.64.64.64h14.72a.64.64 0 0 0 .64-.64V4.64a.64.64 0 0 0-.64-.64zm-.8 14.56H5.44V5.44h13.12v13.12z" />
        </g>
      </g>
    </svg>
  );
};

export default Run;
