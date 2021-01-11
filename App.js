import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import ReadStory from './screens/ReadStory';
import WriteStory from './screens/WriteStory';
import LoginScreen from './screens/LoginScreen';

const TabNavigator = createBottomTabNavigator({
  Write: {
    screen: WriteStory,
    navigationOptions: {
      tabBarIcon: () => (
        <Image source={require('./assets/write.png')} style={{width: 40, height: 40}} />
      )
    }
  },
  Read: {
    screen: ReadStory,
    navigationOptions: {
      tabBarIcon: () => (
        <Image source={require('./assets/read.png')} style={{width: 40, height: 40}} />
      )
    }
  }
});

const SwitchNavigator = createSwitchNavigator({
  LoginScreen: {
    screen: LoginScreen
  },
  TabNavigator: {
    screen: TabNavigator
  }
});

export default createAppContainer(SwitchNavigator);