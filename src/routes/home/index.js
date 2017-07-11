import React, {h, Component} from 'preact';
import 'roboto-npm-webfont';
import style from './style';
import Header from '../../components/header';
import VideoBackground from '../../components/videoBackground';
import PartnersList from '../../components/partnersList';
import Heading from '../../components/heading';



export default class Home extends Component {

  render() {
    return (
      <div className={style.scroll}>
        <VideoBackground />
        <Heading text="Some of Our Partners" />
        <PartnersList />
      </div>
    );
  }
}
