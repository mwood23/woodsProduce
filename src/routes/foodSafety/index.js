import React, {h, Component} from 'preact';
import style from './style';
import Hero from '../../components/hero';
import Section from '../../components/section';
import SectionPhoto from '../../components/sectionPhoto';
import Heading from '../../components/heading';
import Content from '../../components/content';
import RowList from '../../components/rowList';

export default class FoodSafety extends Component {

  render() {
    return (
      <div>
        <Hero image="https://lh3.googleusercontent.com/VXm08oa1hfn8b84Us-ahpcC5wd5pH_jnIxFi99f7Fy8fIrRsWfN1WvEolzJvPPr7hoO-0_lMd1W9h9aRUnzq9Rm93GF4z0b_slk_mEyZjj617n0xpjOCgI4vvlBRj4zcWqzjbpn-Z_FxSA8r98F4OTg0WeE5Xe9xePKUekLhru2bRsG8f-3wIpsLuN32FpDHILUB_XHWYpkkHN2ARi69RNlSWekL2ogKdkvTB-UgAzdcu1DKcjXqsM5l4I-gGtfw-sCPGefOBDXHZzgYdql_xLsL5uNs9IiFONDHEUWaIkd1eXNCGeiLi_jy4NkyuZrk7WhZnEFsOfBof0vipCb3kyPCQtUF_ObNnqfjVSoyhBHQv3RhdMxFUdI2CWPJH50OWyuGawr6GekoP4wGTkF0a2tPfV0gkH3B83rZckI91lZ9giAenDEr9xzdZWIdKoewIiavyiGS1pNcmD3e4PsMNWH16EefAx-QJdrXXLLmKV6oTK8UriCca54HMAEq1uvsgSb71kvO4BIEGfz8tH39HxeONrCMGb14yQ0QWKHnujc4-QQxUloMJ-u-LylZkEu28YcEhMW--TOnBx4k8jMu5p1WD52TeCkkrhPZjuWwpKaMrtRhCnxBM5FBtj4ec2jL3TH_VwWOb24zJcdx9bTlPg6-wEPGyq7jZQ9xCbzUVaWOIA=w2240-h736-no" heading="Food Safety" />
        <Section>
          <Heading text="THE HEART OF WHAT WE DO" />
          <Content text="Food safety is the primary focus in everything we do. We require that all of our suppliers are audited by the Global Food Safety Initiatives (GFSI) benchmarks and deliver on refrigerated trucks. Our facilities have achieved Safe Quality Foods (SQF) Level 2 and the USDA's Good Handling & Agricultural Practices certifications." />
        </Section>
        <SectionPhoto image="https://lh3.googleusercontent.com/HpArcOWxJ3Yz6Us-ZLVCh4ZEnqb5NeB5YhgIO4QNIogHZGoENJBt0X2ap9dMxs6e0mqgtB-UKZ1ztTZnhN3ImTyXqXUfXCSvMECQ5wMB3zYmUoQlqacc72dbKlZJRryPAy4JMtmtVufmx9d5odi-eFrMPgcxzI8P1xpBoPHRmrYGelDcWAItzPjDOvcg9wubtgvzqbv7x_HtYKYwd6YWf4yjUk3TJvjGFHfejjjnOU5GFLQpeNHFooLyA6D-GymmOlP-C1Sdif620rH59FdHacPnXNbFrIWqm0rJDdJ3T6By_naWAcj3lVK59YTwA1N8XSaG-ysV5wThTBHJyVbqE6F4NoKgtY_potRtbOab_jsjtOihhzOEd8zmJ7hCA23paR7ufGbstQ7QesjIcAtg8BTTZcJmCmY9I65uHXkpT4g_K1nbgDLMIZlce2aZwIyJzO0iKGdd44RlKSlgrMdIQv-7N2DRHGpaiGW70wiN4dWsMfnxuZbeXvCZWnN9WCkaYbZt4PIyu9pa-abC2Jah2IsNWOyoZ59JPkZ6UQx-FJDqKkgaEq3NYkJnPyuZKos0mIP-GhI1a0Dra5gQdJP2x23ckaE1q1udeKYKCcmrlvQ2iNK4m7JAHCS8JqJL7wkrtCkbAtTY9vbdMQWrcZNyiM0JBanfH3d37U0lIrlX3G_q8Q=w1804-h1352-no">
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
        <SectionPhoto image="https://lh3.googleusercontent.com/Qfo2WLBTY7Zf-w6AV0Ms0Jw7AeXO6nkCXZNo4OHVsywtTFflQ_QRmSgSAJ3-7GCqbJejO5X-3wDecZw_7T1dhmVLaq5Ga2fYGAPNdHQMs-fjC9SzVeRrMvx6qXmk9OpdLz_5H4VgShjKpa58GU-0OMDT6F9d8V7QuWAWY6cdS3LjjoNLu2L4VxWzQKiSjfYZod-MsMG1AsjADTDgQO_TqtK5ZpiMBSbvINJKQ7R6I06nHxIFuYquEhUVmLbZhJhTMRu5jjC1pD7UL2VUrB2sW7vS-AsvnYYwKe8AgVlDkC2eui1I8T9aRhG2hiFm6AE7AcEGhWbGeXpPXxsVkJTfn81eTmfDWXUAJheiKgV71j25Y8zMIBIyKZYxgIRWBc5zxTbjU9e5Evpr0kZJqMVnJi-NhjsP60KX-C4l8L1WlxdGpfYdhwp9dfXCwfKtmw-xGSkSuKyXQPq9jSb3X4EWGEBtzxuHxTJ1ql8X8Z49B8tdHK-JIcYundyF96reSc_PEkUv5O-ibpbBQ9Z5KGwVW9x_-rcsf3XXRy0Zg0jfOV018wLxzy4Qn359WNh-5ZG2jpeJ_RucWGTtky-goA0juGZpNJkrWfCf4_D3_I6QGVahz91uWEJn2rH_q9Hr6bY-PZ4O7G3S0KwfdmMX8k3Yc7BrpxsZJbmKZpr61QHexMqivA=w1804-h1352-no" rightAlignedPhoto>
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
      </div>
    );
  }
}
