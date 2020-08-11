import styled from 'styled-components';

interface Props {
  direction: 'left' | 'right' | 'up' | 'down';
  right?: number;
  top?: number;
}

const SolidArrow = styled.div<Props>`
  position: absolute;
  ${({ right }) => right && `right: ${right}px`};
  ${({ top }) => top && `top: ${top}px`};
  width: 0;
  height: 0;
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  transition: all 0.2s;
  ${({ direction }) => {
    switch (direction) {
      case 'up':
        return 'border-bottom: 6px solid #81858e;';
      case 'down':
        return 'border-top: 6px solid #81858e;';
      case 'left':
        return 'border-right: 6px solid #81858e;';
      case 'right':
        return 'border-left: 6px solid #81858e;';
      default:
        return 'border-top: 6px solid #81858e;';
    }
  }};
`;

export default SolidArrow;
