import React from 'react'
import { View, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

export default ({ navigation }) => (
  <View>
    <Text>Home Screen</Text>
    <RectButton
      onPress={() => {
        navigation.navigate('Test')
      }}
    >
      <Text>Go to Test Screen</Text>
    </RectButton>
  </View>
)