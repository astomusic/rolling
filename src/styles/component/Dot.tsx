import * as React from 'react';
import styled from 'styled-components';

interface DotProps {
  className?: string;
  active?: boolean;
  size?: number;
  margin?: string;
}

const Wrapper = styled.div<DotProps>`
  position: relative;
  display: inline-block;
  height: ${({ size }) => size && `${size}px`};
  width: ${({ size }) => size && `${size}px`};
  border-radius: 50%;
  background-color: ${({ active }) => (active ? '#1edbca' : '#2b2f32')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  flex-shrink: 0;
`;

const Inner = styled.div<DotProps>`
  position: absolute;
  top: ${({ size }) => size && `${(size * 3) / 8}px`};
  left: ${({ size }) => size && `${(size * 3) / 8}px`};
  width: ${({ size }) => size && `${size / 4}px`};
  height: ${({ size }) => size && `${size / 4}px`};
  border-radius: 50%;
  background-color: ${({ active }) => (!active ? '#1edbca' : '#2b2f32')};
`;

const Dot = ({ className, active, size, margin }: DotProps) => {
  return (
    <Wrapper className={className} active={active} size={size ? size : 16} margin={margin}>
      <Inner active={active} size={size ? size : 16} margin={margin} />
    </Wrapper>
  );
};

export default Dot;
