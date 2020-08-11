import * as React from 'react';

import { IconProps } from '../common/Icon';

const Desktop = ({ color, size }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 42 42">
      <g fill="none" fillRule="evenodd">
        <path stroke="#FFF" strokeOpacity=".01" strokeWidth=".01" d="M1 1h40v40H1z" />
        <path
          stroke={color}
          strokeWidth=".96"
          d="M39.52 31.52V8.48H3.48v23.04h36.04zm-22.04 2H17l.48.48v-.48zm0-.04V33l-.48.48h.48zm7.04 0H25l-.48-.48v.48zm0 .04V34l.48-.48h-.48z"
        />
        <path
          fill={color}
          d="M23.306 20.552a1.069 1.069 0 0 0 0-1.18l-1.25-1.901L25 13h-1.062l-2.413 3.666-2.414-3.664h-1.062l2.947 4.47-1.297 1.968a1.069 1.069 0 0 0 0 1.18l1.251 1.902L18 27h1.062l2.418-3.675 2.418 3.671h1.062l-2.95-4.478 1.296-1.966zm-2.873-.43a.171.171 0 0 1 0-.185l1.092-1.66 1.048 1.592a.171.171 0 0 1 0 .185l-1.093 1.66-1.047-1.592z"
        />
      </g>
    </svg>
  );
};

export default Desktop;
