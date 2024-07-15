
// import React from 'react';
// import { MapContainer, TileLayer, LayersControl, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// const { BaseLayer } = LayersControl;

// const chennaiLocations = [
//   { lat: 13.0827, lng: 80.2707, name: "Chennai 1" },
//   { lat: 13.0675, lng: 80.2376, name: "Chennai 2" },
//   { lat: 13.0352, lng: 80.2465, name: "Chennai 3" },
//   { lat: 13.0475, lng: 80.1997, name: "Chennai 4" },
//   { lat: 13.0640, lng: 80.2478, name: "Chennai 5" },
//   { lat: 13.0825, lng: 80.2700, name: "Chennai 6" },
//   { lat: 13.0524, lng: 80.2503, name: "Chennai 7" },
//   { lat: 13.0301, lng: 80.2097, name: "Chennai 8" },
//   { lat: 13.0638, lng: 80.2205, name: "Chennai 9" },
//   { lat: 13.0833, lng: 80.2622, name: "Chennai 10" }
// ];

// const maduraiLocations = [
//   { lat: 9.9252, lng: 78.1198, name: "Madurai 1" },
//   { lat: 9.9307, lng: 78.1221, name: "Madurai 2" },
//   { lat: 9.9398, lng: 78.1212, name: "Madurai 3" },
//   { lat: 9.9407, lng: 78.1217, name: "Madurai 4" },
//   { lat: 9.9261, lng: 78.1155, name: "Madurai 5" }
// ];

// const allLocations = [...chennaiLocations, ...maduraiLocations];

// const Map = () => {
//   return (
//     <div style={{ height: '100vh', width: '100%' }}>
//       <MapContainer center={[13.0827, 80.2707]} zoom={6} style={{ height: '100%', width: '100%' }}>
//         <LayersControl position="topright">
//           <BaseLayer checked name="Roadmap">
//             <TileLayer
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//           </BaseLayer>
//           <BaseLayer name="Satellite">
//             <TileLayer
//               url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
//             />
//           </BaseLayer>
//         </LayersControl>
//         {allLocations.map((location, index) => {
//           const customIcon = new L.DivIcon({
//             className: 'custom-div-icon',
//             html: `<div style="background-color:rgb(3, 49, 177);color:white; border: 1px solid blue; border-radius: 50%; width: 30px; height: 30px; display: flex; justify-content: center; align-items: center;">${location.name.split(' ')[1]}</div>`
//           });
//           return (
//             <Marker key={index} position={[location.lat, location.lng]} icon={customIcon}>
//               <Popup>{location.name}</Popup>
//             </Marker>
//           );
//         })}
//       </MapContainer>
//     </div>
//   );
// }

// export default Map;



import React, { useState } from 'react';
import { MapContainer, TileLayer, LayersControl, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import droneIconUrl from '../../Assets/drone-icon3.png'; // Adjust the path as necessary
// import droneIconUrl from '../../Assets/drone-icon1.png'; // Adjust the path as necessary

const { BaseLayer } = LayersControl;

const chennaiLocations = [
  { lat: 13.0827, lng: 80.2707, name: "Chennai 1" },
  { lat: 13.0675, lng: 80.2376, name: "Chennai 2" },
  { lat: 13.0352, lng: 80.2465, name: "Chennai 3" },
  { lat: 13.0475, lng: 80.1997, name: "Chennai 4" },
  { lat: 13.0640, lng: 80.2478, name: "Chennai 5" },
  { lat: 13.0825, lng: 80.2700, name: "Chennai 6" },
  { lat: 13.0524, lng: 80.2503, name: "Chennai 7" },
  { lat: 13.0301, lng: 80.2097, name: "Chennai 8" },
  { lat: 13.0638, lng: 80.2205, name: "Chennai 9" },
  { lat: 13.0833, lng: 80.2622, name: "Chennai 10" }
];

const maduraiLocations = [
  { lat: 9.9252, lng: 78.1198, name: "Madurai 1" },
  { lat: 9.9307, lng: 78.1221, name: "Madurai 2" },
  { lat: 9.9398, lng: 78.1212, name: "Madurai 3" },
  { lat: 9.9407, lng: 78.1217, name: "Madurai 4" },
  { lat: 9.9261, lng: 78.1155, name: "Madurai 5" }
];

const keralaLocations = [
  { lat: 8.5241, lng: 76.9366, name: "Kerala 1" },
  { lat: 8.5581, lng: 76.8815, name: "Kerala 2" },
  { lat: 8.5050, lng: 76.9561, name: "Kerala 3" },
  { lat: 9.9312, lng: 76.2673, name: "Kerala 4" },
  { lat: 9.9640, lng: 76.2416, name: "Kerala 5" },
  { lat: 10.0889, lng: 76.3560, name: "Kerala 6" },
  { lat: 11.2588, lng: 75.7804, name: "Kerala 7" },
  { lat: 11.2437, lng: 75.8173, name: "Kerala 8" },
  { lat: 11.0987, lng: 76.0740, name: "Kerala 9" },
  { lat: 10.8505, lng: 76.2711, name: "Kerala 10" },
  { lat: 8.8897, lng: 76.6141, name: "Kerala 11" },
  { lat: 9.8243, lng: 76.6362, name: "Kerala 12" },
  { lat: 8.9751, lng: 76.5111, name: "Kerala 13" },
  { lat: 10.5276, lng: 76.2144, name: "Kerala 14" },
  { lat: 10.5276, lng: 76.2144, name: "Kerala 15" },
  { lat: 10.7712, lng: 76.3540, name: "Kerala 16" },
  { lat: 9.3835, lng: 76.5741, name: "Kerala 17" },
  { lat: 9.5612, lng: 76.5204, name: "Kerala 18" },
  { lat: 8.8897, lng: 76.6311, name: "Kerala 19" },
  { lat: 8.8911, lng: 76.6156, name: "Kerala 20" },
  { lat: 10.1831, lng: 76.3573, name: "Kerala 21" },
  { lat: 10.1831, lng: 76.3573, name: "Kerala 22" },
  { lat: 8.5736, lng: 76.8598, name: "Kerala 23" },
  { lat: 8.5736, lng: 76.8598, name: "Kerala 24" },
  { lat: 10.5276, lng: 76.2144, name: "Kerala 25" },
  { lat: 11.2588, lng: 75.7804, name: "Kerala 26" },
  { lat: 11.2437, lng: 75.8173, name: "Kerala 27" },
  { lat: 10.8505, lng: 76.2711, name: "Kerala 28" },
  { lat: 10.0889, lng: 76.3560, name: "Kerala 29" },
  { lat: 9.9312, lng: 76.2673, name: "Kerala 30" }
];

const allLocations = [...chennaiLocations, ...maduraiLocations, ...keralaLocations];

const ZoomHandler = ({ setZoomLevel }) => {
  useMapEvents({
    zoomend: (e) => {
      setZoomLevel(e.target.getZoom());
    },
  });
  return null;
};

const Map = () => {
  const [zoomLevel, setZoomLevel] = useState(6);

  const droneIcon = new L.Icon({
    iconUrl: droneIconUrl,
    iconSize: [100, 70],
  });

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <MapContainer center={[13.0827, 80.2707]} zoom={6} style={{ height: '100%', width: '100%' }}>
        <LayersControl position="topright">
          <BaseLayer checked name="Roadmap">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </BaseLayer>
          <BaseLayer name="Satellite">
            <TileLayer
              url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
            />
          </BaseLayer>
        </LayersControl>
        <ZoomHandler setZoomLevel={setZoomLevel} />
        {allLocations.map((location, index) => {
          const customIcon = zoomLevel > 10
            ? droneIcon
            : new L.DivIcon({
                className: 'custom-div-icon',
                html: `<div style="background-color:rgb(3, 49, 177);color:white; border: 1px solid blue; border-radius: 50%; width: 30px; height: 30px; display: flex; justify-content: center; align-items: center;">${location.name.split(' ')[1]}</div>`
              });

          return (
            <Marker key={index} position={[location.lat, location.lng]} icon={customIcon}>
              <Popup>{location.name}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

export default Map;
