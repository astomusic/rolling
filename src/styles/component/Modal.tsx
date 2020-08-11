import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { media } from '../style';

import Xmark from './Xmark';

interface Props {
  cancelMark?: boolean;
  children: ReactNode;
  overlayBlur?: boolean;
  padding?: string;
  bgColor?: string;
  onClose: () => void;
}

interface ContentProps {
  bgColor?: string;
}

interface ChildrenWrapperProps {
  padding: string;
}

interface OverlayProp {
  overlayBlur?: boolean;
}

const Wrapper = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  overflow: hidden;
  z-index: 99999;
`;

const Overlay = styled.div<OverlayProp>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 4;
  ${({ overlayBlur }) => overlayBlur && 'backdrop-filter: blur(5px)'};
  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div<ContentProps>`
  z-index: 5;
  border-radius: 10px;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#fafafa')};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  box-sizing: border-box;
  ${media.mobile`
    padding: 10px;
    width: 90%;
    max-height: 80%;
    overflow: scroll;
  `}
`;

const Cancel = styled.div`
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 8px;
  box-sizing: border-box;
  height: 30px;
  width: 30px;
  background-color: #c5c5c5;
  border-radius: 50%;
  /* position: absolute;
  top: -14px;
  right: -14px; */
  position: relative;
  margin-left: calc(100% - 30px);
  box-shadow: -3px 3px 5px 0 rgba(0, 0, 0, 0.07);
`;

const ChildrenWrapper = styled.div<ChildrenWrapperProps>`
  padding: ${({ padding }) => (padding ? padding : '0 45px 45px 45px')};
  ${media.mobile`
    padding: 0 10px 10px 10px;
  `}
`;

const Modal = ({ children, onClose, padding, cancelMark, overlayBlur, bgColor }: Props) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Wrapper>
      <Content bgColor={bgColor}>
        {cancelMark && (
          <Cancel onClick={handleClose}>
            <Xmark color={'#fff'} />
          </Cancel>
        )}
        <ChildrenWrapper padding={padding}>{children}</ChildrenWrapper>
      </Content>
      <Overlay onClick={handleClose} overlayBlur={overlayBlur} />
    </Wrapper>
  );
};

export default Modal;
