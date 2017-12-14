import React, { Component, PropTypes } from 'react';
import * as ons from 'react-onsenui';
import * as Ons from 'onsenui';
import Formsy from 'formsy-react';

import { ValidationInput, ValidationTextarea } from '../Components/validationInput';
export default class AddressForm extends Component {
state = {
description: undefined,
street: undefined,
canSubmit: false
};
enableButton() {
this.setState({
canSubmit: true
});
}
disableButton() {
this.setState({
canSubmit: false
});
}
submit(model) {
this.props.onSubmit(model);

}
render() {
return (
<section style={{textAlign: 'center'}}>
<Formsy.Form onValidSubmit={::this.submit} onValid={::this.enableButton} onInvalid={::this.disableButton}>
<ons.ListHeader style={{color: this.props.fontColor}}>Форма создания поста</ons.ListHeader>
<div className="reviews-form">
<ValidationInput
name="description"
onChange={(e) => this.setState({ description: e.target.value })}
placeholder="Заголовок"
type="text" 
required/>
<ValidationTextarea
name="street"

onChange={(e) => this.setState({ street: e.target.value })}
placeholder='Содержание поста ...'
 required/>

<p>
<button className="button" 
disabled={!this.state.canSubmit}
>

<span>Добавить</span>
</button>
</p>
</div>
</Formsy.Form>
</section>
)
}
}
AddressForm.protoTypes = {
onAdd: PropTypes.func.isRequired
};
