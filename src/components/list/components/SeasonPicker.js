import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Picker } from 'react-native'

const styles = StyleSheet.create({
  picker: { height: 150, marginTop: -80, marginBottom: 35, width: 100 },
  seasonCount: { textAlign: 'center', fontWeight: 'bold' }
})

export default class SeasonPicker extends React.Component {
  constructor (props) {
    super(props)
    this.seasons = this.seasons.bind(this)
    this.state = {
      selectedSeason: 'Season'
    }
  }

  seasons (years) {
    let rangeArr = years.split(years.charAt(4))
    if (rangeArr.length === 2) {
      let seasons = ['Seasons']
      for (let i = 1; i <= parseInt(rangeArr[1]) - parseInt(rangeArr[0]) + 1; i++) {
        seasons.push(i)
      }
      return seasons
    }
    return []
  }

  render () {
    return (
      <View>
        <Text style={styles.seasonCount}>{this.seasons(this.props.item.Year).length - 1} Seasons</Text>
        <Picker
          style={styles.picker}
          onValueChange={val => this.setState({ selectedSeason: val }, this.props.getDetails(this.props.item.imdbID, val))}
          selectedValue={this.selectedSeason} >
          {this.seasons(this.props.item.Year).map(season =>
            <Picker.Item
              key={season}
              label={season.toString()}
              value={season} />
          )}
        </Picker>
      </View>
    )
  }
}
