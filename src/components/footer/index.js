import { h, Component } from 'preact';
// import cx from 'classnames';
import { Link } from 'preact-router/match';
import style from './style';

export default class Footer extends Component {

	render() {

		const address="Wood's Produce Company \n 131 Cherry Creek Road \n Meadows of Dan, VA 24120"
		const phoneNumbers="Phone: (800) 952-2978 \n Fax: (276) 952-2974"
		const copyright="© Wood's Produce Company " + new Date().getFullYear()
		return (
			<div className={style.footer}>
				<div className={style.footerColumns}>
					<div className={style.address}>
						{address}
					</div>
					<div className={style.logos}>
						<img src="http://www.jmargiotta.com/wp-content/uploads/2013/03/BlueBook_MemberSeal.png" />
						<img src="http://www.gregorysfoods.com/SiteAssets/sqf%20logo.jpg" />
						<img src="https://static1.squarespace.com/static/58b46bbf9de4bbdb9e65a4d6/58b5cbd0ebbd1a71201bee4b/58b5cbd0a5790af065c57114/1488309407413/BCA_Award_HR.jpg" />
					</div>
					<div>
						<a href="http://woodsproduce.net/img/contact/US-58-Special-Use-Permit.pdf" target="_blank">Special Use Permit</a>
						<a href="http://maps.google.com/maps?hl=en&gl=us&daddr=131+Cherry+Creek+Rd,+Meadows+of+Dan,+VA+24120&panel=1&f=d&fb=1&dirflg=d&geocode=0,36.712123,-80.354776&cid=0,0,13615675629440567121&hq=woods+produce+company+131+cherry+creek+road&hnear=0x884d89d0554b9a59:0xab8a4dea73e925de,Floyd,+VA" target="_blank">Driving Directions</a>

						{phoneNumbers}
					</div>
				</div>
				<div className={style.copyright}>
					{copyright}
				</div>
			</div>
		);
	}
}
