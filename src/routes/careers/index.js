import React, {h, Component} from 'preact';
import style from './style';
import Hero from '../../components/hero'
import Section from '../../components/section'
import Heading from '../../components/heading'
import Content from '../../components/content'

export default class Careers extends Component {

  render() {
    // const flexStart = {
    //   align-self:
    // }

    return (
      <div>
      <Hero image={<img src="https://lh3.googleusercontent.com/JlDbMUkyl7PGBttzPoWvniMSG8dtFKjGDNA1ethNe0twzRqSQ9mfKZxjqlGrGB9F88qU4g3Xxw49bMaHDWa9diH-Hi1n0Ofl-DVBaBGd5be_IwlkA1qI3IJXGQcQwtBv-60eHSN0n6yx83xNW5ULFHZg9yzpMhrf0zltj--Cnrc_Ww6cphga5_qqTFKjjlaTI_YQE-Ma7gFTVkkKOpmzlw_2WgecrwfIhl9ivGMXH7c0tCxyUv0DjIjT4rrXrspw1JOoKJzJxe_hEz9e3c3fzLp1DEk5zhYxvUmdh58fl8KpACAYys2b_6t0rE2L--avD930Ng1mP6mctFHn6e-J6DUaR-khMZIObIIvEdX0t7J3gQPeInaZ2KdXROTh6J8a1_BbtwYx18svdAa7GJjzBTAiL3f2ucm1SNoOWk6_pX2tcAVzagdUxjqIfWJFYm80T08U6XPqyl5-H5mDurKa1kv8qnA5t-XKlunAfbVyRVw0mXDHUi1cjSc5k0qSmwISIwsPEwzoUWL840_RmWwKTCovBBA_Swp2xRLe5SyiqBUj7iYIk_WRFXK9HD696wKls8KgERTwZidRmFoJHYGACyAOi1bXM1xnygs6iy0PoxZtxTNrKQhuLmImArl5AXy590WTSf7hkI7iTbn6b2xudbdtJngH43aHaGvbpl0KnQarhw=w1356-h454-no" />} heading="Careers" />
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
          <h2>Mechanic</h2>
          <Content text="We are looking for a mechanic to assist with general maintenance and upkeep on our fleet of 26 trucks. Daily responsibilities include: changing oil, filters, tires, and general truck servicing in our state of the art 10,000 square foot shop. Previous experience in a shop is preferred, but not necessary." />
          <h2>Truck Driver</h2>
          <Content text={<span>Open positions for Class A/B CDL drivers. Wood's Produce delivers to 5 states with daily routes to our customers. <b>Home every night.</b></span>} />
          <h2>Warehouse Associate</h2>
          <Content text={<span>A warehouse associate has a variety of responsibilities that includes picking orders, assisting customers, repacking goods, rotating inventory, and ensuring our customers receive the best product possible. Previous experience in a warehouse with active forklift certification is preferred, but not required.<br />*Must be able to lift over 50 pounds</span>} />

        </Section>
      </div>
    );
  }
}
