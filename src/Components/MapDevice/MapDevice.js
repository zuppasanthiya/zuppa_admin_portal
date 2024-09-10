import React, { useState, useEffect } from 'react';
import './MapDevice.css';
import SidebarMap from './SidebarMap';
import Map from './Map';
import ReactGA from 'react-ga4';

const MapDevice = () => {
  const [markers, setMarkers] = useState([]);

  // Track page view when the component mounts
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  // Event handler to track any specific interactions within MapDevice
  const handleMapInteraction = (actionLabel) => {
    ReactGA.event({
      category: "Map Interaction",
      action: `Interacted with ${actionLabel}`,
      label: actionLabel,
    });
  };

  // Example function to demonstrate interaction tracking
  const addMarker = () => {
    // Logic to add a marker (not shown)
    handleMapInteraction("Add Marker Button");
  };

  return (
    <>
      <div className='d-flex'>
        <SidebarMap />
        <div className="map-container">
          <Map onClick={addMarker} markers={markers} />
     
       
        </div>
      </div>
    </>
  );
};

export default MapDevice;
