import React, {h, Component} from 'preact';
import style from './style';
import Header from '../../components/header'

export default class FoodSafety extends Component {

  render() {
    return (
      <div className={style.content}>
        This is the food safety page.
      </div>
    );
  }
}
