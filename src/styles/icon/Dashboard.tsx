import * as React from 'react';

import { IconProps } from '../common/Icon';

const Dashboard = ({ color, size }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          fill="#A4A6B0"
          fillRule="nonzero"
          d="M19.36 4H4.64a.64.64 0 0 0-.64.64v14.72c0 .354.286.64.64.64h14.72a.64.64 0 0 0 .64-.64V4.64a.64.64 0 0 0-.64-.64zM5.44 5.44h2.72v13.12H5.44V5.44zm13.12 13.12H9.44V9.44h9.12v9.12zM9.44 8.16V5.44h9.12v2.72H9.44z"
        />
      </g>
    </svg>
  );
};

export default Dashboard;
