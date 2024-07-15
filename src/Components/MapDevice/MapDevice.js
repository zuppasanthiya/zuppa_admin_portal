import React, { useState } from 'react';
import './MapDevice.css';
import SidebarMap from './SidebarMap';
import NavbarMap from './NavbarMap';
import Map from './Map';

const MapDevice = () => {
  const [markers, setMarkers] = useState([]);

  const handleDroneClick = () => {
    const newMarkers = Array.from({ length: 10 }, (_, index) => ({
      position: [
        Math.random() * (13.2 - 12.9) + 12.9, // Latitude between 12.9 and 13.2
        Math.random() * (80.3 - 80.1) + 80.1  // Longitude between 80.1 and 80.3
      ],
      popup: `Drone ${index + 1}`
    }));
    setMarkers(newMarkers);
  };

  return (
    <>
      <NavbarMap />
      <div className='d-flex'>
        <SidebarMap onDroneClick={handleDroneClick} />
        <div className="map-container">
          <Map markers={markers} />
        </div>
      </div>
    </>
  );
};

export default MapDevice;




// import React, { useState } from 'react';
// import './MapDevice.css';
// import SidebarMap from './SidebarMap';
// import NavbarMap from './NavbarMap';
// import Map from './Map';

// const MapDevice = () => {
//   const [markers, setMarkers] = useState([]);
//   const handleDroneClick = () => {
//     const newMarkers = Array.from({ length: 15 }, (_, index) => ({
//       position: [
//         Math.random() * (13.2 - 12.9) + 12.9, 
//         Math.random() * (80.3 - 80.1) + 80.1  
//       ],
//       popup: `${index + 1}` 
//     }));
//     setMarkers(newMarkers);
//   };

//   return (
//     <>
//       <NavbarMap />
//       <div className='d-flex'>
//         <SidebarMap onDroneClick={handleDroneClick} />
//         <div className="map-container">
//           <Map markers={markers} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default MapDevice;
