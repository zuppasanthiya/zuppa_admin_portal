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
import "./Map.css"



const { BaseLayer } = LayersControl;

const chennaiLocations = [
  { lat: 13.0827, lng: 80.2707, name: "Drone 1",battery:"20%"},
  { lat: 13.0675, lng: 80.2376, name: "Drone 2",battery:"30%" },
  { lat: 13.0352, lng: 80.2465, name: "Drone 3" ,battery:"60%" },
  { lat: 13.0475, lng: 80.1997, name: "Drone 4" ,battery:"20%" },
  { lat: 13.064, lng: 80.2478, name: "Drone 5"  ,battery:"77%"},
  { lat: 13.0825, lng: 80.27, name: "Drone 6" ,battery:"60%"},
  { lat: 13.0524, lng: 80.2503, name: "Drone 7"  ,battery:"10%"},
  { lat: 13.0301, lng: 80.2097, name: "Drone 8"  ,battery:"100%"},
  { lat: 13.0638, lng: 80.2205, name: "Drone 9",battery:"60%" },
  { lat: 13.0833, lng: 80.2622, name: "Drone 10" ,battery:"30%" },
];

const maduraiLocations = [
  { lat: 9.9252, lng: 78.1198, name: "Drone 1"  ,battery:"50%"},
  { lat: 9.9307, lng: 78.1221, name: "Drone 2"  ,battery:"30%"},
  { lat: 9.9398, lng: 78.1212, name: "Drone 3",battery:"60%" },
  { lat: 9.9407, lng: 78.1217, name: "Drone 4"  ,battery:"70%"},
  { lat: 9.9261, lng: 78.1155, name: "Drone 5"  ,battery:"40%"},
];

const keralaLocations = [
  { lat: 8.5241, lng: 76.9366, name: "Drone 1"  ,battery:"30%"},
  { lat: 8.5581, lng: 76.8815, name: "Drone 2" ,battery:"60%"},
  { lat: 8.505, lng: 76.9561, name: "Drone 3"  ,battery:"50%"},
  { lat: 9.9312, lng: 76.2673, name: "Drone 4" ,battery:"65%" },
  { lat: 9.964, lng: 76.2416, name: "Drone 5"  ,battery:"35%"},
  { lat: 10.0889, lng: 76.356, name: "Drone 6" ,battery:"60%"},
  { lat: 11.2588, lng: 75.7804, name: "Drone 7"  ,battery:"80%"},
  { lat: 11.2437, lng: 75.8173, name: "Drone 8"  ,battery:"30%"},
  { lat: 11.0987, lng: 76.074, name: "Drone 9"  ,battery:"40%"},
  { lat: 10.8505, lng: 76.2711, name: "Drone 10"  ,battery:"30%"},
  { lat: 8.8897, lng: 76.6141, name: "Drone 11"  ,battery:"30%"},
  { lat: 9.8243, lng: 76.6362, name: "Drone 12" ,battery:"65%"},
  { lat: 8.9751, lng: 76.5111, name: "Drone 13" ,battery:"20%"},
  { lat: 10.5276, lng: 76.2144, name: "Drone 14" ,battery:"80%"},
  { lat: 10.5276, lng: 76.2144, name: "Drone 15" ,battery:"60%"},
  { lat: 10.7712, lng: 76.354, name: "Drone 16" ,battery:"20%"},
  { lat: 9.3835, lng: 76.5741, name: "Drone 17",battery:"90%" },
  { lat: 9.5612, lng: 76.5204, name: "Drone 18" ,battery:"28%"},
  { lat: 8.8897, lng: 76.6311, name: "Drone 19" ,battery:"60%"},
  { lat: 8.8911, lng: 76.6156, name: "Drone 20"  ,battery:"30%"},
  { lat: 10.1831, lng: 76.3573, name: "Drone 21",battery:"60%" },
  { lat: 10.1831, lng: 76.3573, name: "Drone 22",battery:"20%" },
  { lat: 8.5736, lng: 76.8598, name: "Drone 23",battery:"40%" },
  { lat: 8.5736, lng: 76.8598, name: "Drone 24" ,battery:"65%"},
  { lat: 10.5276, lng: 76.2144, name: "Drone 25" ,battery:"30%"},
  { lat: 11.2588, lng: 75.7804, name: "Drone 26" ,battery:"20%"},
  { lat: 11.2437, lng: 75.8173, name: "Drone 27",battery:"70%" },
  { lat: 10.8505, lng: 76.2711, name: "Drone 28" ,battery:"10%"},
  { lat: 10.0889, lng: 76.356, name: "Drone 29",battery:"6%" },
  { lat: 9.9312, lng: 76.2673, name: "Drone 30",battery:"60%" },
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
    iconUrl: droneIconUrl,
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
                  html: `<div style="background-color:blue; font-weight: bold; color:white; font-size:16px; border: 1px solid skyblue; border-radius: 50%; width: 40px; height: 45px; display: flex; justify-content: center; align-items: center;">${
                    location.name.split(" ")[1]
                  }</div>`,
                });
        
          return (
            <Marker
              key={index}
              position={[location.lat, location.lng]}
              icon={customIcon}
            >
              <Popup>
              <b>  Drone No</b> : {location.name}
                <br />
               <b> Latitude</b> : {location.lat}
                <br />
             <b>   Longitude </b>: {location.lng}
             <br/>
             <b>Battery level</b> : {location.battery}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};
export default Map;


