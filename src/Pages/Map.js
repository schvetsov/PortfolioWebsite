import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const API_KEY = process.env.REACT_APP_API_KEY;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 30.3322,
      lng: -81.6557
    },
    zoom: 11
  };
 
  render() {
    console.log(API_KEY);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '85vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={30.3322}
            lng={-81.6557}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;