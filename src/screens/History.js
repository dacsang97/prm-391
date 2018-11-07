import React, { Component } from 'react'
import { TextInput, View, StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    backgroundColor: '#37474f',
  },
  allSearch: {
    marginLeft: 10,
    marginRight: 10,
  },
  textSearch: {
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: '#212121',
    backgroundColor: '#212121',
    height: 30,
    paddingLeft: 10,
  },
  checkHistory: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    marginBottom: 15,
  },
  rightHistory: {
    alignItems: 'flex-end',
  },
  priceHistory: {
    color: '#1976d2',
  },
  incMoney: {
    color: '#ff3d00',
  },
  month: {
    color: '#e0e0e0',
  },
  years: {
    color: '#9e9e9e',
  },
})
export default class History extends Component {
  constructor(props) {
    super(props)
    // eslint-disable-next-line react/no-unused-state
    this.state = { text: '' }
  }

  render() {
    return (
      <View style={styles.Screen}>
        <View style={styles.allSearch}>
          <TextInput
            style={styles.textSearch}
            placeholderTextColor="#9e9e9e"
            placeholder="e.g .."
            // eslint-disable-next-line react/no-unused-state
            onChangeText={text => this.setState({ text })}
          />
        </View>
        <View style={styles.checkHistory}>
          <View style={styles.leftHistory}>
            <Text style={styles.priceHistory}>$ 66888.66</Text>
            <Text style={styles.incMoney}>-$ 0.00</Text>
          </View>
          <View style={styles.rightHistory}>
            <Text style={styles.month}>NOVEMBER</Text>
            <Text style={styles.years}>2018</Text>
          </View>
        </View>
      </View>
    )
  }
}

// skip this line if using Create React Native App
