import style from './style';
import { Link } from 'preact-router/match';
import LazyImage from '../lazyImage';

const ProductTile = ({text, image, url}) => (
  <Link href={url} className={style.productTile}>
    {/* <div> */}
    <div className={style.image}>
      <LazyImage image={image} />
    </div>

      <div className={style.tileText}>
        <p>{text}</p>
      </div>
    {/* </div> */}
  </Link>
);

export default ProductTile
