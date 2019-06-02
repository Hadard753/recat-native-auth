import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Button, Card, CardSection, Field, Spinner } from './common';
import { AuthState } from '../models/AuthState.model';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { AppState } from '../models/AppState.model';

export interface LoginFormProps {
  authState: AuthState,
  emailChanged: ( text: string ) => { type: string, payload: string }
  passwordChanged: ( text: string ) => { type: string, payload: string }
  loginUser: ( email: string, password: string ) => any
};

class LoginForm extends Component<LoginFormProps, {}> {
  onLogin() {
    const {email, password} = this.props.authState;
    this.props.loginUser(email, password);
  }

  renderButton() {
    console.log("rendering..");
    if (this.props.authState.loading) {
      return <Spinner size="small" />;
    }

    return <Button onPress={this.onLogin.bind(this)}>Log in</Button>;
  }

  render() {
    console.log("hi");
    return (
      <Card>
        <CardSection>
          <Field
            placeholder="user@gmail.com"
            label="Email"
            value={this.props.authState.email}
            onChangeText={email => this.props.emailChanged(email)}
          />
        </CardSection>

        <CardSection>
          <Field
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.props.authState.password}
            onChangeText={password => this.props.passwordChanged(password)}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>{this.props.authState.error}</Text>

        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
});

const mapStateToProps = (state: AppState) => {
    return { authState: state.authState };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
