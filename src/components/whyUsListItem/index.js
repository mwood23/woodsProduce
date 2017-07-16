import style from './style';

const WhyUsListItem = ({image, text}) => (
  <div className={style.whyUsListItem}>
    <div>
      <img src={image} />
    </div>
    <div>
      {text}
    </div>
  </div>
);

export default WhyUsListItem
