import flowRight from "lodash.flowRight";
import style from './style';
import { default as React, Component, PropTypes } from "react";
import withScriptjs from "react-google-maps/lib/async/withScriptjs";
import { withGoogleMap, GoogleMap, Marker, Polygon } from "react-google-maps";

/*
 * This is the modify version of:
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 *
 * Loaded using async loader.
 */
const GoogleMapComponent = flowRight(
  withScriptjs,
  withGoogleMap,
)(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={6}
    defaultCenter={{ lat: 36.712244, lng: -80.354274 }}
    options={{
      streetViewControl: false,
      scrollwheel: false,
      draggable: true,
      panControl: false
    }}
  >
    {props.markers.map(marker => (
      <Marker
        {...marker}
      />
    ))}

    <Polygon
      options={{
        strokeColor: '#babfc7',
        fillColor: '#01379b',
        strokeOpacity: 0.28,
        strokeWeight: 1,
        fillOpacity: 0.4
      }}
      paths={[
        {
          lng: -78.283518,
          lat: 39.021932
        },
        {
          lng: -77.399255,
          lat: 38.447128
        },
        {
          lng: -77.463732,
          lat: 38.02025
        },
        {
          lng: -77.251878,
          lat: 37.517828
        },
        {
          lng: -77.477549,
          lat: 37.019393
        },
        {
          lng: -77.390044,
          lat: 36.576854
        },
        {
          lng: -77.279511,
          lat: 35.526886
        },
        {
          lng: -78.440107,
          lat: 35.128565
        },
        {
          lng: -79.213837,
          lat: 35.384312
        },
        {
          lng: -79.655969,
          lat: 35.14361
        },
        {
          lng: -80.991576,
          lat: 34.894676
        },
        {
          lng: -82.824581,
          lat: 35.489364
        },
        {
          lng: -82.750892,
          lat: 35.923178
        },
        {
          lng: -84.335198,
          lat: 35.729001
        },
        {
          lng: -84.316775,
          lat: 36.250699
        },
        {
          lng: -83.856221,
          lat: 36.562058
        },
        {
          lng: -84.261509,
          lat: 37.12229
        },
        {
          lng: -84.500997,
          lat: 38.042018
        },
        {
          lng: -82.852214,
          lat: 38.468827
        },
        {
          lng: -81.645562,
          lat: 38.504817
        },
        {
          lng: -81.203431,
          lat: 38.792567
        },
        {
          lng: -80.411278,
          lat: 39.293343
        },
        {
          lng: -79.563858,
          lat: 39.236292
        },
        {
          lng: -79.029616,
          lat: 38.749478
        },
        {
          lng: -78.283518,
          lat: 39.021932
        }
      ]} />

  </GoogleMap>
));

export default class GoogleMapView extends Component {

  static propTypes = {
    toast: PropTypes.func.isRequired,
  };

  state = {
    markers: [{
      position: {
        lat: 36.712244,
        lng: -80.354274,
      },
      key: `Taiwan`,
      defaultAnimation: 2,
    }],
  }

  handleMapLoad = this.handleMapLoad.bind(this);

  componentDidMount() {
    if (window.google) {
      window.google.maps.event.trigger(this._mapComponent, 'resize');
    }
  }

  handleMapLoad(map) {
    this._mapComponent = map;
  }

  render() {
    return (
      <GoogleMapComponent
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDbev5XOmved15STRk8nEutdtZQx6-xQwA"
        loadingElement={
          <div className={style.googleMap}>
            loading
          </div>
        }
        containerElement={
          <div className={style.googleMapContainer} />
        }
        mapElement={
          <div className={style.mapElement} />
        }
        onMapLoad={this.handleMapLoad}
        markers={this.state.markers} />
    );
  }
}
