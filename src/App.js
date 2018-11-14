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
      googleRankedVideoList: [],
      selectedVideo: null
    };
    this.searchVideos('LinusTechTips');
    this.sortVideos = this.sortVideos.bind(this);
  }

  searchVideos(searchString) {
    YTSearch({key: API_KEY, term: searchString}, (videoList) => {
      this.setState({
        videoList: videoList,
        googleRankedVideoList: videoList.slice(),
        selectedVideo: videoList[0]
      });
    });
  }

  sortVideos(event) {
    var videoList = this.state.videoList;
    if (event.target.value == 'title') {
      videoList.sort((a, b) => {
        return a.snippet.title > b.snippet.title;
      });
    } else if (event.target.value == 'published-date') {
      videoList.sort((a, b) => {
        return a.snippet.publishedAt > b.snippet.publishedAt;
      });
    } else if (event.target.value == 'no-sort') {
      videoList = this.state.googleRankedVideoList.slice();
    }
    this.setState({
      sortBy: event.target.value,
      videoList: videoList,
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
        <form action="">
          <div>
            <select name="" id="" value={this.state.sortBy} onChange={this.sortVideos}>
              <option value="no-sort">Select Sort Rule</option>
              <option value="title">Title</option>
              <option value="published-date">Published Date</option>
            </select>
          </div>
        </form>
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
