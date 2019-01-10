/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import Card from './screens/card';
import Buttons from './screens/buttons';
import HorizontalList from './screens/horizontal_list';
import Register from './screens/register';

const MyDrawerNavigator = createDrawerNavigator({
  Button: {
    screen: Buttons,
  },
  Card: {
    screen: Card,
  },
  HorizontalList: {
    screen: HorizontalList,
    navigationOptions: {
      title: 'Horizontal List'
    }
  },
  Register: {
    screen: Register
  }
});

export default createAppContainer(MyDrawerNavigator);