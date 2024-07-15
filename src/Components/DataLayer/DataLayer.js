import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { LineChart, lineElementClasses } from "@mui/x-charts/LineChart";
import SouthIcon from "@mui/icons-material/South";

import "./DataLayer.css";

const data1 = [
  { label: "Group A", value: 400 },
  { label: "Group B", value: 300 },
  { label: "Group C", value: 300 },
  { label: "Group D", value: 200 },
];

const uData = [10, 60, 35, 30, 30, 25];
const xLabels = [" A", " B", " C", " D", "E", "F"];

const DataLayer = () => {
  return (
    <>
      <h4 className="text-center" style={{ color: "black" }}>
        Impactree Data Analytics and presentation Layer
      </h4>
      <br />
      <div className="container DataLayer">
        <div className="row">
          <div className="col-lg-6">
            <PieChart
              series={[
                {
                  innerRadius: 50,
                  outerRadius: 80,
                  data: data1,
                },
              ]}
              width={400}
              height={300}
              slotProps={{
                legend: { hidden: true },
              }}
            />
          </div>
          <div className="col-lg-6">
            <LineChart
              width={500}
              height={300}
              series={[{ data: uData, area: true, showMark: false }]}
              xAxis={[{ scaleType: "point", data: xLabels }]}
              sx={{
                [`& .${lineElementClasses.root}`]: {
                  display: "none",
                },
              }}
            />
          </div>
        </div>
      </div>
      <h1 className="text-center" style={{ color: "black" }}>
        <SouthIcon fontSize="large" />
      </h1>
      <div className="Processing">
        <h3 style={{ color: "black" }}>
          Zuppa Backend Data Processing and Storage
        </h3>
      </div>
      <h1 className="text-center" style={{ color: "black" }}>
        <SouthIcon fontSize="large" />
      </h1>
      <div className="ProcessingOne">
        <h4 style={{ color: "black", marginTop: "30px" }}>
          ZUPPA FC &/OR ZUPPA EDGE
        </h4>
      </div>
      <h1 className="text-center" style={{ color: "black" }}>
        <SouthIcon fontSize="large" />
      </h1>

      <div className="triangle-background">
    <div className="triangle-content">
      <h4 className="text-center">
      Drone -1
      </h4>
    </div>
  </div>


    </>
  );
};

export default DataLayer;
