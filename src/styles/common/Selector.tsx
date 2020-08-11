import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { clearfix } from 'root/styles/style';

import { Body } from 'root/styles/common/Typography';
import SolidArrow from 'root/styles/component/SolidArrow';
import { media } from '../style';

interface SelectorProps {
  options: Array<{ id: number | string; name: string }>;
  margin?: string;
  callback?: (id: number | string) => void;
  selectedOptionId?: number | string;
}

interface StateProps {
  margin?: string;
}

const Wrapper = styled.div<StateProps>`
  position: relative;
  ${({ margin }) => margin && `margin: ${margin}`};
`;

const Select = styled.div`
  position: relative;
  border-radius: 2px;
  border: solid 1px #f2f2f3;
  background-color: #fff;
  padding: 15px 16px;
  cursor: pointer;
`;

const Options = styled.div`
  position: absolute;
  box-sizing: border-box;
  z-index: 9998;
  width: 100%;
  border-right: solid 1px #f2f2f3;
  border-left: solid 1px #f2f2f3;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  max-height: 300px;
  overflow: scroll;
  ${clearfix}
`;

const Option = styled.div`
  border-bottom: solid 1px #f2f2f3;
  background-color: #fff;
  padding: 15px 16px;
  &:hover {
    background-color: #f2f2f3;
  }
`;

const StyledBody = styled(Body)`
  margin-right: 25px;
  font-size: 14px;
  letter-spacing: 0;
  overflow: hidden;
  ${media.mobile`
    font-size: 14px;
  `}
`;

const Selector = ({ options, callback, margin, selectedOptionId }: SelectorProps) => {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  useEffect(() => {
    if (callback) {
      callback(selectedOptionId || selected.id);
    }
  }, []);

  useEffect(() => {
    setSelected(options.find((item) => item.id === selectedOptionId) || options[0]);
  }, [selectedOptionId]);

  const handleClick = () => {
    setActive(!active);
  };

  const handleSelect = (id: number | string) => () => {
    setActive(false);

    if (selected.id !== id) {
      const selectedItem = options.find((item) => item.id === id);
      setSelected(selectedItem);
      if (!!callback) {
        callback(id);
      }
    }
  };

  return (
    <Wrapper margin={margin}>
      <Select onClick={handleClick}>
        <StyledBody color={'#333333'}>{selected.name}</StyledBody>
        <SolidArrow direction={active ? 'up' : 'down'} right={20} top={23} />
      </Select>
      {active && (
        <Options>
          {options.map((item) => {
            if (item.id !== selected.id) {
              return (
                <Option key={item.id} onClick={handleSelect(item.id)}>
                  <StyledBody color={'gray'}>{item.name}</StyledBody>
                </Option>
              );
            }
          })}
        </Options>
      )}
    </Wrapper>
  );
};

export default Selector;
