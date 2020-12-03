import Content from "../../components/content";
import Header from "../../components/header";
import Heading from "../../components/heading";
import WhyUsList from "../../components/whyUsList";
import React, { h, Component } from "preact";
import Section from "../../components/section";
import MapSection from "../../components/mapSection";
import style from "./style";
import VideoBackground from "../../components/videoBackground";
import HomeHero from "../../components/homeHero";
import Button from "../../components/button";
import ProductTiles from "../../components/productTiles";
import FeaturedList from "../../components/featuredList";
import Carousel from "../../components/carousel";
import Subscribe from "../../components/subscribe";
import LazyLoad from "react-lazyload";
import Footer from "../../components/footer";

export default class Home extends Component {
  render() {
    // Shows the video or header image depending on device width
    const mq = window.matchMedia("(min-width: 500px)");
    let pageHero;
    if (mq.matches) {
      // window width is at least 500px
      pageHero = <VideoBackground />;
    } else {
      // window width is less than 500px
      pageHero = (
        <HomeHero
          image={
            <img
              sizes="(max-width: 927px) 100vw, 927px"
              srcset="https://res.cloudinary.com/woodsproduce/image/upload/q_80/c_scale,w_927/v1501372284/Wood%27s%20Produce%20Welcome%20Header%20Truck.png 927w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/q_80/c_scale,w_921/v1501372284/Wood%27s%20Produce%20Welcome%20Header%20Truck.png 921w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/q_80/c_scale,w_895/v1501372284/Wood%27s%20Produce%20Welcome%20Header%20Truck.png 895w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/q_80/c_scale,w_857/v1501372284/Wood%27s%20Produce%20Welcome%20Header%20Truck.png 857w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/q_80/c_scale,w_816/v1501372284/Wood%27s%20Produce%20Welcome%20Header%20Truck.png 816w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/q_80/c_scale,w_776/v1501372284/Wood%27s%20Produce%20Welcome%20Header%20Truck.png 776w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/q_80/c_scale,w_735/v1501372284/Wood%27s%20Produce%20Welcome%20Header%20Truck.png 735w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/q_80/c_scale,w_690/v1501372284/Wood%27s%20Produce%20Welcome%20Header%20Truck.png 690w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/q_80/c_scale,w_649/v1501372284/Wood%27s%20Produce%20Welcome%20Header%20Truck.png 649w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/q_80/c_scale,w_610/v1501372284/Wood%27s%20Produce%20Welcome%20Header%20Truck.png 610w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/q_80/c_scale,w_562/v1501372284/Wood%27s%20Produce%20Welcome%20Header%20Truck.png 562w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/q_80/c_scale,w_514/v1501372284/Wood%27s%20Produce%20Welcome%20Header%20Truck.png 514w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/q_80/c_scale,w_468/v1501372284/Wood%27s%20Produce%20Welcome%20Header%20Truck.png 468w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/q_80/c_scale,w_416/v1501372284/Wood%27s%20Produce%20Welcome%20Header%20Truck.png 416w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/q_80/c_scale,w_361/v1501372284/Wood%27s%20Produce%20Welcome%20Header%20Truck.png 361w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/q_80/c_scale,w_300/v1501372284/Wood%27s%20Produce%20Welcome%20Header%20Truck.png 300w"
              src="https://res.cloudinary.com/woodsproduce/image/upload/v1501372284/Wood%27s%20Produce%20Welcome%20Header%20Truck.png"
              alt=""
            />
          }
        />
      );
    }

    return (
      <div className={style.scroll}>
        {pageHero}
        <Section>
          <Heading text="CHRISTMAS IS RIGHT AROUND THE CORNER" />
          <div>
            <p style={{ marginBottom: "2rem", textAlign: "center" }}>
              Ring in the holidays with a Wood's Produce fruit basket. Makes a
              great gift!
            </p>
            <img
              style={{
                width: "100%",
                maxWidth: "400px",
                objectFit: "contain",
                margin: "0 auto 1rem",
                display: "block",
              }}
              src="https://my-site-104154-1073205.square.site/uploads/b/94edd576e79b5722a4195ff0e8e9975aac67d7ee007b3925397ed7a615426870/2020-12-02_10-22-00_1606922545.jpg?width=1200"
              alt="Woods Produce Fruit Basket"
            />
          </div>
          <div style={{ marginBottom: "2rem" }}>
            <Button
              url="https://my-site-104154-1073205.square.site/"
              text="Order Now"
            />
          </div>
        </Section>
        <Section>
          <Heading text="FAMILY OWNED SINCE 1987" />
          <Content text="Wood's Produce has grown from its humble roots into a leading, Mid-Atlantic, full line perishable foods wholesaler, specializing in fresh fruits and vegetables." />
          <WhyUsList />
          <LazyLoad height={300} offset={150}>
            <Carousel />
          </LazyLoad>
        </Section>
        <LazyLoad height={300} offset={275}>
          <MapSection />
        </LazyLoad>
        <Section>
          <Heading text="FEATURED ITEMS" />
          <Content text="We work with suppliers and industry leaders to introduce new products and help out farmers if they run long on product. Every week we have a featured deals sheet filled with unique veg and deals on consumer staples. If you'd like to have this in your inbox every week (with prices!) please sign up:" />
          <Subscribe />
          {/* <FeaturedList /> */}
        </Section>
        <Section>
          <Heading text="PRODUCTS" />
          <Content text="With over 1,900 items on hand, we have everything you need for your retail market or restaurant. We have everything from display baskets to grocery bags (and of course, produce and candy) to make sure you always have what you need. If you need speciality packs or hard to find items we have partnered with leaders in the industry to make sure you get your product by the next delivery." />
          <LazyLoad offset={200}>
            <ProductTiles />
          </LazyLoad>
        </Section>
        <Section>
          <Heading text="IF YOU'RE HERE TO ORDER" />
          <Content
            text={
              <span>
                Place your order online through our partner, BlueCart. Our
                driver will have it to you by your next delivery. Emergency
                order? Please call us to see how we can help at{" "}
                <b>
                  <a href="tel:+1-276-952-2971">276-952-2971</a>
                </b>
                .
              </span>
            }
          />
          <br />
          <Button text="LET'S GO" url="https://app.bluecart.com/login.html" />
        </Section>
        <Footer />
      </div>
    );
  }
}
