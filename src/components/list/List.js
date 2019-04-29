import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native'
import axios from 'axios'
import WatchingTV from '../img/watchingTV.jpeg'
import Search from './components/Search.js'
import SeasonPicker from './components/SeasonPicker.js'
import Episode from './components/Episode.js'

let width = Dimensions.get('window').width
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  flatlistWrapper: {
    height: 350,
    width: 265,
    alignSelf: 'flex-end'
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5
  },
  searchItem: {
    borderWidth: 1,
    borderColor: 'grey',
    marginHorizontal: 5,
    borderRadius: 5,
    paddingVertical: 5,
    alignSelf: 'center',
    width: 152,
    minHeight: 280
  },
  listEmpty: {
    textAlign: 'center',
    marginTop: 300,
    fontWeight: 'bold'
  }
})

export default class List extends React.Component {
  constructor () {
    super()
    this.getDetails = this.getDetails.bind(this)
    this.clearErr = this.clearErr.bind(this)
    this.state = {
      searchResults: [],
      query: '',
      err: null
    }
  }
  clearErr () {
    if (this.state.err) {
      this.setState({ err: null })
    }
  }

  getDetails (id, season, episode) {
    let url
    let data
    if (episode) {
      url = `http://www.omdbapi.com/?apikey=92582e55&i=${episode}`
    } else if (season) {
      url = `http://www.omdbapi.com/?apikey=92582e55&i=${id}&Season=${season}`
      data = 'Episodes'
    } else {
      url = `http://www.omdbapi.com/?apikey=92582e55&s=${this.state.query}`
      data = 'Search'
    }
    axios.get(url)
      .then(res => {
        if (res.data.Error) {
          this.setState({ err: res.data.Error, query: '' })
        } else if (res.data.Episodes) {
          let episodeReqs = []
          for (var i = 0; i < res.data.Episodes.length; i++) {
            let result = res.data.Episodes[i]
            let url = `http://www.omdbapi.com/?apikey=92582e55&i=${result.imdbID}`
            let req = axios.get(url)
            episodeReqs.push(req)
          }
          axios.all(episodeReqs)
            .then(results => {
              let data = []
              for (var i = 0; i < results.length; i++) {
                data.push(results[i].data)
              }
              this.setState({ searchResults: data })
            })
        } else {
          this.setState({ searchResults: res.data[data], query: '' })
        }
      }
      ).catch(err => console.log(err))
  }

  render () {
    return (
      <View styles={styles.container}>
        <Text style={styles.err}>{this.state.err}</Text>
        <Search
          getDetails={this.getDetails}
          query={this.state.query}
          updateText={(text) => this.setState({ query: text })}
        />
        { this.state.searchResults.length === 0
          ? <Image style={{ width: width, position: 'absolute', marginTop: 100 }} source={WatchingTV} />
          : null}
        <View style={styles.flatlistWrapper}>
          <FlatList
            data={this.state.searchResults}
            horizontal
            renderItem={({ item }) =>
              <View style={styles.searchItem}>
                <Text style={styles.title}>{item.Title}</Text>
                <Image style={{ height: 150, width: 150 }} source={{ uri: item.Poster }} />
                { item.Plot
                  ? <Episode item={item} />
                  : item.Type === 'series' && item.Year.charCodeAt(4) === 8211
                    ? <View style={{ alignItems: 'center' }}>
                      <Text>{item.Year}</Text>
                      <SeasonPicker
                        item={item}
                        getDetails={this.getDetails} />
                    </View>
                    : <TouchableOpacity onPress={() => this.getDetails(item.imdbID, 1)}>
                      <View style={{ alignItems: 'center' }}>
                        <Text>Year: {item.Year}</Text>
                      </View>
                    </TouchableOpacity>
                }
              </View>
            }
            keyExtractor={(item, index) => item.imdbID}
          />
        </View>
      </View>
    )
  }
}
