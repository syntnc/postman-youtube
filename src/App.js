import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoData from './components/videoData';

const API_KEY = 'AIzaSyC2UYEzh3gTQpCjOqRfcYnFcXvsVWo23cc'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      videoList: [],
      selectedVideo: null
    };
    this.searchVideos('LinusTechTips');
  }

  searchVideos(searchString) {
    YTSearch({ key: API_KEY, term: searchString}, (videoList) => {
      this.setState({
        videoList: videoList,
        selectedVideo: videoList[0]
      });
    });
  }
  
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <SearchBar
          onSearchTermChange={searchString => this.searchVideos(searchString)}
        />
        <VideoData
          video={this.state.selectedVideo}
        />
        <VideoList 
          onVideoSelect={selected => this.setState({
              selectedVideo: selected
            })
          }
          videoList={this.state.videoList}
        />
      </div>
    );
  }
}

export default App;
