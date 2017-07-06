import React from 'react';

class SearchBar extends React.Component {
	// WHAT COULD BE CHANGED HERE ?
	applyFilter(event) {
		this.props.applyFilter(event.target.value);
	}

  render() {
    return (
    	<div className="search-box">
				<input onKeyUp={(e) => this.applyFilter(e)} type="text" placeholder="Search" />
			</div>
    )
  }
}

export default SearchBar;