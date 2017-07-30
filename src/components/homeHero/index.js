import style from './style';

const HomeHero = ({image, heading}) => (
  <div className={style.homeHeroSpace}>
    {image}
    <div className={style.tagline}>
      <h1>FULL LINE PERISHABLE FOODS WHOLESALER</h1>
    </div>
  </div>
);

export default HomeHero
