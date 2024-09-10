import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import ReactGA from "react-ga4";

const Layout = () => {
  // Track page view on component mount
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  // Event handler to track any specific interactions within the Layout
  const handleLayoutInteraction = (actionLabel) => {
    ReactGA.event({
      category: "Layout Interaction",
      action: `Interacted with ${actionLabel}`,
      label: actionLabel,
    });
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Navbar />
        {/* Any specific interaction can be tracked by calling handleLayoutInteraction */}
        <div onClick={() => handleLayoutInteraction("Main Content Area")}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
