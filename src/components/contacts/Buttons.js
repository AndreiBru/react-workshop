import React from 'react';

class Buttons extends React.Component {
  render() {
    return (
    	<div className="filters">
				<a onClick={this.props.addContact} className="add">
					<i className="fa fa-plus"></i>
				</a>
				<a onClick={this.props.deleteContact} className="remove">
					<i className="fa fa-trash-o"></i>
				</a>
			</div>
    )
  }
}

export default Buttons;