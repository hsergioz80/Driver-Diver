import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RoutesScreen from '../screens/RoutesScreen';
import MapScreen from '../screens/MapScreen';
import SignInScreen from '../screens/SignInScreen';

const SignInStack = createStackNavigator({
    SignIn: SignInScreen,
});

SignInStack.navigationOptions = {
    tabBarLabel: 'SignIn',
    pools: 'RoutesScreen'
};

const MapStack = createStackNavigator({
    Maps: MapScreen,
});

MapStack.navigationOptions = {
    tabBarLabel: 'Maps',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-information-circle'
            }
        />
    ),
};

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  SignIn: SignInScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Driver Diver'
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Slack',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const RoutesStack = createStackNavigator({
  Routes: RoutesScreen,
  Maps: MapScreen,
});

RoutesStack.navigationOptions = {
  tabBarLabel: 'Pools',
  tabBarIcon: ({ focused }) => (
      <TabBarIcon
          focused={focused}
          name={Platform.OS === 'ios' ? 'ios-options' : 'md-car'}
      />
  ),
};




export default createBottomTabNavigator({
    Home: { screen: HomeStack, navigationOptions:{tabBarVisible: false} },
  //HomeStack,
  RoutesStack,
  LinksStack,
  SettingsStack,
    MapStack
});
