import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import { Title } from 'root/styles/common/Typography';
import { media } from 'root/styles/style';

// 변수로 받을 type 선언
interface RollingBoardProps {
  deg: string;
}

interface PieProps {
  color: string;
  deg: string;
}

interface InputProps {
  matched: boolean;
}

// 회전 animation을 위한 keyframes
const roll = (deg: string) => keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(${deg});
  }
`;

// 보드, 입력창을 감싸는 아이
const Wrapper = styled.div`
  display: flex;
  ${media.mobile`
    flex-wrap: wrap;
    justify-content: center;
  `}
`;

// 보드를 감싸는 아이
const BoardWrapper = styled.div`
  display: flex;
  ${media.mobile`
    order: 1;
  `}
`;

// 회전판
const RollingBoard = styled.div<RollingBoardProps>`
  width: 300px;
  height: 300px;
  background-color: red;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${({ deg }) => `rotate(${deg})`};
  border: 5px solid #fff;
  z-index: 2;
  margin: 20px;
  &.roll {
    animation: ${({ deg }) => roll(deg)} 3s ease-out;
  }
`;

// roll 버튼
const RollBtn = styled.div`
  width: 120px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  margin: 50px 0;
  border-radius: 10px;
  &:hover {
    background-color: #555;
  }
  ${media.mobile`
    margin: 20px 0;
  `}
`;

// 회전판 뒤에 6분할 영역
const Pie = styled.div<PieProps>`
  position: absolute;
  width: 350px;
  height: 350px;
  border-radius: 100%;
  clip-path: polygon(50% 0, 100% 0, 100% 21%, 50% 50%);
  background-color: ${({ color }) => color};
  transform: ${({ deg }) => `rotate(${deg})`};
  z-index: 1;
`;

// 입력창을 감싸는 아이
const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 30px;
  ${media.mobile`
    margin: 10px;
  `}
`;

// 입력창
const StyledInput = styled.input<InputProps>`
  border: ${({ matched }) => (matched ? '2px solid red' : '2px solid #ccc')};
  color: #666;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 20px;
  margin: 30px 0;
  border-radius: 10px;
  &::selection {
    background-color: #666;
    color: #fff;
  }
  ${media.mobile`
    margin: 3px 0;
    font-size: 14px;
    padding: 5px;
  `}
`;

const Welcome = () => {
  const [randomDegree, setRandomDegree] = useState(0);
  const [animation, setAnimation] = useState('');
  const [matched, setMatched] = useState('');

  // 랜덤으로 숫자를 뽑아주는 아이
  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  // 뽑은 숫자가 어디에 걸리는지 확인하는 아이
  const checkMatched = (target: number) => () => {
    const tempTarget = target - 3600;
    if (270 < tempTarget && tempTarget <= 330) {
      setMatched('one');
    } else if (330 < tempTarget || tempTarget <= 30) {
      setMatched('two');
    } else if (30 < tempTarget && tempTarget <= 90) {
      setMatched('three');
    } else if (90 < tempTarget && tempTarget <= 150) {
      setMatched('four');
    } else if (150 < tempTarget && tempTarget <= 210) {
      setMatched('five');
    } else if (210 < tempTarget && tempTarget <= 270) {
      setMatched('six');
    }
  };

  // 돌려주는 아이
  const handleRoll = () => {
    setMatched('');
    const random = getRandomNumber(3600, 3960);
    setRandomDegree(random);
    setAnimation('roll');
    setTimeout(checkMatched(random), 3000);
  };

  // 화면구성
  return (
    <React.Fragment>
      <Title
        size={'m'}
        color={'black'}
        weight={'bold'}
        padding={'10px 0 30px'}
        mobilePadding={'5px 0'}
      >
        {'Welcome to Rolling Board'}
      </Title>
      <Wrapper>
        <InputWrapper>
          <StyledInput matched={matched === 'six'} />
          <StyledInput matched={matched === 'five'} />
          <StyledInput matched={matched === 'four'} />
        </InputWrapper>
        <BoardWrapper>
          <RollingBoard deg={`${randomDegree}deg`} className={animation}>
            <Title size={20} color={'#fff'} weight={'bold'}>
              {'------------------------------->'}
            </Title>
          </RollingBoard>
          <Pie color={'#666'} deg={'0deg'} />
          <Pie color={'#111'} deg={'60deg'} />
          <Pie color={'#666'} deg={'120deg'} />
          <Pie color={'#111'} deg={'180deg'} />
          <Pie color={'#666'} deg={'240deg'} />
          <Pie color={'#111'} deg={'300deg'} />
        </BoardWrapper>
        <InputWrapper>
          <StyledInput matched={matched === 'one'} />
          <StyledInput matched={matched === 'two'} />
          <StyledInput matched={matched === 'three'} />
        </InputWrapper>
      </Wrapper>
      <RollBtn onClick={handleRoll}>
        <Title size={20} color={'#fff'} weight={'bold'}>
          {`Let's Roll`}
        </Title>
      </RollBtn>
    </React.Fragment>
  );
};

export default Welcome;
