import React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'
import List from '../../components/list/List.js'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  appName: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 18,
    fontWeight: 'bold'
  }
})

export default class Home extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.appName}>Whatchu Watchin</Text>
        <List />
      </View>
    )
  }
}
