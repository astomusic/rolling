import React, { useState } from 'react';
import styled from 'styled-components';

import { Body, Caption } from 'root/styles/common/Typography';

interface Props {
  iconTop?: number;
  iconLeft?: number;
  descTop?: number;
  descLeft?: number;
  desc?: string;
  title?: string;
}

const Wrapper = styled.div<Props>`
  position: absolute;
  top: ${({ iconTop }) => (iconTop ? `${iconTop}px` : '0')};
  left: ${({ iconLeft }) => (iconLeft ? `${iconLeft}px` : '0')};
`;

const Icon = styled.div`
  width: 12px;
  height: 12px;
  background-color: #d7d8dd;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
`;

const Desc = styled.div<Props>`
  width: 248px;
  border-radius: 2px;
  border: solid 1px #f2f2f3;
  background-color: #fff;
  padding: 16px;
  position: absolute;
  top: ${({ descTop }) => (descTop ? `${descTop}px` : '0')};
  left: ${({ descLeft }) => (descLeft ? `${descLeft}px` : '0')};
  text-align: left;
  box-shadow: 0 2px 4px 0 #d7d8dd;
  box-sizing: border-box;
  z-index: 9999;
`;

const Tooltip = ({ desc, iconTop, iconLeft, descTop, descLeft, title }: Props) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <Wrapper iconTop={iconTop} iconLeft={iconLeft}>
      {hover && (
        <Desc descTop={descTop} descLeft={descLeft}>
          {title && (
            <Body color={'black'} size={'l'} padding={'0 0 8px 0'}>
              {title}
            </Body>
          )}
          <Body color={'black'} size={'l'}>
            {desc}
          </Body>
        </Desc>
      )}
      <Icon onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Caption>{'?'}</Caption>
      </Icon>
    </Wrapper>
  );
};

export default React.memo(Tooltip);
