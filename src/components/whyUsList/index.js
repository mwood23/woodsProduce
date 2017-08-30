import style from './style';
import WhyUsListItem from '../whyUsListItem'

const WhyUsList = () => (
    <div className={style.whyUsList}>
      <WhyUsListItem image={<img sizes="(max-width: 590) 100vw, (max-width: 2600) 33vw, 400"
    srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_400/v1501372285/Wood%27s%20Produce%20Apple%20Cooler.jpg 400w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_373/v1501372285/Wood%27s%20Produce%20Apple%20Cooler.jpg 373w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_150/v1501372285/Wood%27s%20Produce%20Apple%20Cooler.jpg 150w"
    src="https://res.cloudinary.com/woodsproduce/image/upload/v1501372285/Wood%27s%20Produce%20Apple%20Cooler.jpg"
    alt="Wood's Produce Apple Cooler"
  />}
        text="We offer a wide range of products to meet the needs of restuarants, retail markets, wholesalers, and grocery stores." />
      <WhyUsListItem image={<img sizes="(max-width: 590) 100vw, (max-width: 2600) 33vw, 500"
    srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_500/v1501372284/Wood%27s%20Produce%20Onion%20Farm%20Idaho/Oregon.jpg 500w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_476/v1501372284/Wood%27s%20Produce%20Onion%20Farm%20Idaho/Oregon.jpg 476w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_344/v1501372284/Wood%27s%20Produce%20Onion%20Farm%20Idaho/Oregon.jpg 344w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_180/v1501372284/Wood%27s%20Produce%20Onion%20Farm%20Idaho/Oregon.jpg 180w"
    src="https://res.cloudinary.com/woodsproduce/image/upload/v1501372284/Wood%27s%20Produce%20Onion%20Farm%20Idaho/Oregon.jpg"
    alt="Onion Farm"
  />} text="We buy direct from the farm to offer you the freshest product at the lowest price. Our facilities hold SQF level 2 certifications with a full HAACP program." />
      <WhyUsListItem image={<img sizes="(max-width: 590) 100vw, (max-width: 2600) 33vw, 500"
    srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_500/v1501372285/Wood%27s%20Produce%20Truck%20Sunset.jpg 500w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_483/v1501372285/Wood%27s%20Produce%20Truck%20Sunset.jpg 483w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_381/v1501372285/Wood%27s%20Produce%20Truck%20Sunset.jpg 381w,
 	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_180/v1501372285/Wood%27s%20Produce%20Truck%20Sunset.jpg 180w"
    src="https://res.cloudinary.com/woodsproduce/image/upload/v1501372285/Wood%27s%20Produce%20Truck%20Sunset.jpg"
    alt="Wood's Produce Sunset"
  />} text="Next day delivery offered in Virginia, North Carolina, Tennessee, West Virginia, and Kentucky. Speciality orders too!" />
    </div>
);

export default WhyUsList
