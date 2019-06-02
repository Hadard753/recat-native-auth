import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import LoginForm from './components/auth/LoginForm';
import ExampleCardsList from './components/cards/ExampleCardsList';

const RouterComponent = () => {
    //TODO: implement on right
    return (
        <Router>
        <Stack key="root" hideNavBar>
          <Scene key="auth">
            <Scene key="login" component={LoginForm} title="Login" initial/>
          </Scene>
          <Scene key="main">
            <Scene
              key="cards"
              component={ExampleCardsList}
              title="Cards"
              rightTitle="Add"
              onRight={() => console.log('Client trying to create new card')}
              initial
            />
          </Scene>
        </Stack>
      </Router>
    );
};

export default RouterComponent;
