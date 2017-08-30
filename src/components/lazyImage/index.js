import style from './style';
import LazyLoad from 'react-lazyload';

const LazyImage = ({image, height}) => (
  <LazyLoad offset={275} height={height} once>
    {image}
  </LazyLoad>
);

export default LazyImage
