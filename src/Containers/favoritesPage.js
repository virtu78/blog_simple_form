import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ons from 'react-onsenui';
import * as Ons from 'onsenui';
import TopToolbar from '../Components/topToolbar';
import Post from '../Components/posts';
import { openSideMenu } from '../Actions/sideMenu';
import { deleteAddress, addAddress } from '../Actions/profile';
class FavoritesPage extends Component {
	renderToolbar() {
		const props = {
		name: '',
		address: '',
		onBack: ::this.props.back,
		bgc: this.props.settings.headerFooterColor,
		logo: this.props.settings.logoImagePath || '',
		needBackButton: true
		};
		if(this.props.settings.onePageCatalog) {
			props.needButterBread = true;
			props.onButterClick = () => this.props.openSideMenu();
		}
		return <TopToolbar {...props} />
	}
	renderPosts() {
		return (
			<section style={{textAlign: 'center' }}>
				<Post
					items={this.props.profile.addresses}
					onDelete={(a) =>
						Ons.notification.confirm({
							title: 'Удаление',
							message: 'Вы уверены?',
							buttonLabels: ["Нет", "Да"],
							callback: (i) => {
								if(i === 1)
								this.props.deleteAddress(a.id)
							}
						})
					} />
			</section>
		)
	}
	render() {
		return(
			<ons.Page
				renderToolbar={::this.renderToolbar} >
				{::this.renderPosts()}
			</ons.Page>
		)
	}
}
function mapStateToProps (state) {
	return state
}
function mapDispathToProps (dispath) {
	return bindActionCreators({ deleteAddress, addAddress, openSideMenu }, dispath)
}
export default connect(mapStateToProps, mapDispathToProps)(FavoritesPage);
