import React from 'react';
import Contacts from './contacts/Contacts';
import Details from './details/Details';

import contacts from '../helpers/contacts';

class App extends React.Component {
	constructor() {
	  super();
	
		this.selectContact = this.selectContact.bind(this);
		this.applyFilter = this.applyFilter.bind(this);
		this.deleteContact = this.deleteContact.bind(this);
		this.addContact = this.addContact.bind(this);
		this.toggleEditMode = this.toggleEditMode.bind(this);
		this.updateContact = this.updateContact.bind(this);

	  this.state = {
	  	contacts: contacts,
	  	selectedContact: contacts[0],
	  	filter: "",
	  	editMode: false
	  };
	}

	selectContact(contact) {
		let selectedContact = contact;
		this.setState({ selectedContact });
	}

	applyFilter(filter) {
		this.setState({ filter });
	}

	deleteContact() {
		this.state.contacts.forEach((contact, i) => {
			if(this.state.selectedContact === contact && window.confirm(`Are you sure you want to delete ${contact.name} from your life?`)) {
				let contacts = Array.from(this.state.contacts);
				contacts.splice(i, 1);

				this.setState({
					contacts,
					selectedContact: contacts[0]
				})
			}
		})
	}

	addContact() {
		const newContact = {
			name: "New Contact",
			phone: "",
			email: "",
			address: "",
			notes: "",
			picture: {
				thumbnail: null,
				large: null
			}
		};

		this.setState({
			contacts: [...this.state.contacts, newContact],
			selectedContact: newContact
		});
	}

	toggleEditMode() {
		this.setState({ editMode: !this.state.editMode })
	}

	updateContact(field, updatedContact) {
		let selectedContact = {...this.state.selectedContact};
		selectedContact[field] = updatedContact;

		let contacts = [...this.state.contacts];

		this.state.contacts.forEach((contact, i) => {
			if (this.state.selectedContact === contact) {
				contacts[i] = selectedContact;
				this.setState({ contacts, selectedContact });
			}
		}) 
	}

  render() {
    return (
  		<div className="main">
				<h1>Address Book</h1>
				<div className="b content">
					<Contacts
						contacts={this.state.contacts}
						selectedContact={this.state.selectedContact}
						selectContact={this.selectContact}
						filter={this.state.filter}
						applyFilter={this.applyFilter}
						deleteContact={this.deleteContact}
						addContact={this.addContact} />
					<Details
						selectedContact={this.state.selectedContact}
						editMode={this.state.editMode}
						toggleEditMode={this.toggleEditMode}
						updateContact={this.updateContact} />
				</div>
			</div>
    )
  }
}

export default App;