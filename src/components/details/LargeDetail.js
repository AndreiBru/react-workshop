import React from 'react';

class LargeDetail extends React.Component {
	updateText(event) {
		this.props.updateContact(this.props.field, event.target.value);
	}

  render() {
  	const editMode = this.props.editMode;

    return (
    	<div>
    	{ editMode ?
    		(<input className="detail-input" type="text" onChange={(e) => this.updateText(e)} value={this.props.text} placeholder={this.props.field} />) :
	    	(<div className="detail">{this.props.text}</div>)	    	
	    }
	    </div>
    )
  }
}

export default LargeDetail;