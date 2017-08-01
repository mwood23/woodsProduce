import React, {h, Component} from 'preact';
import style from './style';
import Header from '../../components/header';
import Hero from '../../components/hero';
import Section from '../../components/section';
import Heading from '../../components/heading';
import Content from '../../components/content';
import SectionPhoto from '../../components/sectionPhoto';

export default class OurStory extends Component {

  render() {
    return (
      <div>
        <Hero image={<img sizes="(max-width: 1465) 100vw, 1465"
    srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_1465/v1501391730/Wood%27s%20Produce%20Header%20Produce%20Peaches.jpg 1465w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_1369/v1501391730/Wood%27s%20Produce%20Header%20Produce%20Peaches.jpg 1369w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_928/v1501391730/Wood%27s%20Produce%20Header%20Produce%20Peaches.jpg 928w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_300/v1501391730/Wood%27s%20Produce%20Header%20Produce%20Peaches.jpg 300w"
    src="https://res.cloudinary.com/woodsproduce/image/upload/v1501391730/Wood%27s%20Produce%20Header%20Produce%20Peaches.jpg"
    alt="Little Helper Helping"
  />} heading="Our Story" />
        <Section>
          <Heading text="WE'RE DEDICATED TO OUR CUSTOMERS" />
          <Content text="We know it takes hard work to deliver fresh food, and that's why Wood's Produce Company has been offering the highest quality produce since 1987. From our food safety practices to deliveries, everything we do is with integrity and dedication to customers like you.

          Take a look at our products and contact us if you see something you like. From our family to yours, we look forward to providing you with quality food." />
        </Section>
        <SectionPhoto image={<img sizes="(max-width: 320) 30vw, 320"
    srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_320/v1501372286/Wood%27s%20Produce%20Family%20Helper.jpg 320w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_150/v1501372286/Wood%27s%20Produce%20Family%20Helper.jpg 150w"
    src="https://res.cloudinary.com/woodsproduce/image/upload/v1501372286/Wood%27s%20Produce%20Family%20Helper.jpg"
    alt="Little Helper At Wood's Produce"
  />}>
          <Content text="The groundwork for Wood’s Produce Company was laid in the mid-1970s when Mark Wood moved to Meadows of Dan, VA and found a job growing, packing, and delivering fresh cabbage for a family farm called Terry’s Produce. Working with the Terry family ingrained Mark with the core values of hard work, integrity, and dedication to the customer that Wood’s Produce Company has been built on from Day 1." />
        </SectionPhoto>
        <SectionPhoto image={<img sizes="(max-width: 400) 100vw, 400"
    srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_400/v1501564755/Wood%27s%20Produce%20Warehouse%20OLD.jpg 400w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_150/v1501564755/Wood%27s%20Produce%20Warehouse%20OLD.jpg 150w"
    src="https://res.cloudinary.com/woodsproduce/image/upload/v1501564755/Wood%27s%20Produce%20Warehouse%20OLD.jpg"
    alt=""
  />} rightAlignedPhoto>
          <Content text="Since 1948, Terry’s Produce & Plants had been cultivated a loyal customer base by delivering fresh, “mountain-grown” peppers, tomatoes, squash, cabbage, etc. that they grew. During his years of delivering for Terry’s, many of their customers asked him why they didn’t have other produce essentials like bananas, lettuce, and onions like other produce companies. Mark knew that to keep many of the Terry’s long-time customers happy, they needed to expand their product offering." />
        </SectionPhoto>
        <Section>
          <Content text="Armed with only a pickup truck and $200, Mark backed up to the dock at W.R. Vernon Produce in Winston-Salem, NC early one morning in the fall of 1983. He bought all the produce he could afford, and then stopped at businesses along his way home, selling out before he got back. After such a successful first trip, he was back at W.R. Vernon the next morning, ready to buy even more. The next four years, Mark helped Terry’s Produce & Plants grow by selling what they grew on the farm and filling in with what he could buy in Winston-Salem. When the Terry family decided to quit growing produce in 1987, Mark decided the best way to provide for his wife Carol and family was to carry on the produce business. He bought Terry’s Produce & Plants, changed the name to Wood’s Produce Company, and worked tirelessly, day after day, to take care of his customers better than anyone else could. Within 12 years, Mark and Carol had built Wood’s Produce Company into a $5 million dollar per year business, working out of a 3,000-square foot cabbage packing shed turned produce warehouse." />
        </Section>
        <SectionPhoto image={<img sizes="(max-width: 400) 100vw, 400"
    srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_400/v1501564702/Apple%20Cooler%20Completed.jpg 400w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_373/v1501564702/Apple%20Cooler%20Completed.jpg 373w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_150/v1501564702/Apple%20Cooler%20Completed.jpg 150w"
    src="https://res.cloudinary.com/woodsproduce/image/upload/v1501564702/Apple%20Cooler%20Completed.jpg"
    alt=""
  />} rightAlignedPhoto>
          <Content text="In 2000, Wood’s Produce Company moved to its current location and has been thriving ever since while remaining a true family business. After graduating from the University of Virginia in 2010, their son Jonathon came back to join the family business. Still growing to this day, in 2012, we completed construction on a new state-of-the-art cooler facility with capacity for an additional 40 trailer-loads of produce." />
        </SectionPhoto>
        <SectionPhoto image={<img sizes="(max-width: 400) 30vw, 400"
    srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_400/v1501372284/Carol%20Wood%27s%20Produce.jpg 400w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_150/v1501372284/Carol%20Wood%27s%20Produce.jpg 150w"
    src="https://res.cloudinary.com/woodsproduce/image/upload/v1501372284/Carol%20Wood%27s%20Produce.jpg"
    alt="Carol Wood"
  />}>
          <Content text="The most somber chapter in our history was written on October 8, 2015 when Carol Wood passed away following a long battle with cancer. Carol's unique brand of detail-oriented professionalism and tireless work ethic paired with her kind, compassionate personality were the groundwork upon which our company's friendly and ethical way of doing business were built. And just as Carol was always committed to serving our employees and customers no matter what hurdles life presented her with, Wood's Produce has continued to move forward and thrive by doing business in the kind, principled, customer service focused manner the she did." />
        </SectionPhoto>
        <Section>
          <Content text="In an ever-changing produce industry, Wood’s Produce Company has been successful by staying true to our principles of hard work, integrity, delivering the highest quality produce, and making customer satisfaction our top priority." />
        </Section>
      </div>
    );
  }
}
