import style from './style';
import {Col, Image} from 'react-bootstrap';

const PartnersListItem = () => (
  // TODO: Pull in video id from props to show
  <Col xs={4} md={3}>
    <Image src="http://www.redsunfarms.com/wp-content/uploads/2013/05/RedSunfarms_logo_300x200.png" responsive></Image>
  </Col>
);

export default PartnersListItem
