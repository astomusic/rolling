import * as React from 'react';
import styled from 'styled-components';

import colors from '../colors';

interface Props {
  minus?: boolean;
}

const AddWrapper = styled.div<Props>`
  display: inline-block;
  border: ${({ minus }) => (minus ? `1px solid ${colors.red}` : `1px solid ${colors.mint}`)};
  border-radius: 50%;
`;

const Inner = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13px;
  height: 13px;
  font-size: 13px;
  color: ${({ minus }) => (minus ? `${colors.red}` : `${colors.mint}`)};
`;

const PlusMinus = ({ minus }: Props) => {
  return (
    <AddWrapper minus={minus}>
      <Inner minus={minus}>{minus ? '-' : '+'}</Inner>
    </AddWrapper>
  );
};

export default PlusMinus;
