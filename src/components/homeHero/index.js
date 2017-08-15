import style from './style';

const HomeHero = ({image, heading}) => (
  <div className={style.homeHeroSpace}>
    {image}
    <div className={style.tagline}>
      <h1><span>WHERE </span><span className={style.greatVibes}>FRESH </span><span>MEETS </span><span className={style.greatVibes}>FRIENDLY </span></h1>
    </div>
  </div>
);

export default HomeHero
