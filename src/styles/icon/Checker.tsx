import * as React from 'react';

import { IconProps } from '../common/Icon';

const Checker = ({ color, size }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="82" height="82" viewBox="0 0 82 82">
      <g fill="none" fillRule="evenodd" stroke="#25DFCB" strokeWidth="3" transform="translate(2 2)">
        <circle cx="39" cy="39" r="39" />
        <path d="M23 36.038L37.269 52 58 27" />
      </g>
    </svg>
  );
};

export default Checker;
