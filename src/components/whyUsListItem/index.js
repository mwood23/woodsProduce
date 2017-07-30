import style from './style';
import LazyImage from '../lazyImage';

const WhyUsListItem = ({image, text}) => (
  <div className={style.whyUsListItem}>
    <div className={style.photoContainer}>
      <LazyImage height={200} image={image} />
    </div>
    <div>
      <p>{text}</p>
    </div>
  </div>
);

export default WhyUsListItem
