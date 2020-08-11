import React from 'react';
import styled, { keyframes } from 'styled-components';

import { IconProps } from '../common/Icon';

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSVG = styled.svg`
  transform-origin: center center;
  animation: ${spin} 3s linear infinite;
`;

const Uploading = ({ color, size }: IconProps) => {
  return (
    <StyledSVG xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16">
      <path
        fill="#6B6B6B"
        fillRule="evenodd"
        stroke="#6B6B6B"
        strokeWidth=".4"
        d="M13.477 8.41c-.19 0-.346.153-.346.338 0 3.076-2.567 5.576-5.723 5.576-3.157 0-5.723-2.5-5.723-5.576 0-2.94 2.358-5.356 5.324-5.558L5.916 4.474c-.121.152-.104.355.052.473.07.05.139.084.226.084.104 0 .19-.033.26-.118l1.56-1.842c.122-.152.105-.354-.051-.473l-1.89-1.52c-.14-.119-.365-.102-.486.05-.122.152-.104.355.052.473l1.162.947c-3.26.27-5.81 2.956-5.81 6.2C.991 12.195 3.87 15 7.408 15c3.537 0 6.416-2.805 6.416-6.252 0-.185-.156-.337-.347-.337"
      />
    </StyledSVG>
  );
};

export default Uploading;
