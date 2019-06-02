import React, { Component } from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import LoginForm from './components/auth/LoginForm';
import UserProfile from './components/auth/UserProfile';
import { logout } from './actions/AuthActions';
import { connect } from 'react-redux';
import { AuthActionsTypes } from './models/Actions.model';

class RouterComponent extends Component<{ logout: () => { type: AuthActionsTypes} }> {
  render() {
    return (
      <Router>
        <Stack key="root" hideNavBar>
          <Scene key="auth">
            <Scene key="login" component={LoginForm} title="Login" initial />
          </Scene>
          <Scene key="main">
            <Scene
              key="home"
              component={UserProfile}
              title="Welcome"
              rightTitle="Logout"
              onRight={this.props.logout}
              initial
            />
          </Scene>
        </Stack>
      </Router>
    );
  }
}

export default connect(
  undefined,
  { logout }
)(RouterComponent);
