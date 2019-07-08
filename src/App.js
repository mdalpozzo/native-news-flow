/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Main from 'Components/Main';


// const AppContainer: NavigationContainer = createAppContainer(Navigator);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Main></Main>
      </Provider>
    );
  }
}