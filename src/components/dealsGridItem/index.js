import style from './style';
import cx from 'classnames';
import {Col, Image} from 'react-bootstrap';

const DealsGridItem = ({featured}) => (
  <div className={cx(style.dealsGridItem, featured && style.featured)}>
    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHtpOEJUBKs6oADPrQnl01v-qulumpJBtMJWUAzwtqVm-fpAPi" />
  </div>
);

export default DealsGridItem
