import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Stock.css";
import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';

const Stock = () => {
  const uData = [30, 60, 20, 5];
  const xLabels = ['A', 'B', 'C', 'D'];

  return (
 <>
    <div className="container">
      <h3>Management Dashboard</h3>
      <div className="row justify-content-center">
        <div className="d-flex flex-wrap justify-content-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-2 p-2 stock-card">
              <div className="card h-100 stock-card-body">
                <div className="card-body">
                  <h5 className="text-start">AAPL</h5>
                  <p className="text-start">Apple Inc</p>
                  <h2>$194.35</h2>
                  <p className="price-change">0.16%</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-5 col-md-6 mb-4">
  <span> Revenue <span>Area Covered</span> </span>
          <div className="chart-container">
            <LineChart
              width={500}
              height={300}
              series={[{ data: uData, area: true, showMark: false }]}
              xAxis={[{ scaleType: 'point', data: xLabels }]}
              sx={{
                [`& .${lineElementClasses.root}`]: {
                  display: 'none',
                },
              }}
            />
          </div>
        </div>
        <div className="col-lg-2 col-md-6 mb-4">
        <h6 className="text-center">Drones Deployed</h6>
        <h6 className="text-center">Salary Bill</h6>
          <div className="card h-80">
        
            <div className="card-body">
              <h6 className="text-start">AAPL</h6>
              <p className="text-start">Apple Inc</p>
              <h2>$194.35</h2>
              <p className="price-change">0.16%</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 mb-4">
        <h6 className="text-center">No of Teams</h6>
        <h6 className="text-center">Area Bill</h6>
          <div className="card h-80">
            <div className="card-body">
              <h6 className="text-start">AAPL</h6>
              <p className="text-start">Apple Inc</p>
              <h2>$194.35</h2>
              <p className="price-change">0.16%</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 mb-4">
        <h6 className="text-center">Total Hours Flown</h6>
        <h6 className="text-start">Fleet Utilization</h6>
          <div className="card h-80">
            <div className="card-body">
              <h6 className="text-start">Fleet Utilization</h6>
              <p className="text-start">Apple Inc</p>
              <h2>$194.35</h2>
              <p className="price-change">0.16%</p>
            </div>
          </div>
        </div>
    
      </div>
    </div>
 </>
  );
};

export default Stock;
