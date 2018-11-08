import React, { Component } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons'
import { TextInput, View, StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    backgroundColor: '#37474f',
  },
  allSearch: {
    marginLeft: 5,
    marginRight: 5,
  },
  textSearch: {
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: '#212121',
    backgroundColor: '#212121',
    height: 30,
    paddingLeft: 10,
    color: 'white',
  },
  checkHistory: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    marginBottom: -10,
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
  cash: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#212121',
    backgroundColor: '#212121',
    height: 50,
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  dateContent: {
    flex: 8,
    marginLeft: 5,
  },
  childCash: {
    alignItems: 'flex-end',
    marginRight: 10,
  },
  moneyCash: {
    color: '#e0e0e0',
    fontSize: 20,
  },
  titleCash: {
    color: '#e0e0e0',
  },
  iconMoney: {
    marginLeft: 10,
    marginTop: 10,
  },
  dateTextContent: {
    color: '#9e9e9e',
    fontSize: 12,
    marginTop: 5,
  },
  iconLeft: {
    flex: 1,
    marginLeft: 5,
    marginBottom: -20,
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
        <View style={styles.cash}>
          <View style={styles.iconMoney}>
            <Ionicons name="md-search" size={32} color="#9e9e9e" />
          </View>
          <View style={styles.childCash}>
            <Text style={styles.moneyCash}>$ 66888.666</Text>
            <Text style={styles.titleCash}>CASH</Text>
          </View>
        </View>
        <View style={styles.dateContent}>
          <Text style={styles.dateTextContent}>Saturday, November 3, 2018</Text>
        </View>
        <View style={styles.iconLeft}>
          <Ionicons name="ios-arrow-dropleft-circle" size={32} color="#9e9e9e" />
        </View>
      </View>
    )
  }
}

// skip this line if using Create React Native App
