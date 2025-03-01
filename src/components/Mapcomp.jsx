// src/Mapcomp.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// Coordinates for the map center (e.g., London)
const position = [51.505, -0.09]; // Latitude, Longitude for London

const Mapcomp = () => {
  return (
    <MapContainer center={position} zoom={13} style={{ height: "100vh", width: "100%" }}>
      {/* OpenStreetMap tile layer */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Marker at the center position */}
      <Marker position={position}>
        <Popup>Welcome to this location!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Mapcomp;
