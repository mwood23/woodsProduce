import style from './style';

const WhyUsListItem = ({image, text}) => (
  <div className={style.whyUsListItem}>
    <div className={style.photoContainer}>
      <img src={image} />
    </div>
    <div>
      <p>{text}</p>
    </div>
  </div>
);

export default WhyUsListItem
