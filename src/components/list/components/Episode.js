import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions } from 'react-native'
import Stars from 'react-native-stars'
import FullStar from '../../img/starFilled.png'
import HalfStar from '../../img/starHalf.png'
import EmptyStar from '../../img/starEmpty.png'

let width = Dimensions.get('window').width
const styles = StyleSheet.create({
  episode: {
    width: width - 40,
    paddingHorizontal: 5
  },
  details: {
    width: 140,
    height: 140
  }
})

const Episode = (props) => {
  return (
    <View style={styles.episode}>
      <ScrollView style={styles.details}>
        <View>
          <Text>{props.item.Plot}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text>Rating: </Text>
            <Stars
              starSize={18}
              count={5}
              display={parseFloat(props.item.imdbRating) / 2}
              fullStar={FullStar}
              halfStar={HalfStar}
              emptyStar={EmptyStar} />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold' }}>Episode: </Text>
            <Text>{props.item.Episode}</Text>
          </View>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <Text style={{ fontWeight: 'bold' }}>Released: </Text>
            <Text>{props.item.Released}</Text>
          </View>
        </View>
        {props.item.Writer !== 'N/A'
          ? <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <Text style={{ fontWeight: 'bold' }}>Written by: </Text>
            <Text>{props.item.Writer}</Text>
          </View>
          : null}
        {props.item.Director !== 'N/A'
          ? <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <Text style={{ fontWeight: 'bold' }}>Directed by: </Text>
            <Text>{props.item.Director}</Text>
          </View>
          : null}
      </ScrollView>
    </View>
  )
}
export default Episode
