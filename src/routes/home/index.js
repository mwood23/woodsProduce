import 'roboto-npm-webfont';
import Content from '../../components/content';
import Header from '../../components/header';
import Heading from '../../components/heading';
import PartnersList from '../../components/partnersList';
import React, {h, Component} from 'preact';
import Section from '../../components/section';
import style from './style';
import VideoBackground from '../../components/videoBackground';
import DealsGrid from '../../components/dealsGrid';

export default class Home extends Component {

  render() {
    return (
      <div className={style.scroll}>
        <VideoBackground />
        <Section>
          <Heading text="Where Fresh Meets Friendly" />
          <Content text="Welcome. We are a full-line produce company committed to delivering the freshest high quality fruits and vegetables while providing superior customer service to restaurants, retailers, and wholesalers throughout Virginia, West Virginia, North Carolina and the Eastern portions of Kentucky and Tennessee."/>
        </Section>
        <Section>
          <Heading text="Some of Our Partners" />
          <PartnersList />
        </Section>
        <Section>
          <Heading text="Why Us" />
          <ul>
            <li>Next Day Delivery</li>
            <li>Dependable Delivery</li>
            <li>The same rigorous food safety standards as Nestle and Kraft Foods</li>
            <li>We buy direct from the farm</li>
          </ul>
        </Section>
        <Section>
          <Heading text="Current Deals" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Section>
        <Section>
          <Heading text="Products" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Section>
      </div>
    );
  }
}
