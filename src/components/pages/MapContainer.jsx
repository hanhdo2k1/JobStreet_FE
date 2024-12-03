import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const MapContainer = ({ google, lat, lng }) => {
  const mapStyles = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: lat,
    lng: lng,
  };

  return (
    <Map google={google} zoom={14} style={mapStyles} initialCenter={center}>
      <Marker position={center} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "YOUR_GOOGLE_MAPS_API_KEY",
})(MapContainer);
