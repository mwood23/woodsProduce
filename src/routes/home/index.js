import Content from '../../components/content';
import Header from '../../components/header';
import Heading from '../../components/heading';
import WhyUsList from '../../components/whyUsList';
import React, {h, Component} from 'preact';
import Section from '../../components/section';
import style from './style';
import VideoBackground from '../../components/videoBackground';
import ProductTiles from '../../components/productTiles';
import FeaturedList from '../../components/featuredList';
import Carousel from '../../components/carousel';

export default class Home extends Component {

  render() {

    return (
      <div className={style.scroll}>
        <VideoBackground />
        <Section>
          <Heading text="WHERE FRESH MEETS FRIENDLY" />
          <Content text="Family owned since 1987, Wood's Produce has grown from its humble roots into a leading, full line perishable foods wholesaler."/>
          <WhyUsList />
          <Carousel></Carousel>
        </Section>
        {/* <Section>
          <Heading text="WHY US" />
          <ul>
            <li>Next Day Delivery</li>
            <li>Dependable Delivery</li>
            <li>The same rigorous food safety standards as Nestle and Kraft Foods</li>
            <li>We buy direct from the farm</li>
          </ul>
        </Section> */}
        <Section>
          <Heading text="PRODUCTS" />
          <ProductTiles />
        </Section>
        <Section>
          <Heading text="FEATURED ITEMS" />
          <FeaturedList />
        </Section>
      </div>
    );
  }
}
