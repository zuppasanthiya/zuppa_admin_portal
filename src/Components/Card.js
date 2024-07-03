

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CardItem.css";
import SpeedIcon from "@mui/icons-material/Speed";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import GpsNotFixedIcon from '@mui/icons-material/GpsNotFixed';
import MyLocationIcon from '@mui/icons-material/MyLocation';

const Card = () => {
  return (
    <div className="secoundcard-page">
      <div className="row">
        <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
          <div className="card-1 shadow">
            <div className="card-body">
              <h5 className="card-title-page">OverSpeed</h5>
            
        <div>      <SpeedIcon fontSize="large" /> </div>
              
              <div className="d-flex justify-content-end speedIcon">
                <ul className="speedIcon-list">
                  <li className="speedIcon-list-1">Max.Speed</li>
                  <li className="speedIcon-list-2">103km/h</li>
                 <li className="speedIcon-list-3" style={{fontSize:"28px"}}>22</li>
                  <li className="speedIcon-list-4">Alerts</li>
                  <li className="speedIcon-list-5">20 vehicle</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
          <div className="card-2 shadow">
            <div className="card-body">
              <h5 className="card-title-page">Fence Overstay</h5>
        <div>      <FmdGoodIcon fontSize="large"/></div>
              <div className="d-flex justify-content-end FenceOverstay-speedIcon">
                <ul className="FenceOverstay">
                  <li className="FenceOverstay-1">Max.Overstay</li>
                  <li className="FenceOverstay-2">103km/h</li>
                  <li className="FenceOverstay-3" style={{fontSize:"28px"}}>46</li>
                  <li className="FenceOverstay-4">Alerts</li>
                  <li className="FenceOverstay-5">10 vehicle</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
          <div className="card-3 shadow">
            <div className="card-body">
              <h5 className="card-title-page">AC Misuse</h5>
              <AcUnitIcon fontSize="large"/>
              <div className="d-flex justify-content-end MisuseIcon">
                <ul className="Misuse">
                  <li className="Misuse-1">Approx Fuel</li>
                  <li className="Misuse-2" >22 ltr</li>
                  <li className="Misuse-3" style={{fontSize:"28px",color:"red"}}>32</li>
                  <li className="Misuse-4" style={{color:"black"}}>Hours</li>
                  <li className="Misuse-5">10 vehicle</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
          <div className="card-4 shadow">
            <div className="card-body">
              <h5 className="card-title-page">Stay Away </h5>
              <h5 className="card-title-page">from Zone</h5>
              <GpsNotFixedIcon fontSize="large"/>
              <div className="d-flex justify-content-end AwayfromZone-icon">
                <ul className="AwayfromZone">
                  <li className="AwayfromZone-1" style={{fontSize:"30px",color:"red"}}>25</li>
                  <li className="AwayfromZone-2" style={{color:"black"}}>Alerts</li>
                  <li className="AwayfromZone-3">10 vehicle</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
          <div className="card-5 shadow">
            <div className="card-body">
              <h5 className="card-title-page">Stay In Zone </h5>
              <MyLocationIcon fontSize="large"/>
              <div className="d-flex justify-content-end InZone-icon">
                <ul className="InZone">
                  <li className="InZone-1" style={{fontSize:"30px",color:"red"}}>35</li>
                  <li className="InZone-2" style={{color:"black"}}>Alerts</li>
                  <li className="InZone-3">10 vehicle</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
          <div className="card-6 shadow">
            <div className="card-body">
              <h5 className="card-title-page">Temperature</h5>
              <ThermostatIcon fontSize="large" />
              <div className="d-flex justify-content-end temperature-icon">
                <ul className="temperature">
                  <li className="temperature-1">Min Temp. 13° C</li> 
                  <li className="temperature-2">Max Temp. 48° C</li>
                  <li className="temperature-3" style={{fontSize:"28px"}}>35</li>
                  <li className="temperature-4">Alerts</li>
                  <li className="temperature-5">10 vehicle</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

