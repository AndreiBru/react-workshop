import React from 'react';

class SmallDetail extends React.Component {
  // WHAT COULD BE CHANGED HERE ?
	updateText(event) {
		this.props.updateContact(this.props.field, event.target.value);
	}

  render() {
  	const editMode = this.props.editMode;

    return (
    	<div>
    	{ editMode ?
    		(<textarea className="detail-input" type="text" onChange={(e) => this.updateText(e)} value={this.props.text} placeholder={this.props.field}></textarea>) :
	    	(<small className="notes">{this.props.text}</small>)	    	
	    }
	    </div>
    )
  }
}

export default SmallDetail;