import style from './style';
import Heading from '../heading';
import GoogleMapView from '../map';

const MapSection = ({children}) => (
  <section className={style.section}>
    <Heading text="DELIVERY AREA" />
    <div className={style.mapContainer}>
      <GoogleMapView />
    </div>
  </section>
);

export default MapSection
