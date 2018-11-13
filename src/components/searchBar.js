import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }
  render() {
    return (
      <input
        value = {this.state.searchTerm}
        onChange = {this.onInputChange}
      />
    )
  }
}

export default SearchBar;