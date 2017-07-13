import style from './style';
import { Link } from 'preact-router/match';

const ProductTile = ({text, image, url}) => (
  <Link href={url} className={style.productTile}>
    {/* <div> */}
      <img src={image}></img>

      <div className={style.tileText}>
        <p>{text}</p>
      </div>
    {/* </div> */}
  </Link>
);

export default ProductTile
