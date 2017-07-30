import style from './style';

const Hero = ({image, heading}) => (
  <div className={style.heroSpace}>
    {image}
    <div className={style.heroMessaging}>
      <img src="../../assets/heroPipe.svg" alt="Green Pipe For Styling" />
      <h1>{heading}</h1>
    </div>
  </div>
);

export default Hero
