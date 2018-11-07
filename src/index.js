import { createStackNavigator } from 'react-navigation'
import { Home, Test } from './screens'

export default createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Ahihi',
      },
    },
    Test: {
      screen: Test,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
)
