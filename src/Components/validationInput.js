import React from 'react';
import * as ons from 'react-onsenui';
import Formsy from 'formsy-react';
export const ValidationInput = React.createClass({
mixins: [Formsy.Mixin],
changeValue(event) {
this.setValue(event.currentTarget.value);
},
componentDidMount() {
this.setValue(this.props.inititalValue);
},
render() {
const className = this.showRequired() ? 'required' : this.showError() ? 'error' : null;
const errorMessage = this.getErrorMessage();
return (
<p className={className} style={{ textAlign: 'center' }}>
<ons.Input 
className={`input--full ${className}`}
value={this.getValue()}
onChange={this.changeValue}
onFocus={this.props.onFocus}
onBlur={this.props.onBlur}
type={this.props.type}
placeholder={this.props.placeholder}
modifier='underbar' />
<span style={errorStyle}>{errorMessage}</span>
</p>
);
}
});
export const ValidationTextarea = React.createClass({
mixins: [Formsy.Mixin],
changeValue(event) {
this.setValue(event.currentTarget.value);
},
componentDidMount() {
this.setValue(this.props.inititalValue);
},
render() {
const className = this.showRequired() ? 'required' : this.showError() ? 'error' : null;
const errorMessage = this.getErrorMessage();
return (
<p className={className} style={{ textAlign: 'center' }}>
<textarea 
className={`reviews-form__text ${className}`}
rows='10'
value={this.getValue()}
onChange={this.changeValue}
placeholder={this.props.placeholder} />         
<span style={errorStyle}>{errorMessage}</span>
</p>
);
}
});
const errorStyle = {
color: 'red',
display: 'inline-block',
marginTop: '5px'
};
