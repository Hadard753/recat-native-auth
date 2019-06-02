import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import Router from './Router';

export default class App extends Component {
  store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  render() {
    return (
      <Provider store={this.store}>
          <Router />
      </Provider>
    );
  }
};
