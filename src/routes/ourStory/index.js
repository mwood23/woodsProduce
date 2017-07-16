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
        <Hero image="https://lh3.googleusercontent.com/uGwAEZX2PR54EdNY9b3m0Y1A1GKxzkUYKAOSbyuczXzlMY2xyPFe4D40MawHQHw9feaeMjn0OLvXaeDJt8FkGdmHkhpUof1vFAMruJ-3TNH5j6V3iBhl4GBmk5VOdmWpchctJKGvtN4VuMu2o4fs9Xk0H9f2x_0L2rSqun680XUXaQUXCpUUy6uvBdRUXgOOi_tUOKycYHBFwySKBj0HrhrBUcGhNFENBgPW-Y8MSbpKmazQIvprDlshaKtICbdUrjyuCqOEBmjx5Sw5b2Zm_Z6ePDqrsEX24JQYaq-3y0B0lNcabjtjfadkIUFMsVnS1bTX1FxZWrKLcJu4_e0_xZ3KXdAh7lucWR4PwoeWokT2pCh9n3PiqSrrTaTtM3VNWRZdAG_7KNOqErtQYVa1pjsvIQKDExybsirn-1mP9OMpzA2XySSMbipUiM_W2x_-vjVBbLHpSAkAMdyl7bc2qvygKMxHkeiN41bgwIpZukCC7gUz3peENvX-bXaOrUeDjwy4efOnGM389m9etwXU2jN2aWvrN5EmUq8MU5zpGxdsMhKIoYw2f03dYphn-n0TtuZwEJnHYp5_18f70mQMlrDzl1cuLwC22UHJhziIYKcNqCL7hzlPaMqgRXai1dpGiUbfEAYvecnOyQfx-Bc9MBrE6Ub7KTkgYbD6_JbMwzQ4wg=w512-h164-no" heading="Our Story" />
        <Section>
          <Heading text="WE'RE DEDICATED TO OUT CUSTOMERS" />
          <Content text="We know it takes hard work to deliver fresh food, and that's why Wood's Produce Company has been offering the highest quality produce since 1987. From our food safety practices to deliveries, everything we do is with integrity and dedication to customers like you.

          Take a look at our products and contact us if you see something you like. From our family to yours, we look forward to providing you with quality food." />
        </Section>
        <SectionPhoto image="http://woodsproduce.net/img/about/family-helper.jpg">
          <Content text="The groundwork for Wood’s Produce Company was laid in the mid-1970s when Mark Wood moved to Meadows of Dan, VA and found a job growing, packing, and delivering fresh cabbage for a family farm called Terry’s Produce. Working with the Terry family ingrained Mark with the core values of hard work, integrity, and dedication to the customer that Wood’s Produce Company has been built on from Day 1." />
        </SectionPhoto>
        <SectionPhoto image="http://woodsproduce.net/img/about/old-warehouse.jpg" rightAlignedPhoto>
          <Content text="Since 1948, Terry’s Produce & Plants had been cultivated a loyal customer base by delivering fresh, “mountain-grown” peppers, tomatoes, squash, cabbage, etc. that they grew. During his years of delivering for Terry’s, many of their customers asked him why they didn’t have other produce essentials like bananas, lettuce, and onions like other produce companies. Mark knew that to keep many of the Terry’s long-time customers happy, they needed to expand their product offering." />
        </SectionPhoto>
        <Section>
          <Content text="Armed with only a pickup truck and $200, Mark backed up to the dock at W.R. Vernon Produce in Winston-Salem, NC early one morning in the fall of 1983. He bought all the produce he could afford, and then stopped at businesses along his way home, selling out before he got back. After such a successful first trip, he was back at W.R. Vernon the next morning, ready to buy even more. The next four years, Mark helped Terry’s Produce & Plants grow by selling what they grew on the farm and filling in with what he could buy in Winston-Salem. When the Terry family decided to quit growing produce in 1987, Mark decided the best way to provide for his wife Carol and family was to carry on the produce business. He bought Terry’s Produce & Plants, changed the name to Wood’s Produce Company, and worked tirelessly, day after day, to take care of his customers better than anyone else could. Within 12 years, Mark and Carol had built Wood’s Produce Company into a $5 million dollar per year business, working out of a 3,000-square foot cabbage packing shed turned produce warehouse." />
        </Section>
        <SectionPhoto image="https://lh3.googleusercontent.com/96vV02uLlMdKW7bxIytbe41048jYqdtH5l4wX3PXVQ-exLt5aeM-hXSxfi98jfdxm6_x_b_TuTzMMS9CMFEwcYiX3vrHb5A5OodqZzzTmSzMsuSMXBdS1PEq7opVuTxSHRSPxcWecXCh4F3rgFHwuZUAwZLUaikWBg8HeGPWwyplS01TqGuTtYxU8xUw13c7OVmhBqUOvhnDpfR-KxInMyjCEnrVWk3xvAbRKHkiPtmNAcbVc-QhgvplHe--JHkX2w_FX5X_gWuL67bFqzmBDdwhWeK_OHEw9NLBK6jQjdlSr02mokuur1Tch337Ub4s-d2rjQcPq2J5m56p6IlqQOPWLEg8sW7O9srMqOR1FQXV6rPgBz01iT4JWaDdSq1N4RPKToQFyEf-QoiNsU7r7Rtr3dEn3NMzPdGw8u17lwPh67boWAjgBKIOkUXCJ-V5mCvVFDgja4Kwm8lig-9sCGf_qAEnk5EQGSrHHHH9j71-yQgX4dJ5D5SdybbRqavSdywJp9PKwD7CDLcdSfKfPpP_RX91tniU3bS_BiHx67T_zlrC2bIzehwmiwl91re5A53JPAnztOXxmh5h1EyefeVm8SY8F9LKa0a3bRIU3MZLS1YCi9rLQyIygpz-Qn8_xVOGIS45RExoRWki2yx1P1PQy_sytbnHPl5IzYL8wo7DEg=w1804-h1352-no" rightAlignedPhoto>
          <Content text="In 2000, Wood’s Produce Company moved to its current location and has been thriving ever since while remaining a true family business. After graduating from the University of Virginia in 2010, their son Jonathon came back to join the family business. Still growing to this day, in 2012, we completed construction on a new state-of-the-art cooler facility with capacity for an additional 40 trailer-loads of produce." />
        </SectionPhoto>
        <SectionPhoto image="https://lh3.googleusercontent.com/96vV02uLlMdKW7bxIytbe41048jYqdtH5l4wX3PXVQ-exLt5aeM-hXSxfi98jfdxm6_x_b_TuTzMMS9CMFEwcYiX3vrHb5A5OodqZzzTmSzMsuSMXBdS1PEq7opVuTxSHRSPxcWecXCh4F3rgFHwuZUAwZLUaikWBg8HeGPWwyplS01TqGuTtYxU8xUw13c7OVmhBqUOvhnDpfR-KxInMyjCEnrVWk3xvAbRKHkiPtmNAcbVc-QhgvplHe--JHkX2w_FX5X_gWuL67bFqzmBDdwhWeK_OHEw9NLBK6jQjdlSr02mokuur1Tch337Ub4s-d2rjQcPq2J5m56p6IlqQOPWLEg8sW7O9srMqOR1FQXV6rPgBz01iT4JWaDdSq1N4RPKToQFyEf-QoiNsU7r7Rtr3dEn3NMzPdGw8u17lwPh67boWAjgBKIOkUXCJ-V5mCvVFDgja4Kwm8lig-9sCGf_qAEnk5EQGSrHHHH9j71-yQgX4dJ5D5SdybbRqavSdywJp9PKwD7CDLcdSfKfPpP_RX91tniU3bS_BiHx67T_zlrC2bIzehwmiwl91re5A53JPAnztOXxmh5h1EyefeVm8SY8F9LKa0a3bRIU3MZLS1YCi9rLQyIygpz-Qn8_xVOGIS45RExoRWki2yx1P1PQy_sytbnHPl5IzYL8wo7DEg=w1804-h1352-no">
          <Content text="The most somber chapter in our history was written on October 8, 2015 when Carol Wood passed away following a long battle with cancer. Carol's unique brand of detail-oriented professionalism and tireless work ethic paired with her kind, compassionate personality were the groundwork upon which our company's friendly and ethical way of doing business were built. And just as Carol was always committed to serving our employees and customers no matter what hurdles life presented her with, Wood's Produce has continued to move forward and thrive by doing business in the kind, principled, customer service focused manner the she did." />
        </SectionPhoto>
        <Section>
          <Content text="In an ever-changing produce industry, Wood’s Produce Company has been successful by staying true to our principles of hard work, integrity, delivering the highest quality produce, and making customer satisfaction our top priority." />
        </Section>
      </div>
    );
  }
}
