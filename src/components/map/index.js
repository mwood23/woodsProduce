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
            lng: -77.751412,
            lat: 38.847301
          },
          {
            lng: -77.399255,
            lat: 38.447128
          },
          {
            lng: -77.355763,
            lat: 38.02025
          },
          {
            lng: -77.251878,
            lat: 37.517828
          },
          {
            lng: -77.135647,
            lat: 37.105526
          },
          {
            lng: -77.181868,
            lat: 36.812846
          },
          {
            lng: -77.1921,
            lat: 36.56241
          },
          {
            lng: -77.209454,
            lat: 36.322904
          },
          {
            lng: -77.208813,
            lat: 36.009949
          },
          {
            lng: -77.279511,
            lat: 35.526886
          },
          {
            lng: -77.787829,
            lat: 35.225116
          },
          {
            lng: -78.440107,
            lat: 35.128565
          },
          {
            lng: -79.033888,
            lat: 34.943226
          },
          {
            lng: -79.655969,
            lat: 35.011056
          },
          {
            lng: -80.991576,
            lat: 34.894676
          },
          {
            lng: -82.842575,
            lat: 35.372125
          },
          {
            lng: -83.650633,
            lat: 35.484735
          },
          {
            lng: -84.335198,
            lat: 35.729001
          },
          {
            lng: -84.370759,
            lat: 36.178088
          },
          {
            lng: -84.432055,
            lat: 36.489649
          },
          {
            lng: -84.625701,
            lat: 36.698527
          },
          {
            lng: -84.56742,
            lat: 36.978706
          },
          {
            lng: -84.681277,
            lat: 37.296048
          },
          {
            lng: -84.705159,
            lat: 37.583574
          },
          {
            lng: -84.500997,
            lat: 38.042018
          },
          {
            lng: -83.784574,
            lat: 38.326345
          },
          {
            lng: -82.852214,
            lat: 38.468827
          },
          {
            lng: -81.897489,
            lat: 38.757796
          },
          {
            lng: -81.329394,
            lat: 38.834618
          },
          {
            lng: -80.861338,
            lat: 39.099274
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
            lng: -78.939641,
            lat: 39.155015
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
