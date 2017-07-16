import style from './style';
import { Link } from 'preact-router/match';

const RowListItem = ({image, url}) => (
  <a className={style.rowListItem} href={url}>
    <div>
      <img src={image} />
    </div>
  </a>
);

export default RowListItem
