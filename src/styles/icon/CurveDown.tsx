import * as React from 'react';
import styled from 'styled-components';

import { IconProps } from '../common/Icon';

const StyledSvg = styled.svg`
  transform: scaleY(-1);
`;

const CurveDown = ({ color, size }: IconProps) => {
  return (
    <StyledSvg xmlns="http://www.w3.org/2000/svg" width="166" height="140" viewBox="0 0 166 140">
      <path
        fill={color}
        fillRule="nonzero"
        d="M14 132h66c11.598 0 21-9.402 21-21V23c0-12.703 10.297-23 23-23h41.971v2H124c-11.598 0-21 9.402-21 21v88c0 12.703-10.297 23-23 23H14v6l-14-7 14-7v6z"
        opacity=".503"
      />
    </StyledSvg>
  );
};

export default CurveDown;
