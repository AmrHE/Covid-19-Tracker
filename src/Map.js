import React from 'react';
import "./Map.css";
import { MapContainer, useMap, TileLayer } from "react-leaflet";
import { showDataOnMap } from './util';

function Map({ casesType, countries, center, zoom }) {

  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

  return (
    <MapContainer 
      className="map"
      center={center}
      zoom={zoom}
    >
      <ChangeView center={center} zoom={zoom} />
        <TileLayer 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' 
        />
      {showDataOnMap(countries, casesType)}
    </MapContainer>
  );
}

export default Map
