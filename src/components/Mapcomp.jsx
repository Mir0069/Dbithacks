// src/Mapcomp.jsx
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// IP Geolocation API (free service from ip-api)
const IP_GEOLOCATION_API_URL = 'http://ip-api.com/json';

const Mapcomp = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    // Fetch user's location based on IP
    fetch(IP_GEOLOCATION_API_URL)
      .then((response) => response.json())
      .then((data) => {
        const { lat, lon } = data;
        // Set the location for the map center
        setLocation([lat, lon]);
      })
      .catch((error) => {
        console.error('Error fetching location:', error);
      });
  }, []);

  // Loading state while fetching the location
  if (!location) {
    return <div>Loading map...</div>;
  }

  return (
    <MapContainer center={location} zoom={13} style={{ height: '100vh', width: '100%' }}>
      {/* OpenStreetMap tile layer */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Marker at the user's location */}
      <Marker position={location}>
        <Popup>{location} Your Location!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Mapcomp;
