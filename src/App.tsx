import React from 'react';
import styled from 'styled-components';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Pages from './main/ts/constants/Pages';
import Home from './main/ts/pages/Home';
import OtherPage from './main/ts/pages/OtherPage';

const Root = styled.div`
  height: 100%;
  width: 100%;
  font-size: 1.2rem;
`;

const App: React.FC = () => (
  <Root>
    <Switch>
      <Route
        path={Pages.HOME}
        component={Home}
      />

      <Route
        path={Pages.OTHER_PAGE}
        component={OtherPage}
      />

      <Redirect
        from="/**"
        to={Pages.HOME}
      />
    </Switch>
  </Root>
);

export default App;
