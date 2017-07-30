import Content from '../../components/content';
import Header from '../../components/header';
import Heading from '../../components/heading';
import WhyUsList from '../../components/whyUsList';
import React, {h, Component} from 'preact';
import Section from '../../components/section';
import MapSection from '../../components/mapSection';
import style from './style';
import VideoBackground from '../../components/videoBackground';
import HomeHero from '../../components/homeHero';
import Button from '../../components/button';
import ProductTiles from '../../components/productTiles';
import FeaturedList from '../../components/featuredList';
import Carousel from '../../components/carousel';
import GoogleMapView from '../../components/map';
import Subscribe from '../../components/subscribe';
import LazyImage from '../../components/lazyImage';
import LazyLoad from 'react-lazyload';

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
      pageHero = <HomeHero image={<img sizes="(max-width: 927) 100vw, 927"
    srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_927/v1501372284/Wood%27s%20Produce%20Welcome%20Header%20Truck.png 927w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_851/v1501372284/Wood%27s%20Produce%20Welcome%20Header%20Truck.png 851w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_741/v1501372284/Wood%27s%20Produce%20Welcome%20Header%20Truck.png 741w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_617/v1501372284/Wood%27s%20Produce%20Welcome%20Header%20Truck.png 617w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_485/v1501372284/Wood%27s%20Produce%20Welcome%20Header%20Truck.png 485w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_300/v1501372284/Wood%27s%20Produce%20Welcome%20Header%20Truck.png 300w"
    src="https://res.cloudinary.com/woodsproduce/image/upload/v1501372284/Wood%27s%20Produce%20Welcome%20Header%20Truck.png"
    alt=""
  />} />
    }

    return (
      <div className={style.scroll}>
        {pageHero}
        <Section>
          <Heading text="WHERE FRESH MEETS FRIENDLY" />
          <Content text="Family owned since 1987, Wood's Produce has grown from its humble roots into a leading, full line perishable foods wholesaler."/>
          <WhyUsList />
          <LazyLoad height={300} offset={50}>
            <Carousel></Carousel>
          </LazyLoad>
        </Section>
        <MapSection />
        <Section>
          <Heading text="FEATURED ITEMS" />
          <Content text="We work with suppliers and industry leaders to introduce new products and help out farmers if they run long on product. Every week we have a featured deals sheet filled with unique veg and deals on consumer staples. If you'd like to have this in your inbox every week (with prices!) please sign up:"/>
          <Subscribe />
          {/* <FeaturedList /> */}
        </Section>
        <Section>
          <Heading text="PRODUCTS" />
          <Content text="With over 1,900 items on hand, we have everything you need for your retail market or restaurant. We have everything from display baskets to grocery bags (and of course, produce and candy) to make sure you always have what you need. If you need speciality packs or hard to find items we have partnered with leaders in the industry to make sure you get your product by the next delivery."/>
          <ProductTiles />
        </Section>
        <Section>
          <Heading text="IF YOU'RE HERE TO ORDER" />
          <Content text={<span>Place your order online through our partner, BlueCart. Our driver will have it to you by your next delivery. Emergency order? Please call us to see how we can help at <b>276-952-2978</b></span>}/>
          <br />
          <Button text="LET'S GO" url="https://app.bluecart.com/login.html" />
        </Section>
      </div>
    );
  }
}
