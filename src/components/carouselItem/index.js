import style from './style';
import LazyImage from '../lazyImage';

const CarouselItem = ({image}) => (
  <div className={style.carouselItem}>
    {image}
  </div>
);

export default CarouselItem
