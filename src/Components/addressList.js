import React, { Component, PropTypes } from 'react';
import * as ons from 'react-onsenui';
const fontStyle = {
	fontSize: '24px',
	fontFamily: 'helvetica, arial, sans-serif',
	fontWeight: 300
};
export default class AddressList extends Component {
	renderAddress(a, i) {
		return (
			<ons.ListItem key={`address-${i}`} tappable 
				onClick={() => this.props.showPost() } >
				<ons.Row>
					<ons.Col>
						<div className='timeline-from'>
							<div style={fontStyle}>{a.description}</div>
							<div style={fontStyle}>{a.street}</div>
						</div>
					</ons.Col>
				</ons.Row>
			</ons.ListItem>
		)
	}
	render() {
		return (
			<ons.List
				renderHeader={() => <ons.ListHeader style={fontStyle}>Посты</ons.ListHeader>}
				renderRow={::this.renderAddress}
				dataSource={this.props.items} />
		)
	}
}
AddressList.protoTypes = {
	items: PropTypes.array.isRequired,
};

