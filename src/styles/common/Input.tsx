import React, { useState } from 'react';
import styled from 'styled-components';

import { Text } from 'root/styles/common/Typography';
import { media } from 'root/styles/style';
import colors from '../colors';

interface InputProps {
  error?: boolean;
  right?: boolean;
  label?: string;
  labelColor?: string;
  hasDot?: boolean;
  placeholder?: string;
  value?: string;
  margin?: string;
  type?: string;
  autocomplete?: string;
  width?: string;
  required?: boolean;
  bgColor?: string;
  resize?: boolean;
  fontSize?: string;
  height?: string;
  onlyNumber?: boolean;
  neumorphism?: boolean;
  handler?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLElement>) => void;
}

interface StateProps {
  hasDot?: boolean;
  color?: string;
  error?: boolean;
  right?: boolean;
  margin?: string;
  bgColor?: string;
  resize?: boolean;
  height?: string;
  fontSize?: string;
  neumorphism?: boolean;
}

const Label = styled(Text)`
  display: inline-block;
  text-align: left;
  margin-bottom: 8px;
`;

const Sup = styled.div`
  display: inline-block;
  vertical-align: super;
  color: #ff0000;
  font-size: 16px;
`;

const InputWrapper = styled.div<InputProps>`
  position: relative;
  ${({ width }) => width && `width:${width}`};
`;

const Dot = styled.span<StateProps>`
  position: absolute;
  top: 24px;
  left: 15px;
  height: 5px;
  width: 5px;
  background-color: ${(props) => getStateColor(props)};
  border-radius: 50%;
  display: inline-block;
`;

const StyledInput = styled.input<StateProps>`
  width: ${({ hasDot }) => (hasDot ? 'calc(100% - 64px)' : 'calc(100% - 34px)')};
  ${({ height }) => height && `height: ${height}`};
  border-radius: 2px;
  border: solid 1px;
  border-color: ${(props) => getStateColor(props)};
  background-color: ${({ bgColor }) => bgColor};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '16px')};
  padding: ${({ hasDot }) => (hasDot ? '16px 32px' : '16px 16px')};
  ${({ margin }) => margin && `margin: ${margin}`};
  ${({ neumorphism }) => neumorphism && 'box-shadow: 5px 8px 10px 0 rgba(0, 0, 0, 0.03)'};
  ${({ neumorphism }) => neumorphism && 'border-radius: 15px'};
  &::placeholder {
    color: ${colors.gray};
  }
  ${media.mobile`
    padding: ${({ hasDot }) => (hasDot ? '14px 30px' : '14px 14px')};
  `}
`;

const StyledTextArea = styled.textarea<StateProps>`
  width: ${({ hasDot }) => (hasDot ? 'calc(100% - 64px)' : 'calc(100% - 34px)')};
  min-height: ${({ height }) => (height ? height : '160px')};
  border-radius: 2px;
  border: solid 1px;
  border-color: ${(props) => getStateColor(props)};
  background-color: ${({ bgColor }) => bgColor};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '16px')};
  padding: ${({ hasDot }) => (hasDot ? '16px 32px' : '16px 16px')};
  ${({ margin }) => margin && `margin: ${margin}`};
  ${({ neumorphism }) => neumorphism && 'box-shadow: 5px 8px 10px 0 rgba(0, 0, 0, 0.03)'};
  ${({ neumorphism }) => neumorphism && 'border-radius: 15px'};
  &::placeholder {
    color: ${colors.gray};
  }
  ${media.mobile`
    padding: ${({ hasDot }) => (hasDot ? '14px 30px' : '14px 14px')};
  `}
  ${({ resize }) => resize && 'resize: none'};
`;

const getStateColor = (props: StateProps) => {
  const { color, error, right, neumorphism } = props;
  if (neumorphism) {
    return 'transparent';
  }
  if (error) {
    return '#ff4581';
  }

  if (right) {
    return '#8cd46b';
  }

  return color;
};

const TextInput = (props: InputProps) => {
  const {
    autocomplete,
    error,
    right,
    label,
    labelColor,
    placeholder,
    value,
    handler,
    hasDot,
    margin,
    type,
    width,
    required,
    bgColor,
    neumorphism,
    height,
    fontSize,
    onlyNumber,
    onFocus,
    onBlur,
    onKeyPress,
  } = props;
  const [done, setDone] = useState(false);
  const [dotColor, setDotColor] = useState(colors.gray);
  const [borderColor, setBorderColor] = useState('#f2f2f3');

  const handleFocus = () => {
    setDotColor(colors.mint);
    setBorderColor(colors.mint);
    if (onFocus) {
      onFocus();
    }
  };

  const handleBlur = () => {
    if (done) {
      setDotColor(colors.black);
    } else {
      setDotColor(colors.gray);
    }
    setBorderColor('#f2f2f3');
    if (onBlur) {
      onBlur();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: targetValue } = e.currentTarget;
    const regexp = /^-?\d*\.?\d*$/;
    if (onlyNumber && !regexp.test(targetValue) && !!targetValue) {
      return;
    }
    if (!!targetValue) {
      setDone(true);
    } else {
      setDone(false);
    }

    handler(targetValue);
  };

  const getBgColor = () => {
    if (error) {
      return '#ffbfd2';
    }
    if (bgColor) {
      return bgColor;
    }

    return '#fff';
  };

  return (
    <React.Fragment>
      {label && <Label color={labelColor ? labelColor : 'black'}>{props.label}</Label>}
      {required && <Sup>*</Sup>}
      <InputWrapper width={width}>
        {hasDot && <Dot color={dotColor} error={error} right={right} />}
        <StyledInput
          type={type}
          neumorphism={neumorphism}
          autoComplete={autocomplete}
          onChange={handleChange}
          color={borderColor}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyPress={onKeyPress}
          placeholder={placeholder}
          hasDot={hasDot}
          error={error}
          right={right}
          value={value}
          margin={margin}
          bgColor={getBgColor()}
          height={height}
          fontSize={fontSize}
        />
      </InputWrapper>
    </React.Fragment>
  );
};

const TextArea = (props: InputProps) => {
  const {
    error,
    right,
    label,
    placeholder,
    value,
    handler,
    hasDot,
    margin,
    required,
    bgColor,
    resize,
    height,
    fontSize,
    neumorphism,
  } = props;
  const [done, setDone] = useState(false);
  const [dotColor, setDotColor] = useState(colors.gray);
  const [borderColor, setBorderColor] = useState('#f2f2f3');

  const handleFocus = () => {
    setDotColor(colors.mint);
    setBorderColor(colors.mint);
  };

  const handleBlur = () => {
    if (done) {
      setDotColor(colors.black);
    } else {
      setDotColor(colors.gray);
    }
    setBorderColor('#f2f2f3');
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value: targetValue } = e.currentTarget;
    if (!!targetValue) {
      setDone(true);
    } else {
      setDone(false);
    }
    handler(targetValue);
  };

  const getBgColor = () => {
    if (error) {
      return '#ffbfd2';
    }
    if (bgColor) {
      return bgColor;
    }

    return '#fff';
  };

  return (
    <React.Fragment>
      {label && <Label color={'black'}>{props.label}</Label>}
      {required && <Sup>*</Sup>}
      <InputWrapper>
        {hasDot && <Dot color={dotColor} error={error} right={right} />}
        <StyledTextArea
          onChange={handleChange}
          color={borderColor}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          error={error}
          right={right}
          value={value}
          margin={margin}
          bgColor={getBgColor()}
          resize={resize}
          height={height}
          neumorphism={neumorphism}
          fontSize={fontSize}
        />
      </InputWrapper>
    </React.Fragment>
  );
};

export { TextInput, TextArea };
