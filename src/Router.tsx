import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import ExampleCardsList from './components/ExampleCardsList';

const RouterComponent = () => (
  <Router>
    <Stack key="root">
      <Scene key="login" component={LoginForm} title="Login" />
      <Scene key="cards" component={ExampleCardsList} title="Cards" />
    </Stack>
  </Router>
);

export default RouterComponent;
