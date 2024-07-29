import React from "react";
import { IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import "./DroneSidebar.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ReplyIcon from "@mui/icons-material/Reply";
import EventNoteIcon from "@mui/icons-material/EventNote";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import HardwareIcon from "@mui/icons-material/Hardware";
import { Link } from "react-router-dom";

const DroneSidebar = () => {
  const navigate = useNavigate();

  const homePage = () => {
    navigate(-1);
  };

  const handleLogoutClick = () => {
    console.log("Logout clicked");
    navigate("/login");
  };

  return (
    <div className="Dronesidebar">
          <img
        className="s-image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_szKuNc_U549YctVEiWWkBuRS0GaTnE_h2Q&s"
        alt="profile"
      />
      <br/>
      <Link to="/mapdevice">
        <p >
          <LocationOnIcon fontSize="large" style={{ backgroundColor: "green[500]", color: 'white' }} />
        </p>
      </Link>

      <div className="sidebar-item my-3"  style={{ backgroundColor: "green[500]", color: 'white' }}>
        <SettingsIcon fontSize="large" />
      </div>
      <br/>


      <p style={{ backgroundColor: "green[500]", color: 'white' }}>
        <EventNoteIcon  fontSize="large"/>
      </p>
      <br/>
      <p style={{ backgroundColor: "green[500]", color: 'white' }}>
        <DonutSmallIcon  fontSize="large"/>
      </p>
      <br/>
      <p style={{ backgroundColor: "green[500]", color: 'white' }}>
        <SettingsIcon fontSize="large"/>
      </p>
      <br/>
      <p style={{ backgroundColor: "green[500]", color: 'white' }}>
        <HardwareIcon  fontSize="large"/>
      </p>
      <br/>
      <div className="sidebar-item  mb-3" style={{cursor:"pointer"}}>
        <ReplyIcon fontSize="large" variant="contained" color="warning"     onClick={homePage} />
      </div>

      <IconButton
        aria-label="logout"
        className="text-primary"
        onClick={handleLogoutClick}
      >
        <LogoutIcon color="error"  fontSize="large" />
      </IconButton>
    </div>
  );
};

export default DroneSidebar;
