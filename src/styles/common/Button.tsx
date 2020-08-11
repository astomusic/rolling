import styled from 'styled-components';

import colors from '../colors';
import { media } from '../style';

type ButtonTheme = 'mint' | 'black';

interface ButtonProps {
  theme: ButtonTheme;
  solid?: boolean;
  small?: boolean;
  margin?: string;
  width?: string;
  borderRadius?: string;
  slim?: boolean;
}

interface AnalyticsButtonProps {
  bgColor?: string;
  color?: string;
  bdColor?: string;
  margin?: string;
  width?: string;
  neumorphism?: boolean;
  padding?: string;
}

const getTheme = (solid: boolean, theme: ButtonTheme) => {
  if (!solid && theme === 'black') {
    return `
      border-color: ${colors.black};
      color: ${colors.black};
      background-color: transparent;
      &:hover {
        opacity: 0.6;
      }
    `;
  }

  if (!solid && theme === 'mint') {
    return `
      border-color: ${colors.mint};
      color: ${colors.black};
      background-color: transparent;
      &:hover {
        opacity: 0.6;
      }
    `;
  }

  if (!!solid && theme === 'black') {
    return `
      border-color: ${colors.black};
      color: ${colors.mint};
      background-color: ${colors.black};
      &:hover {
        color: ${colors.white};
      }
    `;
  }

  if (!!solid && theme === 'mint') {
    return `
      border-color: ${colors.mint};
      color: ${colors.black};
      background-color: ${colors.mint};
      &:hover {
        color: ${colors.white};
      }
    `;
  }
};

const getPadding = (small: boolean, slim: boolean) => {
  if (small) {
    return '8px 19px';
  }

  if (slim) {
    return '12px 40px';
  }

  return '20px 35px';
};

const Button = styled.button<ButtonProps>`
  border-style: solid;
  border-radius: ${({ borderRadius }) => (borderRadius ? `${borderRadius}` : '32px')};
  user-select: none;
  padding: ${({ small, slim }) => getPadding(small, slim)};
  font-size: 16px;
  line-height: 1.43;
  letter-spacing: -0.5px;
  ${({ solid, theme }) => (solid || theme) && getTheme(solid, theme)};
  margin: ${({ margin }) => (margin ? margin : '0')};
  ${({ width }) => width && `width: ${width}`};
  cursor: pointer;
  ${({ slim }) =>
    slim &&
    `
    font-size: 16px;
    border-width: 2px;
    border-color: ${colors.mint};
    color: ${colors.mint};
    font-weight: 500;
    transition: 0.15s ease-in;
    background-color: transparent;
    ${media.mobile`
      font-size: 14px;
    `};
    &:hover {
      color: ${colors.black};
      background-color: ${colors.mint};
    }
  `};

  &:disabled {
    cursor: not-allowed;
    border-color: ${colors.gray};
    color: ${colors.white};
    background-color: ${colors.gray};
  }
`;

export const AnalyticsButton = styled.button<AnalyticsButtonProps>`
  cursor: pointer;
  user-select: none;
  border-radius: 3px;
  border-style: solid;
  border-width: 2px;
  padding: ${({ padding }) => (padding ? padding : '10px 30px')};
  font-size: 16px;
  font-weight: 500;
  ${({ width }) => width && `width: ${width}`};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#1b7fcb')};
  color: ${({ color }) => (color ? color : '#fff')};
  border-color: ${({ bdColor }) => (bdColor ? bdColor : '#1b7fcb')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  ${({ neumorphism }) => neumorphism && 'box-shadow: 5px 8px 10px 0 rgba(0, 0, 0, 0.03)'};
  ${({ neumorphism }) => neumorphism && 'border-radius: 15px'};
  &:disabled {
    background-color: #d5d5d5;
    border-color: #d5d5d5;
    cursor: not-allowed;
  }
`;

export default Button;
