import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import { Button } from 'react-bootstrap';

export default class Header extends Component {

	// This handle changing the nav bar color on scroll
	componentDidMount() {
		console.log(this);
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

		if (top < 10) {
			const className = `${style.header}`
			this.base.className = className
		} else {
			const className = `${style.header} ${style.scrolled}`
			this.base.className = className
		}
	}

	// This handles opening and closing the hamburger menu on mobile
	state = { open:false };

	toggle = () => this.setState({ open: !this.state.open });

	// close menu on navigate
	componentWillReceiveProps({ url }) {
		if (url!==this.props.url && this.state.open) {
			this.setState({ open:false });
		}
	}

	render({ url }, { open }) {
		return (
			<header class={style.header}>
				<img src="../../assets/wplogo1.png"></img>
				<section>
				<nav>
					{/* Remove active class name if we don't intend on giving it a selected style */}
						<Link activeClassName={style.active} href="/">Home</Link>
						<Link activeClassName={style.active} href="/profile">Products</Link>
						<Link activeClassName={style.active} href="/profile">Food Safety</Link>
						<Link activeClassName={style.active} href="/profile">Our Story</Link>
						<Link activeClassName={style.active} href="/profile">Case Studies</Link>
						<Link activeClassName={style.active} href="/profile">Careers</Link>
				</nav>
			</section>
				<Button>Get Started</Button>
				<Hamburgler open={open} onClick={this.toggle} />
			</header>
		);
	}
}

// hamburgler menu
const Hamburgler = ({ open, ...props }) => (
	<div class={style.hamburgler} open={open} {...props}>
		<div class={style.hb1} />
		<div class={style.hb2} />
		<div class={style.hb3} />
	</div>
);
