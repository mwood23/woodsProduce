import style from './style';
import {Col, Image} from 'react-bootstrap';

const PartnersListItem = ({image}) => (
  <div className={style.partnersListItem}>
    <img src={image} />
  </div>
);

export default PartnersListItem
