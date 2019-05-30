/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Header } from './components/common/Header';
import { Card } from './components/common/Card';
import { CardSection } from './components/common/CardSection';
import { Button } from './components/common/Button';
import { Field } from './components/common/Field';
import { Spinner } from './components/common/Spinner';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Header headerText="AppName"/>
        <Card>
          <CardSection> 
            <Text style={styles.welcome}>Welcome to React Native!</Text>
          </CardSection>
          <CardSection>
            <Text style={styles.instructions}>To get started, edit App.tsx</Text>
            <Text style={styles.instructions}>{instructions}</Text>
          </CardSection>
          <CardSection>
            <Field
              label="Email"
              placeholder="user@gmail.com"
              key="1"
              onChangeText={(text) => console.log(text)}
              value="1234"
            />
          </CardSection>
          <CardSection>
            <Spinner />
          </CardSection>
          <CardSection>
            <Button>Press Me!</Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});