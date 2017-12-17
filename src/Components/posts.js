import React, { Component, PropTypes } from 'react';
import * as ons from 'react-onsenui';
const fontStyle = {
  fontSize: '24px',
   fontFamily: 'helvetica, arial, sans-serif',
  fontWeight: 300,

};

export default class Post extends Component {
renderPost(a, i) {

return (
<ons.List key={`address-${i}`} tappable >

<ons.Row>
<ons.Col>
<div >
<div style={fontStyle}>{a.description}</div>
<div style={fontStyle}>{a.street}</div>
</div>

</ons.Col>
</ons.Row>
</ons.List>
)
}
render() {

return (

<ons.List style={{ display: 'block',    margin: 'auto', marginTop: 100,    width: '50%', textAlign: 'center'}}
renderHeader={() => <ons.ListHeader style={{fontSize: '24px', fontFamily: 'helvetica, arial, sans-serif', fontWeight: 300, marginTop: '30px'}}>Пост</ons.ListHeader>}
renderRow={::this.renderPost}
dataSource={this.props.items} />
)
}
}
Post.protoTypes = {
items: PropTypes.array.isRequired,
fontColor: PropTypes.string,

};

