import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Header from './header';
import Home from '../routes/home';
import Products from '../routes/products';
import FoodSafety from '../routes/foodSafety';
import OurStory from '../routes/ourStory';
import Careers from '../routes/careers';
import Redirect from './redirect';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		window.scrollTo(0, 0)
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Redirect default path="/" to="/" />
					<Home path="/" />
					<Products path="/products" />
					<FoodSafety path="/foodSafety" />
					<OurStory path="/ourStory" />
					<Careers path="/careers" />
				</Router>
			</div>
		);
	}
}
