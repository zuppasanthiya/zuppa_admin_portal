import React, { useState, useEffect, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  LayersControl,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.gridlayer.googlemutant";
import L from "leaflet";
import droneIconUrl from "../../Assets/unnamed.gif";

const { BaseLayer } = LayersControl;

const chennaiLocations = [
  { lat: 13.0827, lng: 80.2707, name: "Chennai 1" },
  { lat: 13.0675, lng: 80.2376, name: "Chennai 2" },
  { lat: 13.0352, lng: 80.2465, name: "Chennai 3" },
  { lat: 13.0475, lng: 80.1997, name: "Chennai 4" },
  { lat: 13.064, lng: 80.2478, name: "Chennai 5" },
  { lat: 13.0825, lng: 80.27, name: "Chennai 6" },
  { lat: 13.0524, lng: 80.2503, name: "Chennai 7" },
  { lat: 13.0301, lng: 80.2097, name: "Chennai 8" },
  { lat: 13.0638, lng: 80.2205, name: "Chennai 9" },
  { lat: 13.0833, lng: 80.2622, name: "Chennai 10" },
];

const maduraiLocations = [
  { lat: 9.9252, lng: 78.1198, name: "Madurai 1" },
  { lat: 9.9307, lng: 78.1221, name: "Madurai 2" },
  { lat: 9.9398, lng: 78.1212, name: "Madurai 3" },
  { lat: 9.9407, lng: 78.1217, name: "Madurai 4" },
  { lat: 9.9261, lng: 78.1155, name: "Madurai 5" },
];

const keralaLocations = [
  { lat: 8.5241, lng: 76.9366, name: "Kerala 1" },
  { lat: 8.5581, lng: 76.8815, name: "Kerala 2" },
  { lat: 8.505, lng: 76.9561, name: "Kerala 3" },
  { lat: 9.9312, lng: 76.2673, name: "Kerala 4" },
  { lat: 9.964, lng: 76.2416, name: "Kerala 5" },
  { lat: 10.0889, lng: 76.356, name: "Kerala 6" },
  { lat: 11.2588, lng: 75.7804, name: "Kerala 7" },
  { lat: 11.2437, lng: 75.8173, name: "Kerala 8" },
  { lat: 11.0987, lng: 76.074, name: "Kerala 9" },
  { lat: 10.8505, lng: 76.2711, name: "Kerala 10" },
  { lat: 8.8897, lng: 76.6141, name: "Kerala 11" },
  { lat: 9.8243, lng: 76.6362, name: "Kerala 12" },
  { lat: 8.9751, lng: 76.5111, name: "Kerala 13" },
  { lat: 10.5276, lng: 76.2144, name: "Kerala 14" },
  { lat: 10.5276, lng: 76.2144, name: "Kerala 15" },
  { lat: 10.7712, lng: 76.354, name: "Kerala 16" },
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
  { lat: 10.0889, lng: 76.356, name: "Kerala 29" },
  { lat: 9.9312, lng: 76.2673, name: "Kerala 30" },
];

const allLocations = [
  ...chennaiLocations,
  ...maduraiLocations,
  ...keralaLocations,
];

const ZoomHandler = ({ setZoomLevel, setIsUserZooming }) => {
  useMapEvents({
    zoomstart: () => {
      setIsUserZooming(true);
    },
    zoomend: (e) => {
      setZoomLevel(e.target.getZoom());
      setIsUserZooming(false);
    },
  });
  return null;
};

const Map = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(6);
  const [isUserZooming, setIsUserZooming] = useState(false);
  const initialAnimationDone = useRef(false);

  useEffect(() => {
    setStartAnimation(true);
  }, []);

  const MapComponent = () => {
    const map = useMap();

    useEffect(() => {
      if (startAnimation && !isUserZooming && !initialAnimationDone.current) {
        map.flyTo([12.5937, 78.9629], 6, {
          duration: 3,
          easeLinearity: 0.25,
        });
        initialAnimationDone.current = true;
      }
    }, [startAnimation, isUserZooming, map]);

    return null;
  };

  const droneIcon = new L.Icon({
    iconUrl:droneIconUrl,
    iconSize: [100, 70],
  });

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer
        center={[0, 0]}
        zoom={1}
        style={{ height: "100%", width: "100%" }}
      >
        <LayersControl position="topright">
          <BaseLayer checked name="Google Roadmap">
            <TileLayer url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" />
          </BaseLayer>
          <BaseLayer name="Google Hybrid">
            <TileLayer url="https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}" />
          </BaseLayer>
        </LayersControl>
        <MapComponent />
        <ZoomHandler
          setZoomLevel={setZoomLevel}
          setIsUserZooming={setIsUserZooming}
        />
        {allLocations.map((location, index) => {
          const customIcon =
            zoomLevel > 10
              ? droneIcon
              : new L.DivIcon({
                  className: "custom-div-icon",
                  html: `<div style="background-color:rgb(3, 49, 177);color:white; border: 1px solid blue; border-radius: 50%; width: 30px; height: 30px; display: flex; justify-content: center; align-items: center;">${
                    location.name.split(" ")[1]
                  }</div>`,
                });

          return (
            <Marker
              key={index}
              position={[location.lat, location.lng]}
              icon={customIcon}
            >
              <Popup>{location.name}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};
export default Map;
