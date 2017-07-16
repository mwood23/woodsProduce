import { h, Component } from 'preact';
import cx from 'classnames';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	// This handles opening and closing the hamburger menu on mobile
	// Also controls whether a user has scrolled or not on the page
	state = { open:false, scrolled:false };

	// This handle changing the nav bar color on scroll
	componentDidMount() {
		this._bindScroll()
	}

	componentWillUnmount() {
		this._unbindScroll()
	}

	_bindScroll = () => {
		// Use passive event listener if available
		let supportsPassive = false
		try {
			const opts = Object.defineProperty({}, 'passive', {
				get: () => {
					supportsPassive = true
				}
			})
			window.addEventListener('test', null, opts)
		} catch (e) {} // eslint-disable-line no-empty

		window.addEventListener('scroll', this._handleScroll, supportsPassive
			? {
				passive: true
			}
			: false)
	}

	_unbindScroll = () => {
		window.removeEventListener('scroll', this._handleScroll)
	}

	_handleScroll = () => {
		// Ugly cross-browser compatibility
		const top = document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop
		// Test < 1 since Safari's rebound effect scrolls past the top

		if (top < 20) {
			// const className = `${style.header}`
			// this.base.className = className
			this.setState({ scrolled: false });
		} else {
			// const className = `${style.header} ${style.scrolled}`
			// this.base.className = className
			this.setState({ scrolled: true });
		}
	}


	toggle = () => this.setState({ open: !this.state.open });

	viewChange = (event) => {
		if (window.location.pathname !== event.target.pathname) {
			this.setState({ open:false, scrolled:false });
		}
	};

	render({ url }, { open, scrolled, ...props }) {
		return (
			<header class={cx(style.header, open && style.open, scrolled && style.scrolled)}>
				<Link activeClassName={style.active} onClick={this.viewChange} href="/">
					<img src="../../assets/wplogo2.png" />
				</Link>
				<nav>
					{/* Remove active class name if we don't intend on giving it a selected style */}
					<Link activeClassName={style.active} onClick={this.viewChange} href="/">Home</Link>
					<Link activeClassName={style.active} onClick={this.viewChange} href="/products">Products</Link>
					<Link activeClassName={style.active} onClick={this.viewChange} href="/foodSafety">Food Safety</Link>
					<Link activeClassName={style.active} onClick={this.viewChange} href="/ourStory">Our Story</Link>
					<Link activeClassName={style.active} onClick={this.viewChange} href="/careers">Careers</Link>

					{/* TODO: Do something here */}
					{/* <Link activeClassName={style.active} onClick={this.viewChange} href="/"></Link> */}

					<button>Get Started</button>
				</nav>
				<Hamburgler open={open} scrolled={scrolled} onClick={this.toggle} />
			</header>
		);
	}
}

// hamburgler menu
const Hamburgler = ({ open, scrolled, ...props }) => (
	<div class={cx(style.hamburgler, scrolled && style.scrolled)} open={open} {...props}>
		<div class={style.hb1} />
		<div class={style.hb2} />
		<div class={style.hb3} />
	</div>
);
