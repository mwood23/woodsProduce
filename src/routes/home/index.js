import Content from '../../components/content';
import Header from '../../components/header';
import Heading from '../../components/heading';
import PartnersList from '../../components/partnersList';
import React, {h, Component} from 'preact';
import Section from '../../components/section';
import style from './style';
import VideoBackground from '../../components/videoBackground';
import ProductTiles from '../../components/productTiles';
import FeaturedList from '../../components/featuredList';

export default class Home extends Component {

  render() {
    return (
      <div className={style.scroll}>
        <VideoBackground />
        <Section>
          <Heading text="WHERE FRESH MEETS FRIENDLY" />
          <Content text="Family owned since 1987, Wood's Produce is a full line fruit and vegetable wholesaler that services restaurants, grocery stores, retail markets, and wholesalers. From our humble beginnings of one man delivering to customers in a Wise potato chip truck to becoming one of the largest independent wholesalers in the region, service is at the heart of everything we do."/>
        </Section>
        <Section>
          <Heading text="SOME OF OUR PARTNERS" />
          <PartnersList />
        </Section>
        <Section>
          <Heading text="WHY US" />
          <ul>
            <li>Next Day Delivery</li>
            <li>Dependable Delivery</li>
            <li>The same rigorous food safety standards as Nestle and Kraft Foods</li>
            <li>We buy direct from the farm</li>
          </ul>
        </Section>
        <Section>
          <Heading text="PRODUCTS" />
          <ProductTiles />
        </Section>
        <Section>
          <Heading text="<DATE HERE> FEATURED ITEMS" />
          <FeaturedList />
        </Section>
      </div>
    );
  }
}
