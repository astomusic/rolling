import styled from 'styled-components';

import colors from '../colors';
import { media } from '../style';

type AvailableSize = 'xl' | 'l' | 'm' | 's' | 'xs' | number;
type AvailableColor = 'black' | 'mint' | 'red' | 'gray' | 'white' | 'blue' | string;
type AvailableWeight = 'light' | 'regular' | 'medium' | 'bold';

interface TypographyProps {
  color?: AvailableColor;
  size?: AvailableSize;
  width?: string;
  height?: string;
  weight?: AvailableWeight;
  padding?: string;
  display?: string;
  textAlign?: string;
  italic?: boolean;
  mobilePadding?: string;
  margin?: string;
  textDecoration?: string;
}

const getTitleSize = (size: AvailableSize) => {
  if (typeof size === 'number') {
    return size;
  }

  switch (size) {
    case 'xl':
      return 79;
    case 'l':
      return 46;
    case 'm':
      return 32;
    case 's':
      return 24;
    case 'xs':
      return 21;
    default:
      return 32;
  }
};

const getTitleMobileSize = (size: AvailableSize) => {
  if (typeof size === 'number') {
    return size;
  }

  switch (size) {
    case 'xl':
      return 34;
    case 'l':
      return 32;
    case 'm':
      return 24;
    case 's':
      return 21;
    case 'xs':
      return 18;
    default:
      return 24;
  }
};

const getSubTitleSize = (size: AvailableSize) => {
  if (typeof size === 'number') {
    return size;
  }

  switch (size) {
    case 'l':
      return 20;
    case 'm':
      return 20;
    case 's':
      return 16;
    default:
      return 16;
  }
};

const getBodySize = (size: AvailableSize) => {
  if (typeof size === 'number') {
    return size;
  }

  switch (size) {
    case 'l':
    case 'm':
    case 's':
    case 'xs':
    default:
      return 21;
  }
};

const getTextSize = (size: AvailableSize) => {
  if (typeof size === 'number') {
    return size;
  }

  switch (size) {
    case 'l':
    case 'm':
    case 's':
    case 'xs':
    default:
      return 16;
  }
};

const getMobileBodySize = (size: AvailableSize) => {
  if (typeof size === 'number') {
    return size;
  }

  switch (size) {
    case 'l':
    case 'm':
    case 's':
    case 'xs':
    default:
      return 16;
  }
};

const getColor = (color: AvailableColor) => {
  switch (color) {
    case 'black':
      return colors.black;
    case 'mint':
      return colors.mint;
    case 'gray':
      return colors.gray;
    case 'white':
      return colors.white;
    case 'red':
      return colors.red;
    case 'blue':
      return colors.blue;
    default:
      return color ? color : colors.white;
  }
};

const getWeight = (weight: AvailableWeight) => {
  switch (weight) {
    case 'light':
      return 300;
    case 'regular':
      return 400;
    case 'medium':
      return 500;
    case 'bold':
      return 700;
    default:
      return 400;
  }
};

const Title = styled.h1<TypographyProps>`
  font-size: ${({ size }) => `${getTitleSize(size)}px`};
  font-weight: ${({ weight }) => getWeight(weight)};
  letter-spacing: -0.3px;
  line-height: 1.5;
  ${({ width }) => width && `width: ${width}`};
  ${({ height }) => height && `height: ${height}`};
  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`};
  color: ${({ color }) => getColor(color)};
  ${({ padding }) => padding && `padding: ${padding}`};
  ${({ margin }) => margin && `margin: ${margin}`};
  ${({ textDecoration }) => textDecoration && `text-decoration: ${textDecoration}`};
  ${media.mobile`
    font-size: ${({ size }) => `${getTitleMobileSize(size)}px`};
    ${({ mobilePadding }) => mobilePadding && `padding: ${mobilePadding}`};
  `}
  overflow: hidden;

  a {
    cursor: pointer;
    font-size: ${({ size }) => `${getTitleSize(size)}px`};
    font-weight: ${({ weight }) => getWeight(weight)};
    color: #1b7fcb;
  }

  b {
    font-size: ${({ size }) => `${getTitleSize(size)}px`};
    font-weight: 500;
  }

  sup {
    font-size: ${({ size }) => `${getTitleSize(size) / 2}px`};
    font-weight: ${({ weight }) => (weight ? getWeight(weight) : 700)};
    vertical-align: super;
  }
`;

const SubTitle = styled.h2<TypographyProps>`
  ${({ display }) => display && `display: ${display}`};
  font-size: ${({ size }) => `${getSubTitleSize(size)}px`};
  font-weight: 300;
  letter-spacing: -0.3px;
  line-height: 1.5;
  color: ${({ color }) => getColor(color)};
  font-weight: ${({ weight }) => getWeight(weight)};
  ${({ padding }) => padding && `padding: ${padding}`};
`;

const Body = styled.p<TypographyProps>`
  ${({ display }) => display && `display: ${display}`};
  ${({ italic }) => italic && 'font-style: italic'};
  font-size: ${({ size }) => `${getBodySize(size)}px`};
  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`};
  letter-spacing: -0.3px;
  line-height: 1.5;
  color: ${({ color }) => getColor(color)};
  font-weight: ${({ weight }) => getWeight(weight)};
  ${({ padding }) => padding && `padding: ${padding}`};
  ${media.mobile`
    font-size: ${({ size }) => `${getMobileBodySize(size)}px`};
    ${({ mobilePadding }) => mobilePadding && `padding: ${mobilePadding}`};
  `}

  sup {
    font-size: ${({ size }) => `${getBodySize(size) / 2}px`};
    font-weight: ${({ weight }) => (weight ? getWeight(weight) : 700)};
    vertical-align: super;
  }
`;

const Text = styled.span<TypographyProps>`
  ${({ display }) => display && `display: ${display}`};
  font-size: ${({ size }) => `${getTextSize(size)}px`};
  line-height: 1.3;
  font-weight: ${({ weight }) => getWeight(weight)};
  color: ${({ color }) => getColor(color)};
  ${({ padding }) => padding && `padding: ${padding}`};
  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`};
  ${media.mobile`
    ${({ mobilePadding }) => mobilePadding && `padding: ${mobilePadding}`};
    font-size: 16px;
  `}
`;

const Caption = styled.span<TypographyProps>`
  ${({ display }) => display && `display: ${display}`};
  font-size: 14px;
  font-weight: ${({ weight }) => getWeight(weight)};
  letter-spacing: -0.5px;
  color: ${({ color }) => getColor(color)};
  ${({ padding }) => padding && `padding: ${padding}`};
  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`};
  ${media.mobile`
    font-size: 12px;
    ${({ mobilePadding }) => mobilePadding && `padding: ${mobilePadding}`};
  `}
`;

export { Title, SubTitle, Body, Text, Caption };
