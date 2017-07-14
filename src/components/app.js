import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Footer from './footer';
import Home from '../routes/home';
import Products from '../routes/products';
import FoodSafety from '../routes/foodSafety';
import OurStory from '../routes/ourStory';
import CaseStudies from '../routes/caseStudies';
import Careers from '../routes/careers';
// import Home from 'async!./home';
// import Profile from 'async!./profile';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Products path="/products" />
					<FoodSafety path="/foodSafety" />
					<OurStory path="/ourStory" />
					<CaseStudies path="/caseStudies" />
					<Careers path="/careers" />
				</Router>
				<Footer />
			</div>
		);
	}
}
