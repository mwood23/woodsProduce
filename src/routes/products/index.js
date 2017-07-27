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
      <Hero image="https://lh3.googleusercontent.com/qYkJHlkhaIV9RIBe7pU-E83g4Yve4lbCN2z6B7UCcXlgrbXDZUdX1d5heHLjjD4pDvlI9Hp37UBTK_sP36tDyz3ETsKJ8aCP504bI8MLYmBhW5-y7JXCDNszByek0DxBr1ZJJtVoa6HqkWWBbHJc-D6E8FiVnkLrpVjgrQ1h8urppS1JAw6Xhp4dSzoV3hCurUP5OeSIp6Z2rqPX1t4ExwCowQ-uwDHFyQDdsvPC4Fz9sLlkCDHAZBqtUqTz888gtAXZ3mczIWBf3d6A8ZshKCIE6tMtW1q50E4ia3mA44hj6MZ3i-7gNNfZDbW3rVkqL4d94WvVui8XvV2nMbgYTl6OujsnJa9cjK_8X0lUK5z7A-Wexk7FqFhRUSLCKlV3If-zDs171KVDU9avyR0fEv2_QxVn_NmhAotaPBUup3Pwh0MeEEeq5lTe3m4GF_7-9JyLeRaaPhQDgCN3VMOZNMjIlmF_xJhANux0jNZw0nvgepIBUvS3yz4jQBvHfnW-BHvLPFJXvKzYRE4N-UrXCxfrNLt6OUpVGIISoH7I_rv18OIwmI1W0oQvpJC-ZB2lUPReJVXhEz5cYKgDu9NjNUJiufhhok05mm-lvu7OstN1xxb8omAXxl9fCFqHjboEdaXzPljAlT6QLB8-A5UR_3lUDWEp1jc0gNlPPwyr4bx3ZQ=w2240-h688-no" heading="Our Products" />
      <Section>
        <Heading text="A LITTLE BIT OF EVERYTHING" />
        <Content text="We have over 1,200 different items that range from your fruits and vegetables to an extensive collection of honey, jams, jar goods, and old-fashioned candy. The good thing about our size is that if we don't have it, we can get it for you before your next delivery since product is coming into our facility from around the country seven days a week." />
      </Section>
      <SectionPhoto image="https://lh3.googleusercontent.com/V1Qe7Mr7Liu8WD3d9hZE4SwCYFfMXEAq-CK2LPKt4pa3tXoQzLfVZZIrLN4vmdSZ1ulva73bEFg19m7qZeQYCNJP5BXVarnhBPKPBLuy6ftXnOMnkdljj8Ti7UXnjhwuM5DWoRgkgFsJ3na4W9_oqGe3JjFkz4s7ssBkAQDwYX4wMb6QIuYe5SNZGegJGkyP3E7NTqmkdzAC0smvBiN6jCqxZ8CsmZNCYCclUDvScT1hDgL3KWyQc40RM7vC6C7erSmKTRTSMlawdb_r_ocwTsnVeerEEI7j1V17iIrN6DyY27pB1SBtBYnw92q8cGShyKwqvOPXy11LdumE7b3pNJn6vrUydplsUFBvUnlKJyOBQMVT567XRWZOvlvRo6rzQSOxwAuBzr6CuwtWPnashLt6v4dDROaC6Lz3gAthAdf4_Vjqqom-ZVQuIMGJrgzLPKHm_2NQcJC5GS3AK6GY0dodSl7gE-8osMQEiGNDs_LY8rIYrps2T1VtVESjAT1wluVv27Xd_CITK_HhMjAOmN5SEv7_0C9ybMyH2V0dgMv_rzmul0zebDBe719K1H_z_Oko1L9i5v1dbTDgFDTyx3-gHeC5kXcaTNflxOWCKvLCBoVrS-TVLm7R=w1804-h1352-no">
        <Heading text="PRODUCE" />
        <Content text="Relationships run the perishable foods industry. We have cultivated relationships with top growers in the nation to buy direct so we can give you fresher, better quality product for a cheaper price." />
      </SectionPhoto>
      <SectionPhoto image="https://lh3.googleusercontent.com/mDODenPknjToEtZt1o1lkZQHh0oVXNaWod_Kr4VrnAQLf4Xg7dDURT1vahMcIxdB8xwQ6dGeWeEl23VXZkMHnmFVqAyZUbzb380cSSmgnoG4kDUm38DpnSkmufb034P6UN0RU8stj-LI_EaCBQXpYqtY81ciDizDPFRlyM1GY8Zf7ekci88vb99pmGaoGs4QNrMiFqEVag2TEZznb6ONybDBrAlafkrNZx6ZMq64HLSqCTIrqJFXsWBP4jyvZpa1z-ng8paDou7qPe0m7vP-TEV6SWk0ZBwM0LeBC24T-_lFSSRCt19zLmzOINNAqk-ZMxcwq9atSRrWv5W-bJioZH4ZWSOWLxXcEXcJxx8-Y0iTfVZIlq81Qa2AfsOlc7jALRJ9EPKoR48zEzyFYExpFmQHSDa_hCo3bjPZT4v6WhBDLSdFh-2D9Yl_W96m1TvHK-2KojnnCqWtParnfZUVSPpNi5bPbdGzdMEP6ezfqAP7uVlPLdiBzbACXuhLiWs7a_tBzoYa6YOAOqL1qDZrA5C9e4BWxjRU96mP5ouT_NL1kmmfc0wJjsOSEO3fu1fxy5eDA3E4pWCia1geQHmVcclQ2jRP9mZhQl1LDPGuqsANsncPyV10Sy5W=w1804-h1352-no" rightAlignedPhoto>
        <Heading text="CANDY" />
        <Content text="Old fashioned candy be hard to find from wholesalers. We carry a full assortment of candy that has everything from double-dipped peanuts to Pixie Stix. Some of our top sellers include:" />
        <ul>
          <li>Maple Nut Goodies</li>
          <li>PB Bars</li>
          <li>Orange Slices</li>
          <li>Yogurt Pretzels</li>
        </ul>
      </SectionPhoto>
      <SectionPhoto image="https://lh3.googleusercontent.com/G-jySBryaJLqK3FewGIZD3PXRdb9jMTRwaj0VtarXUQL1hhOqJ4vS12n_Po79LCXC1NhLnzEi6cSmMh2BKPiGA7dXU6A_YhpB-v_hnvCW2hsol2wAjmKuBdoCnOac2dIbvKOozg2xxTiQPYw9c75e2CooARXi76cK1vX49yeYKCsnyKLNbZ4lR7mUTKk-pJtBtpFMsOSAcKMtWCNyl3fh7hMAPTnmGte6RN621TKSG85nnKubVegkgpfHDow8HwqrwSmno4xHSu3zBHyWnweOYd1bMuC1WhC65AOzDBEC5wbo2sR0ioDeVXaglsXuKTosVOimnuTNhYMY0wTC2gQ05SqPw0ZskkkoGVm_CqIwrqQp2H-ebpzoL4V8cz85VpcacBIUllBZuiRdFtduXumSBHzng1GIfK5iIz4K952_znhj34Q9CrVsQkfitYFEJVMPhe9nSLiyLNh1PkiKPgHFBiUREhirJVLBpj_XQr0Oo0OcVOKo4xwqK_-AGwpTToTvvjL4JcVkpPjsQnt1he06QJ_kIFGHpneu6V6KnkTj2ryNIqPW4NfvQ4u30yTNXvs9U3Fy2S4l547WPL439CV_mlODCdgo6BONQbjQEYuKc6W-kp28f0Ou1_I=w1804-h1352-no">
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
      <SectionPhoto image="https://images.pexels.com/photos/8439/food-eggs.jpg?w=940&h=650&auto=compress&cs=tinysrgb" rightAlignedPhoto>
        <Heading text="EGGS AND FLOUR" />
        <Content text="We have sourced from local suppliers for our eggs and flour for years. Eggs are always in stock and flour orders are customized each week to ensure you have what you need. Our selection includes:" />
        <ul>
          <li>Double-yoked eggs</li>
          <li>Loose and carton eggs</li>
          <li>Big Spring Mill flour</li>
        </ul>
      </SectionPhoto>
      <SectionPhoto image="https://images.pexels.com/photos/499173/pexels-photo-499173.jpeg?w=940&h=650&auto=compress&cs=tinysrgb">
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
