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
      <Hero image="https://lh3.googleusercontent.com/MsOaAhVHOEotYYCbxwxW0McjqTRDzHEeOR6DCmB4O7yLKl2MF6zu57aoKSQvlvQIhPGHkJDM-tw7hZWGASTkj6c05f2yEw_8T1LrBEx45mB_ySdmV4FdFnRmGTPxSpPw5UhbtRpA_pWbmcKZZV3XYZYC0di_f4u0G6s4y9ORgk7uqMHsIdRCFCf6OZ5gxMP6QxvQMWZ5H3wqPDV-nd0dnu8gaQWNIQMFTauHQAAfdj79HifK0kasQOkjwG22cXkZ6dfDjHcvVZLqHG8BbtvXTlnfi1G-cQavnRa2XGBJVYSg0ueZGSsaLl0jUQEWAoE7UHndkI5bjqjMKmmA3iOIokqe_S-1nqlM6RPu2Uw7WRd6GgnXxgidA-Bf84-4sCUj135ZMoN1MCbGe8u9Enk4JT0QwCDPnA0JFbGqyQv4pXmExoxS5Cwogg3Cv9DLMtdi4SQjZP9giAJvLII7djcibpkNXI4b6cD2tX4OvLNkkE_RHalMbzzLtmNQCer_mCtwogmic0wQbKC0v2iRI_wVFMHbiC6OXpbEz6ecA8fT3n4Z_kf8-9nXG7s89xK5nerEnC_dWy2aThqfR56QRjjU5BsMcIrfjtQT6VePcs9yxmHfhNcms5MXtLzRidHfum33eXz4oUU1FGGTT2-NNDyEtgyJiviZZ8r05M1Pc3jBHi3dJw=w2210-h680-no" heading="Our Products" />
      <Section>
        <Heading text="A LITTLE BIT OF EVERYTHING" />
        <Content text="We have over 1,200 different items that range from your fruits and vegetables to an extensive collection of honey, jams, jar goods, and old-fashioned candy. The good thing about our size is that if we don't have it, we can get it for you before your next delivery since product is coming into our faciltity from around the country seven days a week." />
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
        <Content text="We have sourced from local suppliers for our eggs and flour for years. Our selection includes:" />
        <ul>
          <li>Double-yoked eggs</li>
          <li>Loose and carton eggs</li>
          <li>Big Spring Mill flour</li>
        </ul>
      </SectionPhoto>
      <SectionPhoto image="https://images.pexels.com/photos/499173/pexels-photo-499173.jpeg?w=940&h=650&auto=compress&cs=tinysrgb">
        <Heading text="PACKAGING" />
        <Content text="Full assortment of packaging. We have everything from t-shirt to paper bags for your packaging needs" />
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
