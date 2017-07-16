import style from './style';

const CarouselItem = ({image}) => (
  <div className={style.carouselItem}>
    <img src={image} />
  </div>
);

export default CarouselItem
