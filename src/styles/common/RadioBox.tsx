import React from 'react';
import styled from 'styled-components';

import { Text } from 'root/styles/common/Typography';

interface Props {
  name: string;
  text: string;
  id: string;
  checked?: boolean;
  width?: string;
  onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
}

interface RadioBoxContainerProps {
  width?: string;
}

const RadioBoxContainer = styled.div<RadioBoxContainerProps>`
  display: block;
  ${({ width }) => width && `width: ${width}`};
  height: 27px;

  input {
    display: none;
  }

  label {
    text-indent: 32px;
    white-space: pre;
  }

  input + label {
    position: relative;
    display: flex;
    width: 27px;
    height: 27px;
    background-color: #fff;
    border: solid 3px #e0e0e0;
    border-radius: 50%;
    cursor: pointer;
    user-select: none;
    box-sizing: border-box;
  }

  input:checked + label::after {
    content: '';
    position: absolute;
    left: 3px;
    top: 3px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #3c4e6c;
  }

  input:disabled + label {
    color: #d7d8dd;
    background-color: #d7d8dd;
    cursor: not-allowed;
  }
`;

const RadioBox = ({ checked, text, name, id, width, onInput, onChange }: Props) => {
  return (
    <RadioBoxContainer width={width}>
      <input
        type="radio"
        name={`radio_${name}`}
        id={`radio_${id}`}
        onInput={onInput}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={`radio_${id}`}>
        <Text size={18} color={'#3c4e6c'} padding={'0 0 0 0'}>
          {text}
        </Text>
      </label>
    </RadioBoxContainer>
  );
};

export default RadioBox;
