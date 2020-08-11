import * as React from 'react';

import { IconProps } from '../common/Icon';

const Analytics = ({ color, size }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 92 92">
      <g fill="none" fillRule="evenodd" transform="translate(1 1)">
        <path stroke="#FFF" strokeOpacity=".01" strokeWidth=".01" d="M0 0h90v90H0z" />
        <path stroke={color} strokeWidth=".96" d="M85.52 68.52V16.48H4.48v52.04h81.04z" />
        <path d="M25 22h41v41H25z" />
        <path
          fill={color}
          d="M58.864 53.371H34.556V29.144c0-.17-.136-.31-.303-.31h-2.117a.308.308 0 0 0-.303.31v26.712c0 .17.136.31.303.31h26.728c.167 0 .303-.14.303-.31v-2.174c0-.171-.136-.31-.303-.31zm-20.98-3.106H40c.167 0 .303-.14.303-.31v-5.591c0-.171-.136-.311-.303-.311h-2.117a.308.308 0 0 0-.303.31v5.592c0 .17.136.31.303.31zm5.748 0h2.117c.167 0 .303-.14.303-.31V37.53c0-.17-.136-.31-.303-.31h-2.117a.308.308 0 0 0-.303.31v12.425c0 .17.136.31.303.31zm5.747 0h2.118c.166 0 .302-.14.302-.31v-9.396c0-.171-.136-.31-.302-.31h-2.118a.308.308 0 0 0-.302.31v9.396c0 .17.136.31.302.31zm5.748 0h2.118c.166 0 .302-.14.302-.31v-15.53c0-.172-.136-.311-.302-.311h-2.118a.308.308 0 0 0-.302.31v15.53c0 .171.136.311.302.311z"
        />
        <circle cx="9.5" cy="21.5" r="1.5" fill="#FF5A52" />
        <circle cx="14.5" cy="21.5" r="1.5" fill="#E6C029" />
        <circle cx="19.5" cy="21.5" r="1.5" fill="#53C22A" />
      </g>
    </svg>
  );
};

export default Analytics;
