import * as React from "react";
import Stack from "@mui/material/Stack";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import Card from "./Card";
import FleetCard from "./FleetCard";
import DataLayer from "./DataLayer/DataLayer";

const data = [
  { value: 42.5, color: "#4e73df" },
  { value: 5, color: "#f6c23e" },
  { value: 50, color: "#36b9cc" },
  { value: 25, color: "#1cc88a" },
  { value: 5, color: "#e74a3b" },
];
const size = {
  width: 350,
  height: 250,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 30,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  width: 200,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const Dashboard = () => {
  const fleetIdle = [
    {
      theme: "secondary",
      title: "Fleet Idle",
      total: "Fleet Idle",
      approx: "Fuel Waste",
      note: "Generally, fuel per hour.",
    },
  ];

  const information = [
    {
      theme: "success",
      title: "Job Information",
      total: "3000",
    },
  ];

  return (
    <div className="container-fluid" style={{ marginTop: "-68px" }}>
      <div className="row">
        {/* Fleet Status */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100">
            <div className="card-body">
              <div className="row no-gutters">
                <div className="col mr-2">
                  <div className="text-xs text-success text-uppercase mb-2">
                    Fleet Status
                  </div>
                  <div className="d-flex">
                    <PieChart series={[{ data, innerRadius: 90 }]} {...size}>
                      <PieCenterLabel>200</PieCenterLabel>
                    </PieChart>
                    <div className="list-fleet">
                      <div className="list-fleet-1">
                        <h6>85</h6>
                        <ul>
                          <li> Running</li>
                        </ul>
                      </div>
                      <br />
                      <div className="list-fleet-2">
                        <h6>15</h6>
                        <ul>
                          <li> Idle</li>
                        </ul>
                      </div>
                      <br />
                      <div className="list-fleet-3">
                        <h6>50</h6>
                        <ul>
                          <li> Stopped</li>
                        </ul>
                      </div>
                      <br />
                      <div className="list-fleet-4">
                        <h6>10</h6>
                        <ul>
                          <li> Inactivate</li>
                        </ul>
                      </div>
                      <br />
                      <div className="list-fleet-5">
                        <h6>0</h6>
                        <ul>
                          <li> No Data</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card border-left-warning shadow h-100">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                    Fleet usage
                    <div className="p text-gray-800 text-end">
                      Total fleet usage <b style={{ color: "blue" }}> 25800 </b>
                      <div className="p text-gray-800 text-end">
                        Avg.Distance/Vachile{" "}
                        <b style={{ color: "blue" }}> 129 km</b>
                      </div>
                    </div>
                    <LineChart
                      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                      series={[{ data: [100, 20, 70, 20, 75, 35] }]}
                      width={370}
                      height={250}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          {fleetIdle.map((idle) => (
            <div key={idle.title}>
              <div className={`cardfleed border-left-${idle.theme} shadow`}>
                <div className="row no-gutters align-items-center">
                  <div
                    className={`text-xs font-weight-bold text-${idle.theme} text-uppercase col-12`}
                  >
                    {idle.title}
                  </div>
                  <div className="row w-100">
                    <div className="col-lg-6 col-md-6 col-6">
                      <p>Total</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-6">
                      <p>Approx</p>
                    </div>
                    <div
                      className="col-lg-6 col-md-6 col-6"
                      style={{ marginTop: "-10px" }}
                    >
                      {idle.total}
                      <br />
                      <CarRepairIcon color="warning" fontSize="large" /> 32 ltr
                    </div>
                    <div
                      className="col-lg-6 col-md-6 col-6 font-weight-bold"
                      style={{ marginTop: "-10px" }}
                    >
                      {idle.approx}
                      <br />
                      <LocalGasStationIcon
                        color="primary"
                        fontSize="large"
                      />{" "}
                      85 ltr
                    </div>
                    <div className="col-12">
                      <p className="mb-0">Note : {idle.note}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <br />
          {information.map((info) => (
            <div key={info.title}>
              <div className={`card-info border-left-${info.theme} shadow`}>
                <div className="card-body" style={{ marginTop: "-15px" }}>
                  <div
                    className={`text-xs font-weight-bold text-${info.theme} text-uppercase col-12`}
                  >
                    {info.title}
                  </div>
                  <h6 style={{ textAlign: "center" }}>Total: {info.total}</h6>
                  <Stack spacing={2} sx={{ flexGrow: 1 }}>
                    <div className="d-flex justify-content-between align-items-center">
                      <span>Completed</span>
                      <BorderLinearProgress
                        variant="determinate"
                        color="warning"
                        value={50}
                      />
                      <span>1000</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <span>Running</span>
                      <BorderLinearProgress
                        variant="determinate"
                        color="success"
                        value={40}
                      />
                      <span>1500</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <span>Not Started</span>
                      <BorderLinearProgress
                        variant="determinate"
                        color="info"
                        value={60}
                      />
                      <span>500</span>
                    </div>
                  </Stack>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Card />

      <FleetCard />
      <br/>
      <DataLayer/>
      <br/>
    </div>
  );
};

export default Dashboard;
