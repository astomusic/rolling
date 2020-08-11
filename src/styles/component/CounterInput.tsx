import * as React from 'react';
import styled from 'styled-components';

import { Body } from 'root/styles/common/Typography';
import SolidArrow from 'root/styles/component/SolidArrow';
import { media } from '../style';

interface Props {
  count: number;
  callUp: () => void;
  callDown: () => void;
}

const Wrapper = styled.div`
  position: relative;
  border-radius: 2px;
  border: solid 1px #f2f2f3;
  padding: 15px 16px;
  background-color: #fff;
`;

const StyledBody = styled(Body)`
  margin-right: 25px;
  font-size: 14px;
  color: #81858e;
  overflow: hidden;
  ${media.mobile`
    font-size: 14px;
  `}
`;

const UpArea = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 50%;
  width: 50%;
`;

const DownArea = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 50%;
  width: 50%;
`;

const CounterInput = ({ count, callUp, callDown }: Props) => {
  const handleCountUp = () => {
    callUp();
  };
  const handleCountDown = () => {
    callDown();
  };

  return (
    <Wrapper>
      <StyledBody>{count}</StyledBody>
      <UpArea onClick={handleCountUp}>
        <SolidArrow direction={'up'} right={20} top={16} />
      </UpArea>
      <DownArea onClick={handleCountDown}>
        <SolidArrow direction={'down'} right={20} top={3} />
      </DownArea>
    </Wrapper>
  );
};

export default CounterInput;
