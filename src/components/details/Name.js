import React from 'react';

class Name extends React.Component {
	updateText(event) {
		this.props.updateContact(this.props.field, event.target.value);
	}

  render() {
  	const editMode = this.props.editMode;

    return (
    	<div>
    	{ editMode ?
    		(<input className="name-input" type="text" onChange={(e) => this.updateText(e)} value={this.props.text} placeholder={this.props.field} />) :
	    	(<h2>{this.props.text}</h2>)	    	
	    }
	    </div>
    )
  }
}

export default Name;