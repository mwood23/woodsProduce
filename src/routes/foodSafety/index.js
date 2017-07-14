import React, {h, Component} from 'preact';
import style from './style';
import Hero from '../../components/hero';
import Section from '../../components/section';
import Content from '../../components/content';

export default class FoodSafety extends Component {

  render() {
    return (
      <div>
        <Hero image="https://lh3.googleusercontent.com/jrAgzPeK2cUnwYtJKz-tCphRoIHLAWsI1Pi1M5AzKbyHbhsBBngdl5kzs7QBcEy2HHZssXeZ_JGg43bkVlIZxx7qJdg3oa_ysXTeIS0L0xBAM6gFxC0WnFdSaLijHHyhqjpIeROj_HVmwSgcOTB6GKRUPDBt4HVxR_gzxOMlkr1eOnVz9kSEoBaRTCuRhIZWsRyU4IuUfe6L7Tm6zirnlhwj3kWqa5geOSlKxx5AbZViOGom8-XW-4vX82nPrYUNMeepbBJiAUbo47mhjORMtQ8Q-ufumUONrl6MiidBC7POpShbC-m3sTohZPYMr1914me5fT-SasjVJ_pD7l5Tft_OAV8cBkb9Ttpu2KmtIcT0-ylNPqh6dZBIIU-KGah44RfEGbtFnu1vwoUYFOyRAfu-Z9X9haPo2Ds5HB54U-tXbvF0AGASbdRfFQZQi3kA6DbKDDrzJX7VI2rgYguC-KzFUB4BSIHcTHOyoQdJNqa_DBFOjjc5vD4lPf5JRTjKre_6zYLNmnMJEnEttWZ97mEUss6e6w5-JxYbCrjxDAJrIKWvyFVgtaDur0tB3FFt3OHTFV0dJOX6u6jf2uZPwVlBlxr7tehxP5X0n-aHxFe5oUVmzErL=w1656-h1242-no" heading="Food Safety" />
        <Section>
          Hello
        </Section>
      </div>
    );
  }
}
