import style from './style';
import WhyUsListItem from '../whyUsListItem'

const WhyUsList = () => (
    <div className={style.whyUsList}>
      <WhyUsListItem image={<img sizes="(max-width: 500px) 100vw, 500px"
    srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_500/v1506139389/Wood%27s%20Produce%20Apple%20Cooler.jpg 500w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_476/v1506139389/Wood%27s%20Produce%20Apple%20Cooler.jpg 476w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_388/v1506139389/Wood%27s%20Produce%20Apple%20Cooler.jpg 388w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_299/v1506139389/Wood%27s%20Produce%20Apple%20Cooler.jpg 299w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_180/v1506139389/Wood%27s%20Produce%20Apple%20Cooler.jpg 180w"
    src="https://res.cloudinary.com/woodsproduce/image/upload/v1506139389/Wood%27s%20Produce%20Apple%20Cooler.jpg"
    alt=""
  />}
        text="We offer a wide range of products to meet the needs of restuarants, retail markets, wholesalers, and grocery stores." />
      <WhyUsListItem image={<img sizes="(max-width: 500px) 100vw, 500px"
    srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_500/v1506139389/Wood%27s%20Produce%20Onion%20Farm%20Idaho/Oregon.jpg 500w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_475/v1506139389/Wood%27s%20Produce%20Onion%20Farm%20Idaho/Oregon.jpg 475w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_349/v1506139389/Wood%27s%20Produce%20Onion%20Farm%20Idaho/Oregon.jpg 349w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_180/v1506139389/Wood%27s%20Produce%20Onion%20Farm%20Idaho/Oregon.jpg 180w"
    src="https://res.cloudinary.com/woodsproduce/image/upload/v1506139389/Wood%27s%20Produce%20Onion%20Farm%20Idaho/Oregon.jpg"
    alt=""
  />} text="We buy direct from the farm to offer you the freshest product at the lowest price. Our facilities hold SQF level 2 certifications with a full HAACP program." />
      <WhyUsListItem image={<img sizes="(max-width: 500px) 100vw, 500px"
    srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_500/v1506139389/Wood%27s%20Produce%20Truck%20Sunset.jpg 500w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_483/v1506139389/Wood%27s%20Produce%20Truck%20Sunset.jpg 483w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_381/v1506139389/Wood%27s%20Produce%20Truck%20Sunset.jpg 381w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_180/v1506139389/Wood%27s%20Produce%20Truck%20Sunset.jpg 180w"
    src="https://res.cloudinary.com/woodsproduce/image/upload/v1506139389/Wood%27s%20Produce%20Truck%20Sunset.jpg"
    alt=""
  />} text="Next day delivery offered in Virginia, North Carolina, Tennessee, West Virginia, and Kentucky. Speciality orders too!" />
    </div>
);

export default WhyUsList
