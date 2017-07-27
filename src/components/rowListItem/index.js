import style from './style';
import { Link } from 'preact-router/match';

const RowListItem = ({image, url, text}) => (
  <a className={style.rowListItem} href={url}>
    <div>
      <img src={image} />
      <p>{text}</p>
    </div>
  </a>
);

export default RowListItem
