import * as React from 'react';

import { IconProps } from '../common/Icon';

const LXStudio = ({ color, size }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          fill="#A4A6B0"
          fillRule="nonzero"
          d="M19.429 10.756H17.5V8.678a.578.578 0 0 0-.571-.585h-5.625L9.209 6.04A.144.144 0 0 0 9.11 6H4.57A.578.578 0 0 0 4 6.585v10.83c0 .323.255.585.571.585h12.465a.573.573 0 0 0 .53-.366l2.393-6.073a.613.613 0 0 0 .041-.22.578.578 0 0 0-.571-.585zM5.286 7.317h3.366l2.136 2.093h5.426v1.346H7.107a.573.573 0 0 0-.53.366L5.286 14.4V7.317zm11.344 9.366H5.696L7.541 12h10.936l-1.847 4.683z"
        />
      </g>
    </svg>
  );
};

export default LXStudio;
