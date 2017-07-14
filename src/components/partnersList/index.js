import style from './style';
import {Grid, Row} from 'react-bootstrap';
import PartnersListItem from '../partnersListItem'

const PartnersList = () => (
  // TODO: Map image URLs from contentful and create PartnersListItems to render inside the row
    <div className={style.partnersList}>
      <PartnersListItem image="https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Dole_Logo.svg/342px-Dole_Logo.svg.png" />
      <PartnersListItem image="http://www.redsunfarms.com/wp-content/uploads/2013/05/RedSunfarms_logo_300x200.png" />
      <PartnersListItem image="http://rainierfruit.com/wp-content/themes/rainier/images/rainier-fruit-old.png" />
      <PartnersListItem image="http://www.taproduce.com/wp-content/uploads/2016/04/tanimura-and-antle-logo.png" />
    </div>
);

export default PartnersList
