import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Button, Card, CardSection, Field, Spinner } from './common';

export interface LoginFormState {
  email: string;
  password: string;
  error: string;
  loading: boolean;
}

class LoginForm extends Component<{}, LoginFormState> {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });
    fetch('http://192.168.86.165:3000/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: password })
    })
      .then(this.handleLoginResponse.bind(this))
      .catch(this.onLoginFail.bind(this));
  }

  handleLoginResponse(response: Response) {
    if (response.ok) this.onLoginSuccess();
    else throw '';
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false, password: '' });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Field
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Field
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>{this.state.error}</Text>

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

export default LoginForm;
