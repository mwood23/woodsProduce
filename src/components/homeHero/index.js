import style from './style';

const HomeHero = ({image, heading}) => (
  <div className={style.homeHeroSpace}>
    {image}
    <div className={style.tagline}>
      <h1><span className={style.headerOneStyle}>WHERE </span><span className={style.headerTwoStyle}>FRESH </span><span className={style.headerOneStyle}>MEETS </span><span className={style.headerTwoStyle}>FRIENDLY </span></h1>
    </div>
    <a href="https://youtu.be/1IuxFwglYpc" target="noopener"><button>Video of our facilities</button></a>
  </div>
);

export default HomeHero
