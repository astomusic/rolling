import * as React from 'react';

import { IconProps } from '../common/Icon';

const Studio = ({ color, size }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 92 92">
      <g fill="none" fillRule="evenodd" transform="translate(1 1)">
        <path stroke="#FFF" strokeOpacity=".01" strokeWidth=".01" d="M0 0h90v90H0z" />
        <path
          fillRule="nonzero"
          stroke={color}
          strokeWidth=".96"
          d="M85.52 68.52V16.48H4.48v52.04h81.04z"
        />
        <path
          fill={color}
          d="M45 29c7.732 0 14 6.268 14 14s-6.268 14-14 14-14-6.268-14-14 6.268-14 14-14zm0 1.4c-6.959 0-12.6 5.641-12.6 12.6S38.041 55.6 45 55.6 57.6 49.959 57.6 43 51.959 30.4 45 30.4zm0 .7c6.572 0 11.9 5.328 11.9 11.9S51.572 54.9 45 54.9 33.1 49.572 33.1 43 38.428 31.1 45 31.1zm-2.8 7.7v8.4l6.3-4.2-6.3-4.2z"
        />
        <circle cx="9.5" cy="21.5" r="1.5" fill="#FF5A52" />
        <circle cx="14.5" cy="21.5" r="1.5" fill="#E6C029" />
        <circle cx="19.5" cy="21.5" r="1.5" fill="#53C22A" />
      </g>
    </svg>
  );
};

export default Studio;
