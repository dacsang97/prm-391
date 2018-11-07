import React from 'react'
import { View, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

const Home = ({ navigation }) => (
  <View>
    <Text>Home Screen</Text>
    <RectButton
      onPress={() => {
        navigation.navigate('Test')
      }}
    >
      <Text>Go to Test Screen</Text>
    </RectButton>
    <RectButton
      onPress={() => {
        navigation.navigate('AddSubMoney', { isSub: false })
      }}
    >
      <Text>Go to Add Money Screen</Text>
    </RectButton>
  </View>
)

export default Home
