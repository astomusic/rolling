import styled from 'styled-components';

interface BoxProps {
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
}

const Box = styled.div<BoxProps>`
  position: relative;
  width: ${({ width }) => (width ? width : '800px')};
  height: ${({ height }) => (height ? height : '315px')};
  border-radius: 2px;
  border: solid 1px #ebebed;
  background-color: #fff;
  color: #191919;
  padding: ${({ padding }) => (padding ? padding : '32px')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  box-sizing: border-box;
`;

export default Box;
