import React, { forwardRef, MutableRefObject, useState } from 'react';
import styled from 'styled-components';

interface ToggleProps {
  children?: React.ReactNode;
  toggleWidth?: number;
  toggleHeight?: number;
  onClick?: (value: boolean) => void;
}

interface DotProps {
  active?: boolean;
  toggleWidth?: number;
  toggleHeight?: number;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
`;

const StyledToggle = styled.div<DotProps>`
  position: relative;
  display: inline-block;
  width: ${({ toggleWidth }) => (toggleWidth ? `${toggleWidth}px` : '24px')};
  height: ${({ toggleHeight }) => (toggleHeight ? `${toggleHeight}px` : '12px')};
  border-radius: ${({ toggleHeight }) => (toggleHeight ? `${toggleHeight / 2}px` : '6px')};
  border: solid 1px #ebebed;
  background-color: ${({ active }) => (active ? '#25dfcb' : '#f2f2f3')};
  transition: 0.5s all;
`;

const Inner = styled.div<DotProps>`
  position: absolute;
  top: 2px;
  left: ${({ active, toggleWidth, toggleHeight }) =>
    active ? (toggleWidth ? `${toggleWidth - (toggleHeight - 4) - 2}px` : '14px') : '2px'};
  width: ${({ toggleHeight }) => (toggleHeight ? `${toggleHeight - 4}px` : '8px')};
  height: ${({ toggleHeight }) => (toggleHeight ? `${toggleHeight - 4}px` : '8px')};
  border-radius: 50%;
  background-color: #ffffff;
  transition: 0.5s all;
`;

const Toggle = forwardRef(
  (
    { children, toggleWidth, toggleHeight, onClick }: ToggleProps,
    ref: MutableRefObject<HTMLDivElement>,
  ) => {
    const [active, setActive] = useState(false);
    const handleToggle = () => {
      if (!!onClick) {
        onClick(!active);
      }
      setActive(!active);
    };
    return (
      <Wrapper onClick={handleToggle} ref={ref}>
        {children}
        <StyledToggle active={active} toggleWidth={toggleWidth} toggleHeight={toggleHeight}>
          <Inner active={active} toggleWidth={toggleWidth} toggleHeight={toggleHeight} />
        </StyledToggle>
      </Wrapper>
    );
  },
);

export default Toggle;
