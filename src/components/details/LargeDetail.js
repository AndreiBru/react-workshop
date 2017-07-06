import React from 'react';

class LargeDetail extends React.Component {
	constructor( ) {
		super();
		this.v1 = this.v1.bind(this);
		this.v2 = this.v2.bind(this);
		this.updateText = this.updateText.bind( this );
	}
	updateText(event) {
		this.props.updateContact(this.props.field, event.target.value);
	}
	
	v1( ) {
		return (
			<input
				className="detail-input"
				type="text"
				onChange={(e) => this.updateText(e)}
				value={this.props.text}
				placeholder={this.props.field} />
		)
	}
	
	v2() {
		return (
			<div
				className="detail">{this.props.text}
			</div>
		);
  }
  
  render() {
    return (
    	<div>
    		{ this.props.editMode ? this.v1() : this.v2() }
	    </div>
    )
  }
}

export default LargeDetail;