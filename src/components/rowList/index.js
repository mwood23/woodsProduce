import style from './style';
import RowListItem from '../rowListItem'

const RowList = () => (
  // TODO: Map image URLs from contentful and create RowListItems to render inside the row
    <div className={style.rowList}>
      <RowListItem image="http://woodsproduce.net/img/food-safety/usda-gap-thumb.jpg" text="Good Agricultural Practices" url="http://woodsproduce.net/img/food-safety/USDA%20GAP%20and%20Preventative%20Food%20Defense%20Audit%20Certificate.pdf" />
      <RowListItem image="http://woodsproduce.net/img/food-safety/sqf-procedures-thumb.jpg" text="SQF Trainer"
    url="http://woodsproduce.net/img/food-safety/SQF%202000%20Systems%20Practitioner%20Training%20Certificate.pdf" />
      <RowListItem image="http://woodsproduce.net/img/food-safety/neha-haccp-thumb.jpg" text="HACCP Program" url="http://woodsproduce.net/img/food-safety/NEHA%20HACCP%20Manager%20Training%20Certificate.pdf" />
      <RowListItem image="http://woodsproduce.net/img/food-safety/sqf-level-2-audit-thumb.jpg" text="SQF Level 2" url="http://woodsproduce.net/img/food-safety/SQF%20Level%202%20Audit%20Certificate.pdf" />
    </div>
);

export default RowList
