import React from 'react';
import styled from 'styled-components';

import { Text } from 'root/styles/common/Typography';

export interface IPropsCheckBox {
  id: string;
  label?: string;
  value?: any;
  checked?: boolean;
  count?: number;
  disabled?: boolean;
  onClick?: (value: any) => void;
  color?: string;
  error?: boolean;
  masking?: boolean;
}

interface CheckboxGroupOption {
  label: string;
  value: string | number;
}
interface IPropsCheckboxGroup {
  options: CheckboxGroupOption[];
  max?: number;
  onChange?: any;
  checkedList: string[];
}

interface CheckboxContainerProps {
  masking?: boolean;
  error?: boolean;
}

const CheckboxContainer = styled.div<CheckboxContainerProps>`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 20px;
  vertical-align: middle;

  input {
    display: none;
  }

  label {
    text-indent: 18px;
    white-space: pre;
  }

  input + label {
    position: relative;
    display: inline-block;
    width: 14px;
    height: 14px;
    background-color: ${({ error }) => (error ? '#fff5f8' : '#fff')};
    border-radius: 2px;
    border: solid 1px;
    border-color: ${({ error }) => (error ? '#ff4581' : '#b8b8b8')};
    cursor: pointer;
    user-select: none;
  }

  input:checked + label::after {
    content: '';
    position: absolute;
    left: 2px;
    top: 7px;
    background: ${({ masking }) => (masking ? '#fff' : '#25dfcb')};
    box-shadow: ${({ masking }) =>
      masking
        ? '2px 0 0 #fff, 4px 0 0 #fff, 4px -2px 0 #fff, 4px -4px 0 #fff, 4px -6px 0 #fff, 4px -8px 0 #fff'
        : '2px 0 0 #25dfcb, 4px 0 0 #25dfcb, 4px -2px 0 #25dfcb, 4px -4px 0 #25dfcb, 4px -6px 0 #25dfcb, 4px -8px 0 #25dfcb'};
    width: 2px;
    height: 2px;
    transform: rotate(45deg);
  }

  input:checked + label {
    ${({ masking }) =>
      masking &&
      `
        background-color: #1b7fcb;
      border-color: #1b7fcb;
    `};
  }

  input:disabled + label {
    color: #d7d8dd;
    background-color: #d7d8dd;
    cursor: not-allowed;
  }
  .default {
    flex: 1;
  }
`;

const ColorCircle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  margin-left: 4px;
  padding: 0 !important;
`;

const Checkbox = ({
  count,
  label,
  value,
  id,
  onClick,
  checked,
  disabled,
  color,
  error,
  masking,
}: IPropsCheckBox) => {
  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!disabled) {
      onClick(value);
    }
  };

  return (
    <CheckboxContainer onClick={handleClick} error={error} masking={masking}>
      <div className="default">
        <input readOnly type="checkbox" id={id} checked={checked} disabled={disabled} />
        <label htmlFor={id}>
          <Text color={'black'}>{label}</Text>
        </label>
      </div>
      {count && <Text color={'black'}>{count}</Text>}
      {color && <ColorCircle color={color} />}
    </CheckboxContainer>
  );
};

const CheckboxGroup = (props: IPropsCheckboxGroup) => {
  const { options, max, onChange, checkedList } = props;
  let children;

  const getOptions = (defaultOptions) => {
    return defaultOptions.map((option) => {
      if (typeof option === 'string') {
        return {
          label: option,
          value: option,
        };
      }
      return option;
    });
  };

  const handleClick = (value) => {
    const index = checkedList.indexOf(value);

    const selectedList = [...checkedList];
    if (index === -1) {
      selectedList.push(value);
    } else {
      selectedList.splice(index, 1);
    }

    if (onChange) {
      onChange(selectedList);
    }
  };

  if (options && options.length > 0) {
    children = getOptions(options).map((option) => (
      <Checkbox
        key={option.value.toString()}
        id={option.label}
        label={option.label}
        value={option.value}
        checked={checkedList.includes(option.value)}
        disabled={
          (checkedList.length >= max && !checkedList.includes(option.value)) || option.count === 0
        }
        onClick={handleClick}
        count={option.count}
        color={option.color}
      />
    ));
  }

  return <div {...props}>{children}</div>;
};

export { Checkbox, CheckboxGroup };
