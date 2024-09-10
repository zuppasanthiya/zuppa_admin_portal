import React, { useEffect } from "react";
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
import ReactGA from "react-ga4";

const Sidebar = () => {


  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  const handleIconClick = (label) => {
    ReactGA.event({
      category: "Sidebar Interaction",
      action: `Clicked on ${label}`,
      label: label,
    });
  };



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
          <p onClick={() => handleIconClick("Profile Icon")}>
            <PersonIcon color="success" fontSize="large" />
          </p>
        </Link>
        <Link to="/teamlist">
          <p onClick={() => handleIconClick("Notifications Icon")}>
            <NotificationsActiveIcon />
          </p>
        </Link>
        <p onClick={() => handleIconClick("Speed Icon")}>
          <SpeedIcon />
        </p>
        <Link to="/mapdevice">
          <p onClick={() => handleIconClick("Location Icon")}>
            <LocationOnIcon />
          </p>
        </Link>
        <p onClick={() => handleIconClick("Event Note Icon")}>
          <EventNoteIcon />
        </p>
        <p onClick={() => handleIconClick("Donut Small Icon")}>
          <DonutSmallIcon />
        </p>
        <p onClick={() => handleIconClick("Settings Icon")}>
          <SettingsIcon />
        </p>
        <p onClick={() => handleIconClick("Hardware Icon")}>
          <HardwareIcon />
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
