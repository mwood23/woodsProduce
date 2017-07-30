import style from './style';
import ProductTile from '../productTile';

const ProductTiles = () => (
  <div className={style.productTiles}>
    <ProductTile
      text="Produce"
      image={<img sizes="(max-width: 500) 100vw, {max-width: 1500) 20vw, 400"
        srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_900/v1501372285/Wood%27s%20Produce%20Fruits%20and%20Vegetables%20Peaches%20and%20Watermelons.jpg 900w,
     	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_879/v1501372285/Wood%27s%20Produce%20Fruits%20and%20Vegetables%20Peaches%20and%20Watermelons.jpg 879w,
     	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_806/v1501372285/Wood%27s%20Produce%20Fruits%20and%20Vegetables%20Peaches%20and%20Watermelons.jpg 806w,
     	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_674/v1501372285/Wood%27s%20Produce%20Fruits%20and%20Vegetables%20Peaches%20and%20Watermelons.jpg 674w,
     	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_554/v1501372285/Wood%27s%20Produce%20Fruits%20and%20Vegetables%20Peaches%20and%20Watermelons.jpg 554w,
     	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_404/v1501372285/Wood%27s%20Produce%20Fruits%20and%20Vegetables%20Peaches%20and%20Watermelons.jpg 404w,
     	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_200/v1501372285/Wood%27s%20Produce%20Fruits%20and%20Vegetables%20Peaches%20and%20Watermelons.jpg 200w"
        src="https://res.cloudinary.com/woodsproduce/image/upload/v1501372285/Wood%27s%20Produce%20Fruits%20and%20Vegetables%20Peaches%20and%20Watermelons.jpg"
        alt=""
      />}
      url="/products" />
    <ProductTile
      text="Candy"
      image={<img sizes="(max-width: 500) 100vw, {max-width: 1500) 20vw, 500"
        srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_900/v1501377278/Wood%27s%20Produce%20Candy%20Products.jpg 900w,
     	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_780/v1501377278/Wood%27s%20Produce%20Candy%20Products.jpg 780w,
     	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_612/v1501377278/Wood%27s%20Produce%20Candy%20Products.jpg 612w,
     	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_438/v1501377278/Wood%27s%20Produce%20Candy%20Products.jpg 438w,
     	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_200/v1501377278/Wood%27s%20Produce%20Candy%20Products.jpg 200w"
        src="https://res.cloudinary.com/woodsproduce/image/upload/v1501377278/Wood%27s%20Produce%20Candy%20Products.jpg"
        alt=""
      />}
      url="/products" />
    <ProductTile
      text="Packaging"
      image={<img src="http://www.broncopackaging.com/images/products/ph_products_tomatoesSTACK.jpg" />}
      url="/products" />
    <ProductTile
      text="Eggs"
      image={<img src="https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/3SE4H5RT0T.jpg" />}
      url="/products" />
    <ProductTile
      text="Jar Goods"
      image={<img sizes="(max-width: 500) 100vw, (max-width: 1500) 20vw, 400"
        srcset="https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_900/v1501377264/Wood%27s%20Produce%20Jars%20Product%20List.jpg 900w,
         	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_880/v1501377264/Wood%27s%20Produce%20Jars%20Product%20List.jpg 880w,
         	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_710/v1501377264/Wood%27s%20Produce%20Jars%20Product%20List.jpg 710w,
         	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_520/v1501377264/Wood%27s%20Produce%20Jars%20Product%20List.jpg 520w,
         	 	https://res.cloudinary.com/woodsproduce/image/upload/c_scale,w_200/v1501377264/Wood%27s%20Produce%20Jars%20Product%20List.jpg 200w"
            src="https://res.cloudinary.com/woodsproduce/image/upload/v1501377264/Wood%27s%20Produce%20Jars%20Product%20List.jpg"
            alt=""
          />}
      url="/products" />
  </div>
);

export default ProductTiles
