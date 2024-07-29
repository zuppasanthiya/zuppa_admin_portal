import React from "react";
import "./Sidebar.css";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SpeedIcon from "@mui/icons-material/Speed";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventNoteIcon from "@mui/icons-material/EventNote";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import SettingsIcon from "@mui/icons-material/Settings";
import HardwareIcon from "@mui/icons-material/Hardware";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="zuppa-sidebar">
      <img
        className="s-image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_szKuNc_U549YctVEiWWkBuRS0GaTnE_h2Q&s"
        alt="profile"
      />
      <br />
      <br />
      <div className="paragraph-icon">
        <Link to="/login">
          <p>
            <PersonIcon color="success" fontSize="large" />
          </p>
        </Link>
       <Link to="/teamlist">
       <p>
          <NotificationsActiveIcon />
        </p>
       </Link>
        <p>
          <SpeedIcon />
        </p>
        <Link to="/mapdevice">
          <p>
            <LocationOnIcon />
          </p>
        </Link>
        <p>
          <EventNoteIcon />
        </p>
        <p>
          <DonutSmallIcon />
        </p>
        <p>
          <SettingsIcon />
        </p>

        <p>
          <HardwareIcon />
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
