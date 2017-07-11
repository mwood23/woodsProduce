import style from './style';
import {Col, Image} from 'react-bootstrap';

const PartnersListItem = ({image}) => (
  <Col xs={3}>
    <Image src={image} thumbnail></Image>
  </Col>
);

export default PartnersListItem
