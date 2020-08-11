import * as React from 'react';
import { IconProps } from '../common/Icon';

const SystemLine = ({ color, size }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="107" height="14" viewBox="0 0 107 14">
      <path fill={color} fillRule="nonzero" d="M92.9 8H0V6h92.9V0l14 7-14 7V8z" opacity=".5" />
    </svg>
  );
};

export default SystemLine;
