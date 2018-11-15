import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoData from './components/videoData';
import { Dropdown, Grid, Menu, Segment } from 'semantic-ui-react';

const API_KEY = 'AIzaSyC2UYEzh3gTQpCjOqRfcYnFcXvsVWo23cc'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      videoList: [],
      googleRankedVideoList: [],
      selectedVideo: null,
      sortBy: '',
      options: [
        {
          value: 'no-sort',
          text: 'Default YouTube Ranking'
        },
        {
          value: 'title',
          text: 'Title'
        },
        {
          value: 'published-date',
          text: 'Published Date'
        }
      ]
    };
    this.searchVideos('LinusTechTips');
    this.sortVideos = this.sortVideos.bind(this);
  }

  searchVideos(searchString) {
    YTSearch({ key: API_KEY, term: searchString, maxResults: 50}, (videoList) => {
      this.setState({
        videoList: videoList,
        googleRankedVideoList: videoList.slice(),
        selectedVideo: videoList[0]
      });
    });
  }

  sortVideos(event, data) {
    var videoList = this.state.videoList;
    if (data.value === 'title') {
      videoList.sort((a, b) => {
        return a.snippet.title > b.snippet.title;
      });
    } else if (data.value === 'published-date') {
      videoList.sort((a, b) => {
        return a.snippet.publishedAt > b.snippet.publishedAt;
      });
    } else if (data.value === 'no-sort') {
      videoList = this.state.googleRankedVideoList.slice();
    }
    this.setState({
      sortBy: data.value,
      videoList: videoList,
    });
  }

  render() {
    return (
      <div className="App">
        <Segment inverted>
          Postman Youtube API Search with Client-Side Sorting
        </Segment>
        <Menu secondary>
          <Menu.Item>
            <SearchBar
              onSearchTermChange={searchString => this.searchVideos(searchString)}
            />
          </Menu.Item>
          <Menu.Item position='right'>
            <Dropdown
              button
              direction='left'
              placeholder='Sort By'
              options={this.state.options}
              value={this.state.sortBy}
              onChange={this.sortVideos}
            />
          </Menu.Item>
        </Menu>

        <Grid verticalAlign='middle'>
          <Grid.Column width={10}>
            <VideoData
              video={this.state.selectedVideo}
            />
          </Grid.Column>
          <Grid.Column width={6}>
            <VideoList
              onVideoSelect={selected => this.setState({
                selectedVideo: selected
              })
              }
              videoList={this.state.videoList}
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
