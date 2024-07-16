import React from 'react';
import BarChartIcon from '@mui/icons-material/BarChart';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import ToysIcon from '@mui/icons-material/Toys';
import SettingsIcon from '@mui/icons-material/Settings';
import drone from "../../Assets/drone.png";
import './SidebarMap.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SidebarMap = ({ onDroneClick }) => {
const navigate = useNavigate()
const homePage = () =>{
  navigate("/")
}


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
      <div className="sidebar-item">
      <Button variant="contained" color='warning' onClick={homePage}>Back</Button> </div>
    </div>
  );
};

export default SidebarMap;
