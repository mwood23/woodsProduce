import style from './style';
import WhyUsListItem from '../whyUsListItem'

const WhyUsList = () => (
  // TODO: Map image URLs from contentful and create PartnersListItems to render inside the row
    <div className={style.whyUsList}>
      <WhyUsListItem image="https://image.flaticon.com/icons/svg/164/164426.svg" text="We offer a wide range of products to meet the needs of restuarants, retail markets, wholesalers, and grocery stores." />
      <WhyUsListItem image="https://image.flaticon.com/icons/svg/226/226592.svg" text="We buy direct from the farm to offer you the freshest product at the cheapest price. The same food safety standards as Nestle and Kraft Foods." />
      <WhyUsListItem image="https://image.flaticon.com/icons/svg/149/149061.svg" text="Next day delivery offered in Virginia, North Carolina, Tennessee, West Virginia, and Kentucky." />
    </div>
);

export default WhyUsList
