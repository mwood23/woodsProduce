import React, {h, Component} from 'preact';
import style from './style';
import Hero from '../../components/hero';
import Section from '../../components/section';
import SectionPhoto from '../../components/sectionPhoto';
import Heading from '../../components/heading';
import Content from '../../components/content';
import RowList from '../../components/rowList';
import Footer from '../../components/footer';

export default class FoodSafety extends Component {

  render() {
    return (
      <div>
        <Hero image={<img sizes="(max-width: 2600) 100vw, 2600"
    srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_2600/v1501372719/Wood%27s%20Produce%20Header%20Produce%20Peppers.jpg 2600w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_2576/v1501372719/Wood%27s%20Produce%20Header%20Produce%20Peppers.jpg 2576w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_2270/v1501372719/Wood%27s%20Produce%20Header%20Produce%20Peppers.jpg 2270w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_2026/v1501372719/Wood%27s%20Produce%20Header%20Produce%20Peppers.jpg 2026w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_1701/v1501372719/Wood%27s%20Produce%20Header%20Produce%20Peppers.jpg 1701w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_1334/v1501372719/Wood%27s%20Produce%20Header%20Produce%20Peppers.jpg 1334w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_899/v1501372719/Wood%27s%20Produce%20Header%20Produce%20Peppers.jpg 899w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_300/v1501372719/Wood%27s%20Produce%20Header%20Produce%20Peppers.jpg 300w"
    src="https://res.cloudinary.com/woodsproduce/image/upload/v1501372719/Wood%27s%20Produce%20Header%20Produce%20Peppers.jpg"
    alt="Yellow Peppers"
  />} heading="Food Safety" />
        <Section>
          <Heading text="THE HEART OF WHAT WE DO" />
          <Content text="Food safety is the primary focus in everything we do. We require that all of our suppliers are audited by the Global Food Safety Initiatives (GFSI) benchmarks and deliver on refrigerated trucks. Our facilities have achieved Safe Quality Foods (SQF) Level 2 and the USDA's Good Handling & Agricultural Practices certifications." />
        </Section>
        <SectionPhoto image={<img sizes="(max-width: 1500) 30vw, 400"
    srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_400/v1501372285/Potato%20Cooler%20Wood%27s%20Produce.jpg 400w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_380/v1501372285/Potato%20Cooler%20Wood%27s%20Produce.jpg 380w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_150/v1501372285/Potato%20Cooler%20Wood%27s%20Produce.jpg 150w"
    src="https://res.cloudinary.com/woodsproduce/image/upload/v1501372285/Potato%20Cooler%20Wood%27s%20Produce.jpg"
    alt="Wood's Produce Potato Cooler"
  />}>
          <Heading text="FOOD SAFETY PROGRAMS" />
          {/* <Content text="Food safety is the primary focus in everything we do. We require that all of our suppliers are audited by the Global Food Safety Initiatives (GFSI) benchmarks and deliver on refrigerated trucks. Our facilities have achieved Safe Quality Foods (SQF) Level 2 and the USDA's Good Handling & Agricultural Practices certifications." /> */}
          <ul>
            <li>Full-time food safety practictioner on site</li>
            <li>Nine temperature and humidity controlled coolers</li>
            <li>Full Hazard Analysis Critical Control Point (HACCP) Program</li>
            <li>Intelligent supply chain software that can conduct recalls immdiately</li>
            <li>24 hour surveillance system</li>
          </ul>
        </SectionPhoto>
        <SectionPhoto image={<img sizes="(max-width: 1500) 30vw, 400"
    srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_400/v1501372285/Citrus%20Cooler%20Wood%27s%20Produce.jpg 400w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_387/v1501372285/Citrus%20Cooler%20Wood%27s%20Produce.jpg 387w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_150/v1501372285/Citrus%20Cooler%20Wood%27s%20Produce.jpg 150w"
    src="https://res.cloudinary.com/woodsproduce/image/upload/v1501372285/Citrus%20Cooler%20Wood%27s%20Produce.jpg"
    alt="Wood's Produce Citrus Cooler"
  />} rightAlignedPhoto>
          <ul>
            <li>Use of all electric warehouse equipment to prevent dangerous fumes from coming in contact with product</li>
            <li>Fleet of 27 temperature controlled trucks</li>
            <li>Extensive food safety training for every employee</li>
            <li>100 Kilowatt, Caterpillar D-100 6 generator to maintain our cold-chain through severe weather conditions</li>
          </ul>
        </SectionPhoto>
        <Section>
          <Heading text="CERTIFICATIONS" />
          <RowList />
        </Section>
        <Footer />
      </div>
    );
  }
}
