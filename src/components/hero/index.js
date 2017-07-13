import style from './style';
import {Col, Image} from 'react-bootstrap';

const Hero = ({image, heading}) => (
  <div className={style.heroSpace}>
    <Image src={image} />
    <div className={style.heroMessaging}>
      <Image src="../../assets/heroPipe.svg" />
      <h1>{heading}</h1>
    </div>
  </div>
);

export default Hero
