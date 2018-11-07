import { createStackNavigator } from 'react-navigation'
import { Home, Test, AddSubMoney } from './screens'

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
  AddSubMoney: {
    screen: AddSubMoney,
  },
})
