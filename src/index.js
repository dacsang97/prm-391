import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { Home, Test, HomePage } from './screens'

export default createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Ahihi',
    },
  },
  Test: {
    screen: Test,
  },
  HomePage: {
    screen: HomePage,
  },
})
