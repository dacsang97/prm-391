// import React from 'react'
import { createStackNavigator } from 'react-navigation'
// eslint-disable-next-line import/named
import { Home, Test, HomePage, History } from './screens'

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
  History: {
    screen: History,
  },
})
