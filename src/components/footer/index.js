import { h } from 'preact';
import style from './style';
import SpecialUsePermit from '../../assets/files/woodsProduce_specialUsePermit.pdf';

export const Footer = () => {
	const address =
		"Wood's Produce Company \n 131 Cherry Creek Road \n Meadows of Dan, VA 24120";
	const phoneNumbers = 'Phone: (800) 952-2978 \n Fax: (276) 952-2974';
	const copyright = "© Wood's Produce Company " + new Date().getFullYear();

	return (
		<div className={style.footer}>
			<div className={style.footerColumns}>
				<div className={style.address}>{address}</div>
				<div>
					<a href={SpecialUsePermit} rel="noreferrer noopener" target="_blank">
						Special Use Permit
					</a>
					<a
						href="http://maps.google.com/maps?hl=en&gl=us&daddr=131+Cherry+Creek+Rd,+Meadows+of+Dan,+VA+24120&panel=1&f=d&fb=1&dirflg=d&geocode=0,36.712123,-80.354776&cid=0,0,13615675629440567121&hq=woods+produce+company+131+cherry+creek+road&hnear=0x884d89d0554b9a59:0xab8a4dea73e925de,Floyd,+VA"
						rel="noreferrer noopener"
						target="_blank">
						Driving Directions
					</a>

					{phoneNumbers}
				</div>
			</div>
			<div className={style.copyright}>{copyright}</div>
		</div>
	);
};
