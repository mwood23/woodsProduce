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
        <Hero image="https://lh3.googleusercontent.com/QgGD93CesOaRlZRjTYAUJGA1h87oknLMZGGcku0-zDyj_u0oUXrZ-JL1zz63z1SMQkD8zwKvBH2rsXeIdSlO8vF_DJOtuFXSmRc_soAlREBW_F6kcuSt63LbRlDuMEP_mrhCGxx_2-g-35xxoo9n0jnokT7kYkuuqe-cNeVp8Bgfy7LrL6_3SMatoV5Ka6C2sbx0I1hsgqu7eHLyPlk82ORqd01Yrr6nk4zTichi_s_Jl0pMJfm6StpFh4UfRXRUA17TPmSW88oQ9fd8BzUtkB44Nk06Prb8FetmwcFQ5wBZPQWGUrmdSHnoM3w-xmq3fDKscuFfjvyGoEspnAHpoD8PaQQ5hgiol6Y8ZKpnZRTF45fdJhyU63ENzwQzVkoegs0_YQdeohGhWkVS1Lu1x_Ct-G2bfeQUIZc6qxpYvpM9OLBg8RTI7WduedkkFPAN53SJwS2QVm5cQZZ0tT3YcVAibpHQi4NyMht1RIvvi7-k4YWjwPScrzWtSDjawIykCsMrRgiOMR9x-UdLkEFbBht-DXrKuA1N2hRHPl_g3hmH_pXwnRKCQQsYCL2P5lvHLt1qaVmg7-GGx4dHW_MVyy-l8ZPgmMwhn7di_ZmwKBpxomtobtoAFJO2ecE_h2k4qhmmPLojLkIZEcMT-Fbve90M78-wvijBNB9j32Kg3EDAMA=w1465-h481-no" heading="Our Story" />
        <Section>
          <Heading text="WE'RE DEDICATED TO OUR CUSTOMERS" />
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
        <SectionPhoto image="https://lh3.googleusercontent.com/CUT_CZ9qKOUQ3niCElW_RyxlfP8iKN_jlbtICX5aI6ttUvqb9Olp49z9-kuWiv43Y_c9RTZLRozglMLYzHPX9s4n2Wh1Y6leC9RJCb2a8_86i91NaUK8HoHnVcdZeCjKybSgWvF9hdIGKV5aIGwAPHMtPjVCKzjkzllPMza0Ts6diJrTPqefT7dIF6j4MQLVtWltN20t3ZfSHZgUetAjCTTEs3Pa5If7wxT2a17eIajngvp0p-3hMF96CPWiyk1j6S0F8Nc-AlWl4gBBbvKntcghj6mHFYlI-ICogiW9ssqBe_n1fjarPRtEYmp5WG9Q3r5XME8O-8kElwfGE9LVQU4Wi7egUSSWgQbW8lEEqbVk3lxTlfjOSNCIUIJCfzzvVWNfVgDPCH96BAccXZVsdv2Kv4frEJu2jqLTiYPTxHIUhH35B5qctTBOs9RlJftcG49ttYfsfBuMubRsymjQd-n6iJXV2kBKt8YHQ3fVlMkAQ1Y9iyRMWUFlB04vk3ZHkIosajEUuf-_2EPRh9Tcak2LXAPr3uo2nvrmmXACszPwjj_GVOBAejkP-BiRX_dncIX2ZCyGZDbesnjtRTkilr1wSXvMS0o-Tr7qXcQGcJCSXKX8fzungkCXq4sTqsHWrGKhIqoLGHon5Hf6Vsfv6f6DjdeIUD5nd7939SDvyuhNagQ=w1297-h866-no">
          <Content text="The most somber chapter in our history was written on October 8, 2015 when Carol Wood passed away following a long battle with cancer. Carol's unique brand of detail-oriented professionalism and tireless work ethic paired with her kind, compassionate personality were the groundwork upon which our company's friendly and ethical way of doing business were built. And just as Carol was always committed to serving our employees and customers no matter what hurdles life presented her with, Wood's Produce has continued to move forward and thrive by doing business in the kind, principled, customer service focused manner the she did." />
        </SectionPhoto>
        <Section>
          <Content text="In an ever-changing produce industry, Wood’s Produce Company has been successful by staying true to our principles of hard work, integrity, delivering the highest quality produce, and making customer satisfaction our top priority." />
        </Section>
      </div>
    );
  }
}
