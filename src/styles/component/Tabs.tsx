import React, { useState } from 'react';
import styled from 'styled-components';

import { Text } from 'root/styles/common/Typography';

interface Props {
  data: Array<{ id: number; name: string }>;
  callback?: (id: number) => void;
}

interface TabProps {
  active?: boolean;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 8px 0 0 0;
`;

const Tab = styled.div<TabProps>`
  height: 40px;
  width: 100%;
  border-radius: 2px;
  border: ${({ active }) => (active ? '1px solid #212121' : '1px solid #f2f2f3')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  font-size: 14px;
`;

const Tabs = ({ callback, data }: Props) => {
  const [active, setActive] = useState(null);

  const handleClick = (id: number) => () => {
    setActive(id);
    if (!!callback) {
      callback(id);
    }
  };
  return (
    <Wrapper>
      {data.map((item) => (
        <Tab key={item.id} active={item.id === active} onClick={handleClick(item.id)}>
          <Text color={'black'}>{item.name}</Text>
        </Tab>
      ))}
    </Wrapper>
  );
};

export default Tabs;
