import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

import { media } from 'root/styles/style';

import { Welcome } from './pages';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  user-select: none;
  overflow: hidden;
`;

const Rolling = () => {
  const match = useRouteMatch();

  return (
    <Container>
      <Switch>
        <Route path={`${match.path}`} component={Welcome} />
      </Switch>
    </Container>
  );
};

export default Rolling;
