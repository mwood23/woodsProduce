import React, {h, Component} from 'preact';
import style from './style';
import Hero from '../../components/hero'
import Section from '../../components/section'
import Heading from '../../components/heading'
import Content from '../../components/content'

export default class Careers extends Component {

  render() {
    return (
      <div>
      <Hero image="https://lh3.googleusercontent.com/Q4q8lAzjXm4uul_bMsFCtudKNCB0b22lDqmk9RYPuXKLTvOnFRlNSlgxvQ7S6MW4g6HrB5eP8Z7H43o9f5OZE8YsBuOKG-k6yLBkVGLXESgrxKVrf2a65-SSfKI_9R-38f0iyhd45h5pJXmqy4Tqf2e0Oe-OCN-FqGpsNP8Gi1UdkcIebSaDBofXbnYwbD7tkgHbM0rS2N1Vgf03NFS7A-YZ9smpks8cLS9ssmVeN_qhig6Y_gKANn0u2veEZ1_nFvqJHuJ1JKbbxzvQjc8mjR4mwwp0Bnd6_UBdEGjx_EsJDnpWlItOyD4eKCYUxhcTco8v1C01SVKwQA4-c8FKeGnZSSXCAaMkKGovrW9RAis02xDIjhqbvgFxxOJppmKfjq2LHMj6XaRctmfJqqylrwsQYBRMVpTMBv57SeMGq5YTGBEAU5fHFp6h-JxGZhYuPDQrv_p5mLB-Udhf0PvExdXjKxKi-sD_LHUEkpQs67QosVF_ixcrjwqEpj0jrNFUl7zA9nghPARFwEaaFjAiReWGOolDuBfLxQplQFnpx8l9jnchHyLSd5NntuwT_KvHgyZGvhf7ObMv1YhUjc1lL6JIaw-mTfsmL1Mqyi_KGQM9f7QD90_ut72qOyNiMEGcm0gAcpr6byJOL22McFmbIRpswtOdL1iPbh47yTgBAWM6Pg=w2086-h688-no" heading="Careers" />
        <Section>
          <Heading text="JOIN THE TEAM" />
          <Content text="We're always looking for new people to join our team. Working in the produce industry is challenging work that demands people who embrace the challenge. We look for employees who will go the extra mile for our customers and are interested in the perishable foods industry. Full-time employees receive the following benefits:" />
          <ul>
            <li>Simple retirement plan</li>
            <li>Paid time off</li>
            <li>Health insurance</li>
            <li>Daily ping pong exhibitions</li>
          </ul>
        </Section>
        <Section>
          <Heading text="Current Openings" />
          <Content text="If you feel like you would be a great fit and are ready to take the next step please send your resume to marcus_sales@woodsproduce.net" />
          <h2>Mechanic</h2>
          <Content text="We are looking for a mechanic to assist with general maintenance and upkeep on our fleet of 26 trucks. Daily responsibilities include: changing oil, filters, tires, and general truck servicing in our state of the art 10,000 square foot shop." />
          <h2>Truck Driver</h2>
          <Content text="Open positions for Class A/B CDL drivers. Wood's Produce delivers to 5 states with daily routes to our customers. Home every night." />
          <h2>Warehouse Associate</h2>
          <Content text="A warehouse associate has a variety of responsibilities that includes picking orders, assisting customers, repacking goods, rotating inventory, and ensuring our customers receive the best product possible. *Must be able to lift over 50 pounds" />

        </Section>
      </div>
    );
  }
}
