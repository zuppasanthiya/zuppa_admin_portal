import React from "react";
import "./FleetCard.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TungstenIcon from "@mui/icons-material/Tungsten";

import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

const data = [{ value: 35 }, { value: 40 }, { value: 35 }];

const size = {
  width: 230,
  height: 230,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

const FleetCard = () => {





  
  return (
    <div className="card-page">
      <div className="row">
        <div className="col-lg-2">
          <div className=" Maintance-card-1">
            <div className="card-body">
              <p className="card-title text-start">Maintenance Reminder</p>

              <div className="d-flex justify-content-around">
                <div>
                  <CalendarMonthIcon fontSize="large" color="primary" />
                  <h6>Due</h6>
                  <h2 style={{ color: "green" }}>32</h2>
                </div>
                <div>
                  <TungstenIcon fontSize="large" color="warning" />
                  <h6>Overdue</h6>
                  <h2 style={{ color: "darkorange" }}>25</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="col-lg-2">
          <div className="Maintance-card-2">
            <div className="card-body">
              <h5 className="card-title text-start">Renewal Reminder</h5>
              <div className="d-flex justify-content-around">
                <div>
                  <CalendarMonthIcon fontSize="large" color="primary" />
                  <h6>Due</h6>
                  <h2 style={{ color: "green" }}>32</h2>
                </div>
                <div>
                  <TungstenIcon fontSize="large" color="warning" />
                  <h6>Overdue</h6>
                  <h2 style={{ color: "darkorange" }}>25</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="col-lg-4">
          <div className="Maintance-card-3">
            <div className="card-body">
              <h5 className="card-title text-start">Distance Classification</h5>

              <div className="d-flex justify-content-around distanceclassifi">
                <PieChart series={[{ data, innerRadius: 40 }]} {...size}>
                  <PieCenterLabel>3000 km </PieCenterLabel>
                </PieChart>

                <div className="d-flex classification">
                  <ul>
                    <li>Business</li>
                    <li>Personal</li>
                    <li>Unclassified</li>
                    <li>Invalid</li>
                  </ul>
                </div>
                <div className="classificationOne">
                  <ul>
                    <li style={{ color:"blue", fontWeight: "bold" }}>
                      600 km
                    </li>
                    <li style={{ color:"orange", fontWeight: "bold",marginLeft:"-4px" }}>
                      1300 km
                    </li>
                    <li style={{ color:"darkpink", fontWeight: "bold" }}>
                      {" "}
                      600 km
                    </li>
                    <li style={{ color:"purple", fontWeight: "bold" }}>
                      500 km
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fourth Card */}
        <div className="col-lg-4">
          <div className="Maintance-card-4">
            <div className="card-body">
              <h5 className="card-title text-start">Fleet Fuel</h5>
              <div className="d-flex justify-content-around fuelfleet">
                <div>
                  <p>Total</p>
                  <p>Fuel Refill</p>
                  <h6 style={{ color: "darkgreen" }}> ⛽ 1035 ltr</h6>
                  <p style={{ color: "darkgreen" }}>(105 times)</p>
                </div>

                <div>
                  <p>Total</p>
                  <p>Fuel Drain</p>
                  <h6 style={{ color: "darkred" }}>68 ltr</h6>
                  <p style={{ color: "darkred" }}>(10 times)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleetCard;
