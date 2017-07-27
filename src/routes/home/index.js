import Content from '../../components/content';
import Header from '../../components/header';
import Heading from '../../components/heading';
import WhyUsList from '../../components/whyUsList';
import React, {h, Component} from 'preact';
import Section from '../../components/section';
import MapSection from '../../components/mapSection';
import style from './style';
import VideoBackground from '../../components/videoBackground';
import Hero from '../../components/hero';
import ProductTiles from '../../components/productTiles';
import FeaturedList from '../../components/featuredList';
import Carousel from '../../components/carousel';
import GoogleMapView from '../../components/map';
import Subscribe from '../../components/subscribe';

export default class Home extends Component {

  render() {

    // Shows the video or header image depending on device width
    const mq = window.matchMedia( "(min-width: 500px)" );
    let pageHero
    if (mq.matches) {
      // window width is at least 500px
      pageHero = <VideoBackground />
    } else {
      // window width is less than 500px
      pageHero = <Hero image={"https://lh3.googleusercontent.com/J-UeSx30SxoQedBNU3l9RHB2wdt9xAjIbxQyn4ejIBTDnjzzhzZiCbv7Amk2y8nDpwhxyFXKVMIhfpDPnsGKQZqjU8H3vXKnku1_AlTOZSLFXR1W5JUhsoBS2rI5EZQN8za2cYUbhEA_mFX38prdM8Lbj-uc2hu77udaMpNnuHDYL5-RgdYr1xdcp4v5RdZkKm8g98kRaiuzMNgWUPEiS24DSvx5iZyHPSE8nsqitAfL5WBQsun577qasyc24mFxVmA_-vZlIqfiYzPZ6Z29_PRpN1CWYsDlqJC2ZWeNAHo5uT55vu31nQhU25FBVRoW9WStK1TP18KDVJ2RVLIFS-PkvFP8ekFuq177VlSCLmhOCyZRYhAgXGwRb0fdtcyCC6MfDmpCwLdyTDPcH53ProWMkusZjQzMMpQs_SlDq7wmtygQqtqazYXGSClXEupat_Y2NH8GtOx4k_8a67-WWPgvG5r1O5ezf3KXgnobvEHcZN_xObHNwLz6Mn3jZT79U420SPYi8-oX5ATY8SjIG9F-L8un-WUn2a4aTIcEgwcdOQVViHg5wcccgmamUv1oCzgNQ9MfKQnjq7UmS1BdoSluo2XcXlS5a9_ywHUICD_A5k6SXWioslF4=w927-h521-no"} />
    }

    return (
      <div className={style.scroll}>
        {pageHero}
        <Section>
          <Heading text="WHERE FRESH MEETS FRIENDLY" />
          <Content text="Family owned since 1987, Wood's Produce has grown from its humble roots into a leading, full line perishable foods wholesaler."/>
          <WhyUsList />
          <Carousel></Carousel>
        </Section>
        <MapSection />
        <Section>
          <Heading text="PRODUCTS" />
          <Content text="With over 1,900 items on hand, we have everything you need for your retail market or restaurant. We have everything from display baskets to grocery bags (and of course, produce and candy) to make sure you always have what you need. If you need speciality packs or hard to find items we have partnered with leaders in the industry to make sure you get your product by the next delivery."/>
          <ProductTiles />
        </Section>
        <Section>
          <Heading text="FEATURED ITEMS" />
          <Content text="We work with suppliers and industry leaders to introduce new products and help out farmers if they run long on product. Every week we have a featured deals sheet filled with unique veg and deals on consumer staples. If you'd like to have this in your inbox every week (with prices!) please sign up:"/>
          <Subscribe />
          <FeaturedList />
        </Section>
      </div>
    );
  }
}
