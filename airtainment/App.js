import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import MovieScreen from './screens/MovieScreen';
import MusicScreen from './screens/MusicScreen';
import TVScreen from './screens/TVScreen';

const MainNavigator = createBottomTabNavigator(
  {
    welcome: { screen: WelcomeScreen },
    main: {
      screen: createBottomTabNavigator({
        movie: { screen: MovieScreen },
        tv: { screen: TVScreen },
        music: { screen: MusicScreen }
      })
    }
  }
  // {
  //   navigationOptions: {
  //     tabBarVisible: false
  //   }
  // }
);

export default class App extends React.Component {
  render() {
    return <MainNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
