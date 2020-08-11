import styled from 'styled-components';

interface Props {
  color?: string;
}

const Xmark = styled.div<Props>`
  display: inline-block;
  position: relative;
  margin: 0 8px 0 0;
  padding: 0;
  width: 2px;
  height: 16px;
  background: ${({ color }) => (color ? color : '#191919')};
  transform: rotate(45deg);
  &::before {
    display: block;
    content: '';
    position: absolute;
    top: 50%;
    left: -7px;
    width: 16px;
    height: 2px;
    margin-top: -1px;
    background: ${({ color }) => (color ? color : '#191919')};
  }
`;

export default Xmark;
