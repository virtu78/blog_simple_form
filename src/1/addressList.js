import React, { Component, PropTypes } from 'react';
import * as ons from 'react-onsenui';
export default class AddressList extends Component {
renderAddress(a, i) {
return (
<ons.ListItem key={`address-${i}`} tappable 
onClick={() => this.props.showPost() }
style={{color: this.props.fontColor}}>
<ons.Row>
<ons.Col>
<div className="timeline-from">
<div className="timeline-name">{a.description}</div>
<div className="timeline-id">{a.street}</div>
<ons.Button
style={{ float: 'right', padding: '0 12px',	marginRight: 5 }}
onClick={() => this.props.onDelete(a) }>
<i className='fa fa-trash'></i>
</ons.Button>
</div>
</ons.Col>
</ons.Row>
</ons.ListItem>
)
}
render() {
return (
<ons.List
renderHeader={() => <ons.ListHeader style={{color: this.props.fontColor}}>Посты</ons.ListHeader>}
renderRow={::this.renderAddress}
dataSource={this.props.items} />
)
}
}
AddressList.protoTypes = {
items: PropTypes.array.isRequired,
fontColor: PropTypes.string,

};

