import { h, Component } from 'preact';
import cx from 'classnames';
import { Link } from 'preact-router/match';
import style from './style';
import ReactModal from 'react-modal';
import Heading from '../heading';

export default class Header extends Component {
	// This handles opening and closing the hamburger menu on mobile
	// Also controls whether a user has scrolled or not on the page
	state = { open:false, scrolled:false, showModal: false, phoneCopied: false, emailCopied: false };

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

	handleOpenModal = () => this.setState({ showModal: true });

	handleCloseModal = (e) => {
		this.setState({ showModal: false });

		// This was getting called before the re-render which was causing the fadeOut class to be appeneded to the wrong element. Worst case if this doesn't work is that the modal closes with no fade out animation.
		setTimeout(() =>{
			let modalOverlay = document.getElementsByClassName('ReactModal__Overlay');
			let modalBody = document.getElementsByClassName('ReactModal__Content');
			modalOverlay[0].classList.add(style.fadeOut)
			modalBody[0].classList.add(style.fadeOut)
		 }, 0);
	}

	copyToClipboard = (e, value) => {

		// It looks like you can only copy to clipboard from inputs that are on the dom. This creates an element a user will not see with the phone number to place it on their clipboard.
		// https://stackoverflow.com/questions/31593297/using-execcommand-javascript-to-copy-hidden-text-to-clipboard

		console.log(value);
		var tempInput = document.createElement("input");
    tempInput.style = "position: absolute; left: -1000px; top: -1000px;";

		if (value === 'phone') {
			tempInput.value = '2769528365';
		} else if(value === 'email') {
			tempInput.value = 'jonathon@woodsproduce.net';
		}
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

		if (value === 'phone') {
			this.setState({ phoneCopied: true, emailCopied: false });
		} else if(value === 'email') {
			this.setState({ phoneCopied: false, emailCopied: true });
		}
	}

	viewChange = (event) => {
		if (window.location.pathname !== event.target.pathname) {
			this.setState({ open:false, scrolled:false });
		}
	};

	render({ url }, { open, scrolled, showModal, phoneCopied, emailCopied, ...props }) {

		let copyNumber = <span onClick={(event) => {this.copyToClipboard(event, 'phone')}}>Copy</span>
		let copyEmail = <span onClick={(event) => {this.copyToClipboard(event, 'email')}}>Copy</span>
		if (phoneCopied) {
			// copyNumber = <img className={style.copyImage} src="../../assets/checkmark/checkmark.svg" />

			copyNumber = <object className={style.copyImage} data="../../assets/checkmark/checkmark.svg" type="image/svg+xml">
			  {/* <img src="yourfallback.jpg" /> */}
			</object>
		}

		if (emailCopied) {
			copyEmail = <object className={style.copyImage} data="../../assets/checkmark/checkmark.svg" type="image/svg+xml">
			  {/* <img src="yourfallback.jpg" /> */}
			</object>
		}

		return (
			<header className={cx(style.header, open && style.open, scrolled && style.scrolled)}>
				<Link activeClassName={style.active} onClick={this.viewChange} href="/">
					<img src="../../assets/wplogo1.png" />
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

					<button onClick={this.handleOpenModal}>Contact Us</button>
				</nav>
				<ReactModal
					isOpen={showModal}
					contentLabel="onRequestClose Example"
					overlayClassName={style.modalOverlay}
					className={style.modal}
					closeTimeoutMS={300}
					onRequestClose={this.handleCloseModal}>
					<Heading text="GIVE US A RING" />
					<img className={style.close} onClick={this.handleCloseModal} src="../../assets/close.svg" />
					<div>
						<p>Ready to get started or have a question for us? Please call us at</p>
						{/* <br /> */}
						<p className={style.phoneNumber}>276-952-8365 {copyNumber}</p>
						{/* <br /> */}
						<p> and ask for Jonathon. He'll be able to answer any questions you have about buying, procurement, cross-docking, or anything else.</p>
					</div>
					<div>
						<p>Rather email? Please send a message to <b>jonathon@woodsproduce.com</b> {copyEmail}</p>
						<p>Need to fax? <b>276-952-2974</b></p>
					</div>
				</ReactModal>
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
