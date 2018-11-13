import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';

const API_KEY = 'AIzaSyC2UYEzh3gTQpCjOqRfcYnFcXvsVWo23cc'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: []
    };
    this.searchVideos('LinusTechTips')
  }
  searchVideos(searchString) {
    YTSearch({key: API_KEY, term: searchString}, (data) => {
      this.setState({
        videoList: data
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
        <SearchBar/>
        <VideoList videoList={this.state.videoList}/>
      </div>
    );
  }
}

export default App;
