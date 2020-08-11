import styled from 'styled-components';

interface StyledHrProps {
  margin?: string;
  height?: string;
  color?: string;
}

const Hr = styled.div<StyledHrProps>`
  width: 100%;
  height: ${({ height }) => (height ? height : '1px')};
  background-color: ${({ color }) => (color ? color : '#e9e9e9')};
  margin: ${({ margin }) => (margin ? margin : '0')};
`;

export default Hr;
