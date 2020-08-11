import * as React from 'react';
import styled, { keyframes } from 'styled-components';

import { IconProps } from '../common/Icon';

interface StyledPathProp {
  delayTime: number;
}

const Fade = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`;

const StyledPath = styled.path<StyledPathProp>`
  animation-name: ${Fade};
  animation-duration: 1s;
  animation-delay: ${({ delayTime }) => `${delayTime}s`};
  animation-direction: alternate;
  animation-iteration-count: infinite;
`;

const ArrowAnimation = ({ color, size }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 44 13">
      <g fill={color} fillRule="evenodd">
        <StyledPath d="M0 .196l8 6-8 6z" delayTime={0} />
        <StyledPath d="M9 .196l8 6-8 6z" delayTime={0.2} />
        <StyledPath d="M18 .196l8 6-8 6z" delayTime={0.4} />
        <StyledPath d="M27 .196l8 6-8 6z" delayTime={0.6} />
        <StyledPath d="M36 .196l8 6-8 6z" delayTime={0.8} />
      </g>
    </svg>
  );
};

export default ArrowAnimation;
