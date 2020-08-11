import * as React from 'react';

import { IconProps } from 'root/styles/common/Icon';

const UserType = ({ color, size }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="29" viewBox="0 0 27 29">
      <g fill={color} fillRule="evenodd">
        <path d="M20.605 7.105c0 3.924-3.18 7.106-7.105 7.106-3.924 0-7.105-3.182-7.105-7.106C6.395 3.182 9.576 0 13.5 0c3.925 0 7.105 3.182 7.105 7.105M13.5 17.053c-6.175 0-11.433 3.915-13.412 9.392-.346.96.373 1.976 1.397 1.976h24.03c1.024 0 1.743-1.015 1.397-1.976-1.98-5.477-7.237-9.392-13.412-9.392" />
      </g>
    </svg>
  );
};

export default UserType;
