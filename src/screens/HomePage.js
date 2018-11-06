import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#37474f',
  },
  dateView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginRight: 20,
  },
  date: {
    color: '#e0e0e0',
    fontSize: 20,
  },
  time: {
    color: '#9e9e9e',
    fontSize: 20,
  },
  saveMoney: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  childMoney: {
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#212121',
    width: '45%',
    height: 50,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginLeft: 10,
    paddingRight: 10,
    backgroundColor: '#212121',
  },
  childEx: {
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#212121',
    width: '45%',
    height: 50,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 10,
    paddingRight: 10,
    backgroundColor: '#212121',
  },
  number: {
    color: '#e0e0e0',
    fontSize: 20,
  },
  income: {
    color: '#1976d2',
  },
  expense: {
    color: '#ff3d00',
  },
  allBalance: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    height: 50,
    backgroundColor: '#212121',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#212121',
    paddingRight: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    justifyContent: 'center',
  },
  printed: {
    flex: 8,
    marginTop: 30,
    marginLeft: 10,
  },
  pinned: {
    color: 'grey',
  },
})
export default () => (
  <View style={styles.screen}>
    <View style={styles.dateView}>
      <View>
        <Text style={styles.date}>Friday,</Text>
      </View>
      <View>
        <Text style={styles.time}>November 2</Text>
      </View>
    </View>
    <View style={styles.saveMoney}>
      <View style={styles.childMoney}>
        <View>
          <Text style={styles.number}>$ 66888.66</Text>
        </View>
        <View>
          <Text style={styles.income}>INCOME</Text>
        </View>
      </View>
      <View style={styles.childEx}>
        <View>
          <Text style={styles.number}>-$ 000.00</Text>
        </View>
        <View>
          <Text style={styles.expense}>EXPENSE</Text>
        </View>
      </View>
    </View>
    <View style={styles.allBalance}>
      <View>
        <Text style={styles.number}>$ 66888.66</Text>
      </View>
      <View>
        <Text>BALANCE</Text>
      </View>
    </View>
    <View style={styles.printed}>
      <Text style={styles.pinned}>PINNED</Text>
    </View>
  </View>
)
