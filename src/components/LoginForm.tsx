import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Button, Card, CardSection, Field, Spinner } from './common';
import { AuthState } from '../models/AuthState.model';
import { emailChanged, passwordChanged } from '../actions';
import { connect } from 'react-redux';
import { AppState } from '../models/AppState.model';

export interface LoginFormProps {
  authState: AuthState,
  emailChanged: ( text: string ) => { type: string, payload: string }
  passwordChanged: ( text: string ) => { type: string, payload: string }
};

class LoginForm extends Component<LoginFormProps, {}> {
  onLogin() {

  }

  onEmailChange(text:string): void {
    this.props.emailChanged(text);
  }

  onPasswordChange(text:string): void {
    this.props.passwordChanged(text);
  }

  renderButton() {
    if (this.props.authState.loading) {
      return <Spinner size="small" />;
    }

    return <Button onPress={this.onLogin.bind(this)}>Log in</Button>;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Field
            placeholder="user@gmail.com"
            label="Email"
            value={this.props.authState.email}
            onChangeText={email => this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Field
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.props.authState.password}
            onChangeText={password => this.onPasswordChange.bind(this)}
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

};

export default connect(null, { emailChanged, passwordChanged })(LoginForm);
  // state = { email: '', password: '', error: '', loading: false };

  // onButtonPress() {
  //   const { email, password } = this.state;

  //   this.setState({ error: '', loading: true });
  //   //TODO : take server url out to configuration file and change it to your ip address 
  //   fetch('http://192.168.86.165:3000/api/login', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ email: email, password: password })
  //   })
  //     .then(this.handleLoginResponse.bind(this))
  //     .catch(this.onLoginFail.bind(this));
  // }

  // handleLoginResponse(response: Response) {
  //   if (response.ok) this.onLoginSuccess();
  //   else throw '';
  // }

  // onLoginFail() {
  //   this.setState({ error: 'Authentication Failed', loading: false, password: '' });
  // }

  // onLoginSuccess() {
  //   this.setState({
  //     email: '',
  //     password: '',
  //     loading: false,
  //     error: ''
  //   });
  // }