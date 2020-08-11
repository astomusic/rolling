import * as React from 'react';

import { IconProps } from '../common/Icon';

const MenuShrinkage = ({ color, size }: IconProps) => {
  const viewBox = `1 1 ${size} ${size}`;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox={viewBox}>
      <g fill="none" fillRule="evenodd">
        <path stroke="#FFF7F7" strokeOpacity=".01" strokeWidth=".01" d="M1 1h24v24H1z" />
        <path
          fill={color}
          d="M10.75 16.5h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 1 1 0-1.5zm-2.464-5.869l.008.03.006.04v.51c0 .05-.015.1-.056.16l-.038.039-2.126 1.738 2.127 1.738a.269.269 0 0 1 .087.146l.006.053v.51c0 .12-.101.213-.262.191l-.064-.033-2.841-2.323a.364.364 0 0 1-.059-.502l.059-.062 2.84-2.322c.096-.08.233-.052.313.087zM10.75 12.5h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 1 1 0-1.5zm0-4h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1 0-1.5z"
        />
      </g>
    </svg>
  );
};

export default MenuShrinkage;
