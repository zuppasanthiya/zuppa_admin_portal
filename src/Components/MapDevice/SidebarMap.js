import React from 'react';
import BarChartIcon from '@mui/icons-material/BarChart';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import ToysIcon from '@mui/icons-material/Toys';
import SettingsIcon from '@mui/icons-material/Settings';
import drone from "../../Assets/drone.png";
import './SidebarMap.css';

const SidebarMap = ({ onDroneClick }) => {
  return (
    <div className="sidebar-map">
      <div className="sidebar-item">
        <BarChartIcon fontSize="large" />
      </div>
      <div className="sidebar-item" onClick={onDroneClick}>
        <img className="sidebar-itemImage" src={drone} alt="Drone" />
      </div>
      <div className="sidebar-item">
        <DirectionsWalkIcon fontSize="large" />
      </div>
      <div className="sidebar-item">
        <ToysIcon fontSize="large" />
      </div>
      <div className="sidebar-item">
        <SettingsIcon fontSize="large" />
      </div>
    </div>
  );
};

export default SidebarMap;
