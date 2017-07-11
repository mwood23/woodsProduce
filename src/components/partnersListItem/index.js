import style from './style';
import {Col, Image} from 'react-bootstrap';

const PartnersListItem = ({image}) => (
  // TODO: Pull in video id from props to show
  <Col xs={4} md={3}>
    <Image src={image} responsive></Image>
  </Col>
);

export default PartnersListItem
