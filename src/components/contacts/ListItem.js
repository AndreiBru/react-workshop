import React from 'react';
import newContactImage from '../../assets/images/new-contact.png';

class ListItem extends React.Component {
	selectContact(event) {
		this.props.selectContact(this.props.contact);
	}

	isActive() {
		if (this.props.selectedContact == this.props.contact) {
			return 'active';
		}
		return '';
	}

  render() {
    return (
    	<li onClick={(e) => this.selectContact(e)} className={this.isActive()}>
				<a className="list-user">
					<div className="list-picture">
						<img src={this.props.contact.picture.thumbnail || newContactImage} alt="" />
					</div>
					<div className="list-details">
						<h4 className="list-name">{this.props.contact.name}</h4>
						<small className="list-phone">{this.props.contact.phone}</small>
					</div>
				</a>
			</li>
    )
  }
}

export default ListItem;