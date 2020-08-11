import * as React from 'react';

import { IconProps } from 'root/styles/common/Icon';

const Time = ({ color, size }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
      <g fill="none" fillRule="evenodd" transform="translate(4.5 3)">
        <path
          stroke="#A0ABBC"
          strokeWidth="2"
          d="M8.382 22.353c4.63 0 8.383-3.753 8.383-8.382 0-4.63-3.753-8.383-8.383-8.383-1.413 0-2.745.35-3.913.968-1.504.795-2.736 2.034-3.523 3.543C.342 11.257 0 12.574 0 13.97c0 4.629 3.753 8.382 8.382 8.382z"
        />
        <path
          fill="#A0ABBC"
          d="M7.265 7.824H9.5v5.705c0 .553-.448 1-1 1h-.235c-.553 0-1-.447-1-1V7.824zM16.354 4.252l1.747 1.747c.39.39.39 1.023 0 1.414L16.354 9.16c-.39.39-1.024.39-1.414 0l-1.747-1.747c-.39-.39-.39-1.024 0-1.414l1.747-1.747c.39-.39 1.024-.39 1.414 0z"
        />
        <rect width="10.059" height="3.353" x="3.353" fill="#A0ABBC" rx="1.5" />
      </g>
    </svg>
  );
};

export default Time;
