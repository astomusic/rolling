import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import { Title } from 'root/styles/common/Typography';
import { media } from 'root/styles/style';

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

const roll = (deg: string) => keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(${deg});
  }
`;

const Wrapper = styled.div`
  display: flex;
  ${media.mobile`
    flex-wrap: wrap;
    justify-content: center;
  `}
`;

const BoardWrapper = styled.div`
  display: flex;
  ${media.mobile`
    order: 1;
  `}
`;

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

  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

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

  const handleRoll = () => {
    setMatched('');
    const random = getRandomNumber(3600, 3960);
    setRandomDegree(random);
    setAnimation('roll');
    setTimeout(checkMatched(random), 3000);
  };

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
