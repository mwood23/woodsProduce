import ReactMapboxGl, {Layer, Feature, ZoomControl, Marker} from "react-mapbox-gl";

const Map = ReactMapboxGl({accessToken: "pk.eyJ1IjoibWFyY3Vzd29vZDIzIiwiYSI6ImNqNWVqdzZzOTA1MzAzM21uejB1OHd6NGIifQ.B3sfFWNRf4mRXKcIAsxwFA",
scrollZoom: false});

const polygonPaint = {
  'fill-color': '#6F788A',
  'fill-opacity': .4
};

const markerUrl = 'http://www.myiconfinder.com/uploads/iconsets/256-256-a5485b563efc4511e0cd8bd04ad0fe9e.png'

const center = [-80.354274, 36.712244]

const coords = [[
  [
    -78.283518,
    39.021932
  ], [
    -77.751412,
    38.847301
  ], [
    -77.399255,
    38.447128
  ], [
    -77.355763,
    38.02025
  ], [
    -77.251878,
    37.517828
  ], [
    -77.135647,
    37.105526
  ], [
    -77.181868,
    36.812846
  ], [
    -77.1921,
    36.56241
  ], [
    -77.209454,
    36.322904
  ], [
    -77.208813,
    36.009949
  ], [
    -77.279511,
    35.526886
  ], [
    -77.787829,
    35.225116
  ], [
    -78.440107,
    35.128565
  ], [
    -79.033888,
    34.943226
  ], [
    -79.655969,
    35.011056
  ], [
    -80.991576,
    34.894676
  ], [
    -82.842575,
    35.372125
  ], [
    -83.650633,
    35.484735
  ], [
    -84.335198,
    35.729001
  ], [
    -84.370759,
    36.178088
  ], [
    -84.432055,
    36.489649
  ], [
    -84.625701,
    36.698527
  ], [
    -84.56742,
    36.978706
  ], [
    -84.681277,
    37.296048
  ], [
    -84.705159,
    37.583574
  ], [
    -84.500997,
    38.042018
  ], [
    -83.784574,
    38.326345
  ], [
    -82.852214,
    38.468827
  ], [
    -81.897489,
    38.757796
  ], [
    -81.329394,
    38.834618
  ], [
    -80.861338,
    39.099274
  ], [
    -80.411278,
    39.293343
  ], [
    -79.563858,
    39.236292
  ], [
    -78.939641,
    39.155015
  ], [
    -78.283518,
    39.021932
  ]
]]

const MapComponent = () => (
  <Map style="mapbox://styles/mapbox/streets-v9" containerStyle={{
    height: "100%",
    width: "100%"
  }}
  center={center}
  zoom={[5]}>
    <Layer type="fill" paint={polygonPaint}>
      <Feature coordinates={coords}/>
      <Feature coordinates={[center]}/>
    </Layer>
    <ZoomControl />
    <Marker
      coordinates={center}
      anchor="bottom">
      <img style={{width: '30px', height: '40px'}} src={markerUrl}/>
    </Marker>
  </Map>
);

export default MapComponent
