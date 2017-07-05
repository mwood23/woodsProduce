import React, {h, Component} from 'preact';
import style from './style';
import Header from '../../components/header'

export default class Home extends Component {

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

		console.log(this.base.firstChild);
		if (top < 10) {
			// const className = `${header.header}`
			this.base.firstChild.className = 'header__3fP58'
		} else {
			// const className = `${header.header} ${header.scrolled}`
			this.base.firstChild.className = 'header__3fP58 scroll__3hLWG'
		}
	}

  render() {
    return (
      <div className={style.scroll}>
				<Header />
        <div className={style.videoWrapper}>
          <iframe src="https://www.youtube.com/embed/HxOwaKulUlM?controls=0&showinfo=0&rel=0&autoplay=1&loop=1playlist=HxOwaKulUlM" frameborder="0" allowfullscreen></iframe>
        </div>

        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </div>
    );
  }
}
