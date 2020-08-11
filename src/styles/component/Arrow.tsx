import styled from 'styled-components';

interface ArrowProps {
  absolute?: boolean;
  size: number;
  color: string;
  direction: 'left' | 'right' | 'up' | 'down';
  right?: number;
  top?: number;
  margin?: string;
  disabled?: boolean;
}

const Arrow = styled.div<ArrowProps>`
  ${({ absolute }) => absolute && 'position: absolute'};
  display: inline-block;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  text-indent: -9999px;
  border-top: ${({ color }) => `2px solid ${color}`};
  border-left: ${({ color }) => `2px solid ${color}`};
  transition: all 0.2s;
  transform: ${({ direction }) => {
    switch (direction) {
      case 'up':
        return 'rotate(45deg)';
      case 'down':
        return 'rotate(-135deg)';
      case 'left':
        return 'rotate(-45deg)';
      case 'right':
        return 'rotate(135deg)';
      default:
        return 'rotate(0)';
    }
  }};
  transform-origin: 25% 25%;
  ${({ right }) => right && `right: ${right}px`};
  ${({ top }) => top && `top: ${top}px`};
  ${({ margin }) => margin && `margin: ${margin}`};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export default Arrow;
