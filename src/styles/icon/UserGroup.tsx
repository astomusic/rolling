import * as React from 'react';

import { IconProps } from 'root/styles/common/Icon';

const UserGroup = ({ color, size }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="26" viewBox="0 0 31 26">
      <g fill="none" fillRule="evenodd">
        <g fill={color}>
          <path
            d="M15.115 5.212c0 2.878-2.333 5.212-5.212 5.212-2.878 0-5.212-2.334-5.212-5.212C4.69 2.334 7.025 0 9.903 0c2.879 0 5.212 2.334 5.212 5.212M9.903 12.509c-4.53 0-8.387 2.872-9.838 6.89-.255.704.273 1.449 1.024 1.449h17.627c.751 0 1.28-.745 1.025-1.45-1.452-4.017-5.309-6.89-9.838-6.89"
            transform="translate(11.194 2.583)"
          />
        </g>
        <g fill="#FFF">
          <path
            d="M18.4 6.345c0 3.504-2.84 6.345-6.344 6.345-3.504 0-6.345-2.841-6.345-6.345C5.71 2.841 8.55 0 12.056 0S18.4 2.841 18.4 6.345M12.056 15.228c-5.514 0-10.21 3.497-11.977 8.388-.31.858.333 1.764 1.247 1.764h21.46c.913 0 1.556-.906 1.247-1.764-1.768-4.891-6.464-8.388-11.977-8.388"
            transform="translate(3.444)"
          />
        </g>
        <g fill={color}>
          <path d="M18.4 6.345c0 3.504-2.84 6.345-6.344 6.345-3.504 0-6.345-2.841-6.345-6.345C5.71 2.841 8.55 0 12.056 0S18.4 2.841 18.4 6.345M12.056 15.228c-5.514 0-10.21 3.497-11.977 8.388-.31.858.333 1.764 1.247 1.764h21.46c.913 0 1.556-.906 1.247-1.764-1.768-4.891-6.464-8.388-11.977-8.388" />
        </g>
      </g>
    </svg>
  );
};

export default UserGroup;
