import React from 'react'
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions } from 'react-native'

let width = Dimensions.get('window').width
const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'blue',
    borderRadius: 5,
    height: 30,
    width: 100
  },
  btnText: {
    marginTop: 5,
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  search: {
    width: width - 160,
    maxHeight: 30,
    minHeight: 30,
    borderColor: 'grey',
    borderWidth: 2,
    paddingLeft: 5,
    borderRadius: 5
  },
  searchBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width,
    paddingHorizontal: 20
  },
  err: {
    color: 'red',
    width: width - 40,
    alignSelf: 'center'
  }
})

const Search = (props) => {
  return (
    <View style={styles.searchBox}>
      <TextInput
        onFocus={this.clearErr}
        value={props.query}
        style={styles.search}
        onChangeText={props.updateText}
        placeholder={'What would you like to watch?'}
        placeholderTextColor={'darkgrey'} />
      <TouchableOpacity
        disabled={props.query.length === 0}
        style={styles.btn}
        onPress={props.getDetails}>
        <Text style={styles.btnText}>Search</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Search
