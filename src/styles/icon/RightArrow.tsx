import * as React from 'react';
import styled from 'styled-components';

import { IconProps } from '../common/Icon';

interface SvgWrapperProps {
  padding?: string;
}

const SvgWrapper = styled.svg<SvgWrapperProps>`
  ${({ padding }) => padding && `padding: ${padding}`};
`;

const RightArrow = ({ color, size, padding }: IconProps) => {
  return (
    <SvgWrapper
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="7"
      viewBox="0 0 11 7"
      padding={padding}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#1B7FCB"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path
          d="M-1.031 5.5L2.323 1.375 5.569 5.365"
          transform="matrix(-1 0 0 1 11 0) matrix(0 1 1 0 -1.169 1.169)"
        />
        <path d="M0.529 3.459L10.841 3.459" transform="matrix(-1 0 0 1 11 0)" />
      </g>
    </SvgWrapper>
  );
};

export default RightArrow;
