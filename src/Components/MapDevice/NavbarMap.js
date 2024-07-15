
import React, { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import QuestionMarkRoundedIcon from "@mui/icons-material/QuestionMarkRounded";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import DirectionsCarFilledRoundedIcon from "@mui/icons-material/DirectionsCarFilledRounded";
import DirectionsCarRoundedIcon from "@mui/icons-material/DirectionsCarRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarMap.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem } from "@mui/material";

const NavbarMap = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon"   onClick={handleMenuClick}>
        <MenuIcon />
      </span>
    
        </button>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Overview</MenuItem>     
          <MenuItem onClick={handleClose}>Tracking</MenuItem>
          <MenuItem onClick={handleClose}>My Vehicle</MenuItem>
          <MenuItem onClick={handleClose}>Groups</MenuItem>
          <MenuItem onClick={handleClose}>Vehicle Management</MenuItem>
          <MenuItem onClick={handleClose}>Alert Dashboard</MenuItem>
          <MenuItem onClick={handleClose}>Admin</MenuItem>
        </Menu>
  <div className={`collapse navbar-collapse` } id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <OpenWithIcon />
                <p>Overview</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <GpsFixedIcon />
                <p>Tracking</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <DirectionsCarFilledRoundedIcon />
                <p>My Vehicle</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <WorkspacesIcon />
                <p>Groups</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <DirectionsCarRoundedIcon />
                <p>Vehicle Management</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <DashboardRoundedIcon />
                <p>Alert Dashboard</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <SettingsIcon />
                <p>Admin</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <QuestionMarkRoundedIcon />
                <p>Help</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <AccountCircleRoundedIcon />
                <p>Profile</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMap;
