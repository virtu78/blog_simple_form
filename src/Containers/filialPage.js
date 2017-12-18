import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as ons from 'react-onsenui';
import * as Ons from 'onsenui';
import { deleteAddress, addAddress } from '../Actions/profile';
import Formsy from 'formsy-react';
import CatalogPage from './catalogPage';
import { ValidationInput, ValidationTextarea} from '../Components/validationInput';
import FavoritesPage from './favoritesPage';
import AddressList from '../Components/addressList';
import AddressForm from '../Components/addressForm';
class ProfilePage extends Component {
state = {
};
renderAddresses() {
return (

<section style={{textAlign: 'center'}}>
<AddressList
items={this.props.profile.addresses}
fontColor={this.props.settings.bgFontColor}
showPost={(a) => this.props.changePage(FavoritesPage)}

/>
</section>
)

}
renderAddressesForm() {
return (
<section style={{textAlign: 'center', marginBottom: 10}}>
<AddressForm
onSubmit={(m) => this.props.addAddress(m.description,  m.street)}

 />

</section>
)
}
render() {
return (

<ons.Page>
{::this.renderAddressesForm()}
{::this.renderAddresses()}

</ons.Page>
);
}
};
function mapStateToProps (state) {
return state
}
function mapDispathToProps (dispath) {
return bindActionCreators({ 
deleteAddress, 
addAddress,
}, dispath)
}
export default connect(mapStateToProps, mapDispathToProps)(ProfilePage);
