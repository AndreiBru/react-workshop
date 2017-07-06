import React from 'react';
import Name from './Name';
import LargeDetail from './LargeDetail';
import SmallDetail from './SmallDetail';
import newContactImage from '../../assets/images/new-contact.png';

class Details extends React.Component {
	toggleEditMode() {
		this.props.toggleEditMode();
	}

  render() {
  	let editMode = this.props.editMode;

    return (
    	<div className="b contact-details">
				<div className="details-container">
					<div className="picture">
						<img src={this.props.selectedContact.picture.large || newContactImage} />
					</div>
					<div className="main-details">
						<Name editMode={this.props.editMode} field="name" text={this.props.selectedContact.name} updateContact={this.props.updateContact} />
					</div>
					<div className="secondary-details">
						<LargeDetail editMode={this.props.editMode} field="phone" text={this.props.selectedContact.phone} updateContact={this.props.updateContact} />
						<LargeDetail editMode={this.props.editMode} field="email" text={this.props.selectedContact.email} updateContact={this.props.updateContact} />
						<LargeDetail editMode={this.props.editMode} field="address" text={this.props.selectedContact.address} updateContact={this.props.updateContact} />
						<SmallDetail editMode={this.props.editMode} field="notes" text={this.props.selectedContact.notes} updateContact={this.props.updateContact} />
					</div>
					<div className="actions">
						<a onClick={(e) => this.toggleEditMode(e)}>
							{	
								editMode ?
								(<i className="fa fa-check"></i>) :
								(<i className="fa fa-pencil"></i>)
							}
						</a>
					</div>
				</div>
			</div>
    )
  }
}

export default Details;