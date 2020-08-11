import * as React from 'react';
import styled from 'styled-components';

import { media } from '../style';

interface GridProps {
  bg?: string;
  color?: string;
  mobile?: number;
  vAlign?: 'stretch' | 'center' | 'start' | 'end';
  align?: 'center' | 'right' | 'left';
  paddingTop?: string;
  paddingBottom?: string;
  marginRight?: boolean;
  height?: string;
  width?: string;
  side?: 'right' | 'left' | 'all';
  bgSize?: string;
  bgPosition?: string;
  mobilePadding?: string;
  mobileHeight?: string;
  direction?: string;
  startCol?: number;
  endCol?: number;
  alignSelf?: string;
  justifySelf?: string;
}

const Container = styled.div<GridProps>`
  width: 100%;
  background-color: ${({ color }) => color};
  background-image: url(${({ bg }) => bg});
  background-size: ${({ bgSize }) => (bgSize ? bgSize : 'cover')};
  background-position: ${({ bgPosition }) => (bgPosition ? bgPosition : 'initial')};
  background-repeat: no-repeat;
  position: relative;
`;

const Row = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(11, 72px 32px) 72px;
  grid-template-rows: auto;
  ${({ height }) => height && `height: ${height}`};
  justify-content: center;
  ${({ vAlign }) => vAlign && `align-items: ${vAlign}`};
  ${({ paddingTop }) => paddingTop && `padding-top: ${paddingTop}`};
  ${({ paddingBottom }) => paddingBottom && `padding-bottom: ${paddingBottom}`};
  ${media.mobile`
    display: flex;
    width: calc(100% - 32px);
    ${({ mobilePadding }) => mobilePadding && `padding: ${mobilePadding}`};
    ${({ mobileHeight }) => mobileHeight && `height: ${mobileHeight}`};
    padding-left: 16px;
    padding-right: 16px;
    ${({ mobile }) => mobile && 'flex-direction: column'};
  `}
`;

const Col = styled.div<GridProps>`
  position: relative;
  box-sizing: border-box;
  grid-column-start: ${({ startCol }) => startCol};
  grid-column-end: ${({ endCol }) => endCol};
  ${({ alignSelf }) => alignSelf && `align-self: ${alignSelf}`};
  ${({ justifySelf }) => justifySelf && `justify-self: ${justifySelf}`};
  grid-row-start: 1;
  grid-row-end: 2;
  flex-grow: 0;
  ${({ align }) => align && `text-align: ${align}`};
  ${({ marginRight }) => marginRight && 'margin-right: 32px'};
  ${({ width }) => width && `width: ${width}`};
`;

const ProjectContainer = styled.div<GridProps>`
  position: relative;
  width: ${({ width }) => width};
  margin-top: 32px;
`;

const ProjectRow = styled.div<GridProps>`
  width: 100%;
  padding: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  ${({ height }) => `height: ${height}`};
  ${({ align }) => `justify-content: ${align}`};
  ${({ vAlign }) => `align-items: ${vAlign}`};
  ${({ paddingTop }) => `padding-top: ${paddingTop}`};
  ${({ paddingBottom }) => `padding-bottom: ${paddingBottom}`};
`;

const ProjectCol = styled.div<GridProps>`
  position: relative;
  box-sizing: border-box;
  flex-grow: 0;
  ${({ align }) => `text-align: ${align}`};
  ${({ marginRight }) => marginRight && 'margin-right: 32px'};
  width: ${({ side }) => (side === 'left' ? '792px' : side === 'right' ? '248px' : '100%')};
  ${({ side }) => side === 'left' && 'margin-right: 8px'};
  ${({ side }) => side === 'all' && 'margin-bottom: 6px'};
`;

export { Container, Col, Row, ProjectRow, ProjectCol, ProjectContainer };
