import React from "react";

class GoogleMap extends React.Component {
  componentDidMount() {
    new window.google.maps.Map(this.refs.map, {
      zoom: 8,
      center: {
      	lng: this.props.lon,
        lat: this.props.lat
      },
      mapTypeId: 'terrain'
    });
  }

  
  render() {
    return <div id="map" ref="map" />;
  }
}

export default GoogleMap;
