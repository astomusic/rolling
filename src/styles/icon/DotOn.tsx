import * as React from 'react';

import { IconProps } from '../common/Icon';

const DotOn = ({ color, size }: IconProps) => {
  const viewBox = `0 0 ${size} ${size}`;
  const center = size / 2;
  const radiusLarge = center;
  const radiusSmall = center / 4;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox={viewBox}>
      <g fill="none" fillRule="evenodd">
        <circle cx={center} cy={center} r={radiusLarge} fill={color} />
        <circle cx={center} cy={center} r={radiusSmall} fill="#2B2F32" />
      </g>
    </svg>
  );
};

export default DotOn;
