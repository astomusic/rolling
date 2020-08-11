import * as React from 'react';
import styled from 'styled-components';

import { IconProps } from '../common/Icon';

interface SvgWrapperProps {
  padding?: string;
}

const SvgWrapper = styled.svg<SvgWrapperProps>`
  ${({ padding }) => padding && `padding: ${padding}`};
`;

const LeftArrow = ({ color, size, padding }: IconProps) => {
  return (
    <SvgWrapper
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="20"
      viewBox="0 0 32 20"
      padding={padding}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#1B7FCB"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      >
        <path d="M-3 16L6.759 4 16.2 15.607" transform="matrix(0 1 1 0 -3.4 3.4)" />
        <path d="M1.538 10.063L31.538 10.063" />
      </g>
    </SvgWrapper>
  );
};

export default LeftArrow;
