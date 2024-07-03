import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import Card from "./Card";
import FleetCard from "./FleetCard";

const Layout = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Navbar />
    
        <Outlet />
  
      </div>
    </div>
  );
};

export default Layout;
