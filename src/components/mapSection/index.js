import style from './style';
import Heading from '../heading';
import GoogleMapView from '../map';
import LazyLoad from 'react-lazyload';

const MapSection = ({children}) => (
  <section className={style.section}>
    <Heading text="DELIVERY AREA" />
    {/* <LazyLoad height={300} offset={50}> */}
      <div className={style.mapContainer}>
        <GoogleMapView />
      </div>
    {/* </LazyLoad> */}
  </section>
);

export default MapSection
