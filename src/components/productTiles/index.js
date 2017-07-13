import style from './style';
import ProductTile from '../productTile';

const ProductTiles = () => (
  <div className={style.productTiles}>
    <ProductTile
      text="Produce"
      image="https://images.pexels.com/photos/36156/pexels-photo.jpg?w=940&h=650&auto=compress&cs=tinysrgb"
      url="/products" />
    <ProductTile
      text="Candy"
      image="https://images.pexels.com/photos/37537/cake-pops-candies-chocolate-food-37537.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
      url="/products" />
    <ProductTile
      text="Packaging"
      image="https://images.pexels.com/photos/99541/pexels-photo-99541.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
      url="/products" />
    <ProductTile
      text="Eggs"
      image="https://images.pexels.com/photos/473506/pexels-photo-473506.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
      url="/products" />
    <ProductTile
      text="Jar Goods"
      image="https://images.pexels.com/photos/162686/plums-fruit-jam-violet-162686.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
      url="/products" />
  </div>
);

export default ProductTiles
