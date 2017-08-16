import React, {h, Component} from 'preact';
import style from './style';
import Hero from '../../components/hero'
import Section from '../../components/section'
import Heading from '../../components/heading'
import Content from '../../components/content'
import Footer from '../../components/footer';

export default class Careers extends Component {

  render() {
    // const flexStart = {
    //   align-self:
    // }

    return (
      <div className={style.careers}>
      <Hero image={<img sizes="(max-width: 1600px) 100vw, 1600px"
    srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_1600/v1502844979/Header%20Wood%27s%20Produce%20Careers.jpg 1600w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_1588/v1502844979/Header%20Wood%27s%20Produce%20Careers.jpg 1588w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_1477/v1502844979/Header%20Wood%27s%20Produce%20Careers.jpg 1477w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_1300/v1502844979/Header%20Wood%27s%20Produce%20Careers.jpg 1300w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_1096/v1502844979/Header%20Wood%27s%20Produce%20Careers.jpg 1096w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_901/v1502844979/Header%20Wood%27s%20Produce%20Careers.jpg 901w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_641/v1502844979/Header%20Wood%27s%20Produce%20Careers.jpg 641w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_300/v1502844979/Header%20Wood%27s%20Produce%20Careers.jpg 300w"
    src="https://res.cloudinary.com/woodsproduce/image/upload/v1502844979/Header%20Wood%27s%20Produce%20Careers.jpg"
    alt="Wood's Produce Careers Header Image"
  />} heading="Careers" />
        <Section>
          <Heading text="JOIN THE TEAM" />
          <Content text={<span>We're always looking for new people to join our team. Working in the produce industry is challenging work that demands people who embrace the challenge. We look for employees who will go the extra mile for our customers and are interested in the perishable foods industry. <br /><br /> <u>Full-time employees receive the following benefits:</u></span>} />
          <ul style={{alignSelf: 'flex-start'}}>
            <li>Simple retirement plan</li>
            <li>Paid time off</li>
            <li>Health insurance</li>
            <li>Daily ping pong exhibitions</li>
          </ul>
        </Section>
        <Section>
          <Heading text="Current Openings" />
          <Content text={<span>If you feel like you would be a great fit and are ready to take the next step please send your resume to <b>marcus_sales@woodsproduce.net</b></span>} />
          <h3>Mechanic</h3>
          <Content text="We are looking for a mechanic to assist with general maintenance and upkeep on our fleet of 26 trucks. Daily responsibilities include: changing oil, filters, tires, and general truck servicing in our state of the art 10,000 square foot shop. Previous experience in a shop is preferred, but not necessary." />
          <h3>Truck Driver</h3>
          <Content text={<span>Open positions for Class A/B CDL drivers. Wood's Produce delivers to 5 states with daily routes to our customers. <b>Home every night.</b></span>} />
          <h3>Warehouse Associate</h3>
          <Content text={<span>A warehouse associate has a variety of responsibilities that includes picking orders, assisting customers, repacking goods, rotating inventory, and ensuring our customers receive the best product possible. Previous experience in a warehouse with active forklift certification is preferred, but not required.<br />*Must be able to lift over 50 pounds</span>} />
        </Section>
        <Footer />
      </div>
    );
  }
}
