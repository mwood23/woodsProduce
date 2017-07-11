import style from './style';
import {Panel} from 'react-bootstrap'

const Heading = ({text}) => (
  <div className={style.heading}>
    <h1>{text}</h1>
  </div>
);

export default Heading
