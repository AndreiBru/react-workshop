import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {
  // WHAT COULD BE CHANGED HERE ?
  render() {
    return (
      <ul>
        {
          Object
            .keys(this.props.contacts)
            .filter(key => this.props.contacts[key]['name'].toLowerCase().includes(this.props.filter.toLowerCase()))
            .map(key => <ListItem key={key} contact={this.props.contacts[key]} selectedContact={this.props.selectedContact} selectContact={this.props.selectContact}/>)
        }
      </ul>
    )
  }
}

export default List;