import React, { useState } from 'react';
import styled from 'styled-components';

import { Body } from 'root/styles/common/Typography';
import Arrow from 'root/styles/component/Arrow';

interface Props {
  data: Array<{
    id: number;
    name: string;
  }>;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 8px 0 0 0;
`;

const Content = styled.div`
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 32px;
  border-radius: 2px;
  border: solid 1px #f2f2f3;
  margin-left: -4px;
`;

const ArrowWrapper = styled.div`
  padding-top: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 32px;
`;

const Slider = ({ data }: Props) => {
  const [selected, SetSelected] = useState(data[0]);

  const handleLeft = () => {
    const currentIndex = data.findIndex((item) => item.id === selected.id);
    const targetIndex = (currentIndex - 1) % data.length;

    SetSelected(data[targetIndex < 0 ? data.length - 1 : targetIndex]);
  };
  const handleRight = () => {
    const currentIndex = data.findIndex((item) => item.id === selected.id);
    const targetIndex = (currentIndex + 1) % data.length;
    SetSelected(data[targetIndex]);
  };

  return (
    <Wrapper>
      <ArrowWrapper onClick={handleLeft}>
        <Arrow size={8} direction={'left'} color={'#191919'} />
      </ArrowWrapper>
      <Content>
        <Body color={'black'}>{selected.name}</Body>
      </Content>
      <ArrowWrapper onClick={handleRight}>
        <Arrow size={8} direction={'right'} color={'#191919'} />
      </ArrowWrapper>
    </Wrapper>
  );
};

export default Slider;
