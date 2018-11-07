import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { RectButton, ScrollView } from 'react-native-gesture-handler'
import { BLACK_DARKER } from '../constants/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK_DARKER,
  },
})

class Home extends PureComponent {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll({ nativeEvent }) {
    const { navigation } = this.props
    const {
      contentOffset: { y },
    } = nativeEvent
    if (y > 50) {
      navigation.navigate('Test')
    } else if (y < -50) {
      navigation.navigate('Test')
    }
  }

  render() {
    const { navigation } = this.props
    return (
      <ScrollView
        style={styles.container}
        onScrollBeginDrag={() => {
          console.log('xxx')
        }}
        onScrollEndDrag={() => {
          console.log('yyy')
        }}
        onScroll={this.handleScroll}
        scrollEventThrottle={16}
      >
        <Text>Home Screen</Text>
        <RectButton
          onPress={() => {
            navigation.navigate('Test')
          }}
        >
          <View>
            <Ionicons name="ios-microphone" />
            <Text>Go to Test Screen</Text>
          </View>
        </RectButton>
      </ScrollView>
    )
  }
}

export default Home
