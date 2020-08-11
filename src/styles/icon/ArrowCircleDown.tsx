import * as React from 'react';
import { IconProps } from '../common/Icon';

const ArrowCircleDown = ({ color, size }: IconProps) => {
  const viewBox = `0 0 ${size} ${size}`;
  const center = size / 2;
  const radiusLarge = center;
  const radiusSmall = center / 4;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32">
      <g fill="none" fillRule="evenodd">
        <circle cx="16" cy="16" r="16" fill={color} />
        <path stroke="#FFF7F7" strokeOpacity=".01" strokeWidth=".01" d="M8 8h16v16H8z" />
        <path
          fill="#FFF"
          d="M20.133 13.333h1.088c.094 0 .146.108.088.181l-4.955 6.314a.45.45 0 0 1-.708 0l-4.955-6.314a.112.112 0 0 1 .088-.18h1.088c.07 0 .135.032.178.085l3.954 5.042 3.956-5.042a.228.228 0 0 1 .178-.086z"
        />
      </g>
    </svg>
  );
};

export default ArrowCircleDown;
