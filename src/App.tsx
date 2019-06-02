import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';
import reducers from './reducers';
import ExampleCardsList from './components/ExampleCardsList';

interface Props {}
export default class App extends Component<Props> {
  store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  render() {
    return (
      <Provider store={this.store}>
        <View>
          <Header headerText="AppName" />
          <LoginForm />
        </View>
      </Provider>
    );
  }
};
