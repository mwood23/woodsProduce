import React, {h, Component} from 'preact';
import style from './style';
import Header from '../../components/header'

export default class Products extends Component {

  render() {
    return (
      <div className={style.scroll}>
        <div className={style.content}>
          This is the products page.
        </div>
      </div>
    );
  }
}