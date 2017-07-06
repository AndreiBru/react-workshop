import React from 'react';
import SearchBar from './SearchBar';
import List from './List';
import Buttons from './Buttons';

class Contacts extends React.Component {
	constructor() {
	  super();
	
	}

  render() {
    return (
  		<div className="b contact-list">
  			<SearchBar applyFilter={this.props.applyFilter} />
  			<List contacts={this.props.contacts} selectedContact={this.props.selectedContact} selectContact={this.props.selectContact} filter={this.props.filter} />
  			<Buttons deleteContact={this.props.deleteContact} addContact={this.props.addContact} />
  		</div>
    )
  }
}

export default Contacts;