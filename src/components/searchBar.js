import React from 'react'
import { Input } from 'semantic-ui-react'

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
    this.props.onSearchTermChange(event.target.value);
  }
  render() {
    return (
      <Input
        icon = 'search'
        size = 'massive'
        placeholder = 'Search...'
        value = {this.state.searchTerm}
        onChange = {this.onInputChange}
      />
    )
  }
}

export default SearchBar;