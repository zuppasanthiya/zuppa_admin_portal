import React, { useState } from 'react';
import './MapDevice.css';
import SidebarMap from './SidebarMap';
import Map from './Map';

const MapDevice = () => {
  const [markers, setMarkers] = useState([]);


  return (
    <>
      <div className='d-flex'>
        <SidebarMap />
        <div className="map-container">
          <Map markers={markers} />
        </div>
      </div>
    </>
  );
};

export default MapDevice;











