import * as React from 'react';

import { IconProps } from '../common/Icon';

const VR = ({ color, size }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 42 42">
      <g fill="none" fillRule="evenodd">
        <path stroke="#FFF" strokeOpacity=".01" strokeWidth=".01" d="M1 1h40v40H1z" />
        <path
          fill={color}
          fillRule="nonzero"
          stroke="#212121"
          strokeWidth=".5"
          d="M30.249 10.784h-5.437A9.678 9.678 0 0 0 19.228 9c-3.88 0-7.558 2.362-8.753 5.621-.866 1.803-.36 5.315.046 8.14.105.725.204 1.412.27 2.002l.042 7.602a.4.4 0 0 0 .401.396l11.4.139h.006a.429.429 0 0 0 .297-.11.399.399 0 0 0 .131-.281v-3.135l2.832.088h.071a2.433 2.433 0 0 0 2.432-2.398l.034-2.363h3.191a.415.415 0 0 0 .375-.569l-1.28-3.128a1.842 1.842 0 0 0 1.38-1.768v-6.629c0-1.007-.844-1.823-1.854-1.823z"
        />
        <path
          fill={color === '#212121' ? '#25dfcb' : '#212121'}
          d="M28.042 11.594v8.654h-7.104a2.441 2.441 0 0 1-1.724-.713 2.427 2.427 0 0 1-.713-1.72v-3.787a2.435 2.435 0 0 1 2.437-2.434h7.104zM31.29 19.236c0 .56-.48 1.012-1.041 1.012h-1.395v-8.654h1.395c.562 0 1.041.453 1.041 1.013v6.629z"
        />
      </g>
    </svg>
  );
};

export default VR;
