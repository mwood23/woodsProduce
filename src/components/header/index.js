import { Link } from 'preact-router/match';
import style from './style';
import { Button } from 'react-bootstrap';

const Header = () => (
	<header className={style.header}>
		<img src="../../assets/wplogo1.png"></img>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/profile">Products</Link>
			<Link activeClassName={style.active} href="/profile">Food Safety</Link>
			<Link activeClassName={style.active} href="/profile">Our Story</Link>
			<Link activeClassName={style.active} href="/profile">Case Studies</Link>
			<Link activeClassName={style.active} href="/profile">Careers</Link>
		</nav>
		<Button>Get Started</Button>
	</header>
)

export default Header
