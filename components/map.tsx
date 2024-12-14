'use client'; // required for Next.js App Router

import 'leaflet/dist/leaflet.css';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';


const Map = () => {
  return (
    <MapContainer
      center={[48.91013260329323, 2.3908511576734965]}
      zoom={11.5}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[48.91013260329323, 2.3908511576734965]}>
        <Popup>Nous sommes Ici !</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
