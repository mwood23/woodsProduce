import style from './style';
import Heading from '../heading';
import Map from '../map';

const VideoSection = ({children}) => (
  <section className={style.section}>
    <Heading text="DELIVERY AREA" />
    <div className={style.mapContainer}>
      <Map />
    </div>
  </section>
);

export default VideoSection
