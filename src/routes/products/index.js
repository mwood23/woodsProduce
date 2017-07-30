import React, {h, Component} from 'preact';
import style from './style';
import Header from '../../components/header';
import Hero from '../../components/hero';
import SectionPhoto from '../../components/sectionPhoto';
import Section from '../../components/section';
import Content from '../../components/content';
import Heading from '../../components/heading';
import Subscribe from '../../components/subscribe';

export default class Products extends Component {

  render() {
    return (
    <div>
      <Hero image={<img sizes="(max-width: 4032) 100vw, 4032"
    srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_2600/v1501378727/Wood%27s%20Produce%20Header%20Produce%20Peaches.jpg 2600w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_2554/v1501378727/Wood%27s%20Produce%20Header%20Produce%20Peaches.jpg 2554w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_2390/v1501378727/Wood%27s%20Produce%20Header%20Produce%20Peaches.jpg 2390w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_2166/v1501378727/Wood%27s%20Produce%20Header%20Produce%20Peaches.jpg 2166w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_1951/v1501378727/Wood%27s%20Produce%20Header%20Produce%20Peaches.jpg 1951w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_1711/v1501378727/Wood%27s%20Produce%20Header%20Produce%20Peaches.jpg 1711w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_1445/v1501378727/Wood%27s%20Produce%20Header%20Produce%20Peaches.jpg 1445w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_1163/v1501378727/Wood%27s%20Produce%20Header%20Produce%20Peaches.jpg 1163w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_799/v1501378727/Wood%27s%20Produce%20Header%20Produce%20Peaches.jpg 799w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_300/v1501378727/Wood%27s%20Produce%20Header%20Produce%20Peaches.jpg 300w"
    src="https://res.cloudinary.com/woodsproduce/image/upload/v1501378727/Wood%27s%20Produce%20Header%20Produce%20Peaches.jpg"
    alt="Peaches"
  />} heading="Our Products" />
      <Section>
        <Heading text="A LITTLE BIT OF EVERYTHING" />
        <Content text="We have over 1,200 different items that range from your fruits and vegetables to an extensive collection of honey, jams, jar goods, and old-fashioned candy. The good thing about our size is that if we don't have it, we can get it for you before your next delivery since product is coming into our facility from around the country seven days a week." />
      </Section>
      <SectionPhoto image={<img sizes="(max-width: 1500) 30vw, 400"
    srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_400/v1501372285/Wood%27s%20Produce%20Fruits%20and%20Vegetables.jpg 400w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_374/v1501372285/Wood%27s%20Produce%20Fruits%20and%20Vegetables.jpg 374w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_150/v1501372285/Wood%27s%20Produce%20Fruits%20and%20Vegetables.jpg 150w"
    src="https://res.cloudinary.com/woodsproduce/image/upload/v1501372285/Wood%27s%20Produce%20Fruits%20and%20Vegetables.jpg"
    alt="Fruits and Vegetables"
  />}>
        <Heading text="PRODUCE" />
        <Content text="Relationships run the perishable foods industry. We have cultivated relationships with top growers in the nation to buy direct so we can give you fresher, better quality product for a cheaper price." />
      </SectionPhoto>
      <SectionPhoto image={<img sizes="(max-width: 155) 30vw, 500"
    srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_500/v1501377264/Wood%27s%20Produce%20Candy%20Home%20Overview.jpg 500w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_491/v1501377264/Wood%27s%20Produce%20Candy%20Home%20Overview.jpg 491w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_401/v1501377264/Wood%27s%20Produce%20Candy%20Home%20Overview.jpg 401w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_311/v1501377264/Wood%27s%20Produce%20Candy%20Home%20Overview.jpg 311w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_180/v1501377264/Wood%27s%20Produce%20Candy%20Home%20Overview.jpg 180w"
    src="https://res.cloudinary.com/woodsproduce/image/upload/v1501377264/Wood%27s%20Produce%20Candy%20Home%20Overview.jpg"
    alt="Candy Assortment"
  />} rightAlignedPhoto>
        <Heading text="CANDY" />
        <Content text="Old fashioned candy be hard to find from wholesalers. We carry a full assortment of candy that has everything from double-dipped peanuts to Pixie Stix. Some of our top sellers include:" />
        <ul>
          <li>Maple Nut Goodies</li>
          <li>PB Bars</li>
          <li>Orange Slices</li>
          <li>Yogurt Pretzels</li>
        </ul>
      </SectionPhoto>
      <SectionPhoto image={<img sizes="(max-width: 400) 30w, 400"
    srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_400/v1501377265/Wood%27s%20Produce%20Jars%20Home%20Overview.jpg 400w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_150/v1501377265/Wood%27s%20Produce%20Jars%20Home%20Overview.jpg 150w"
    src="https://res.cloudinary.com/woodsproduce/image/upload/v1501377265/Wood%27s%20Produce%20Jars%20Home%20Overview.jpg"
    alt="Dutch Kettle Jar Goods"
  />}>
        <Heading text="JAR GOODS" />
        <Content text="We carry a full selection of jams, honey, jellies, relishes, and pickled goods from:" />
        <ul>
          <li>Gunter's Honey</li>
          <li>Dutch Kettle</li>
          <li>Jake & Amos</li>
          <li>Hiatt's</li>
          <li>Private label options and more!</li>
        </ul>
      </SectionPhoto>
      <SectionPhoto image={<img src="https://images.pexels.com/photos/8439/food-eggs.jpg?w=940&h=650&auto=compress&cs=tinysrgb" alt="Eggs" />} rightAlignedPhoto>
        <Heading text="EGGS AND FLOUR" />
        <Content text="We have sourced from local suppliers for our eggs and flour for years. Eggs are always in stock and flour orders are customized each week to ensure you have what you need. Our selection includes:" />
        <ul>
          <li>Double-yoked eggs</li>
          <li>Loose and carton eggs</li>
          <li>Big Spring Mill flour</li>
        </ul>
      </SectionPhoto>
      <SectionPhoto image={<img src="https://images.pexels.com/photos/499173/pexels-photo-499173.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt="Packaging" />}>
        <Heading text="PACKAGING" />
        <Content text="Full assortment of packaging. We have everything from t-shirt to paper bags for your packaging needs. In addition, we offer display baskets, bins, and break bulk on new bins and boxes." />
      </SectionPhoto>
      <Section>
        <Heading text="DIDN'T SEE WHAT YOU WERE LOOKING FOR?" />
        <Content text="Most likely we can get it for you. Give us a call to tell us more. Looking for deals? We have a weekly newsletter that features hot deals! Sign up here:" />
        <Subscribe />
      </Section>
    </div>
    );
  }
}
