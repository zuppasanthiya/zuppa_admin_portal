import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  TableSortLabel,

} from "@mui/material";
import "./DroneList.css";
import TeamList from "../TeamList/TeamList";
import DroneSidebar from "./DroneSidebar";

const createData = (
  sn,
  team,
  droneNo,
  areaCovered,
  hoursFlown,
  roiPercent,
  lifeRemaining,
  utilization
) => {
  return {
    sn,
    team,
    droneNo,
    areaCovered,
    hoursFlown,
    roiPercent,
    lifeRemaining,
    utilization,
  };
};

const dummyData = [
  createData(1, "Team A", "DR001", 50, 10, 20, 80, 60),
  createData(2, "Team B", "DR002", 60, 20, 25, 70, 75),
  createData(3, "Team C", "DR003", 70, 15, 30, 60, 80),
  createData(4, "Team D", "DR004", 80, 25, 35, 50, 85),
  createData(5, "Team E", "DR005", 90, 30, 40, 40, 90),
  createData(6, "Team E", "DR005", 20, 30, 60, 40, 90),
  createData(7, "Team E", "DR005", 9, 30, 70, 10, 90),
  createData(8, "Team E", "DR005", 30, 70, 80, 40, 80),
  createData(9, "Team E", "DR005", 30, 30, 60, 20, 60),
  createData(10, "Team E", "DR005", 50, 80, 60, 40, 90),
];

const headCells = [
  { id: "sn", label: "Sn" },
  { id: "team", label: "Team" },
  { id: "droneNo", label: "DroneNo" },
  { id: "areaCovered", label: "Area Covered (Acres)" },
  { id: "hoursFlown", label: "Hours Flown" },
  { id: "roiPercent", label: "ROI Percent (%)" },
  { id: "lifeRemaining", label: "Life Remaining (%)" },
  { id: "utilization", label: "Utilization (%)" },
];

const DroneList = () => {
  const [data, setData] = useState(dummyData);
  const [filter, setFilter] = useState("");
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("sn");
  const navigate = useNavigate();

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(filter.toLowerCase())
    )
  );

  const sortedData = filteredData.sort((a, b) => {
    if (orderBy === "sn") {
      return order === "asc" ? a.sn - b.sn : b.sn - a.sn;
    }
    if (
      [
        "areaCovered",
        "hoursFlown",
        "roiPercent",
        "lifeRemaining",
        "utilization",
      ].includes(orderBy)
    ) {
      return order === "asc"
        ? a[orderBy] - b[orderBy]
        : b[orderBy] - a[orderBy];
    }
    return order === "asc"
      ? a[orderBy].localeCompare(b[orderBy])
      : b[orderBy].localeCompare(a[orderBy]);
  });

  return (
    <>
      <DroneSidebar />
      <div className="DroneList container ">
        <h3 className="text-center">Drone List</h3>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <TextField
              label="Search"
              variant="outlined"
              value={filter}
              onChange={handleFilterChange}
              className="w-100 DroneList-filter-input"
            />
          </div>
        </div>
        <TableContainer
          component={Paper}
          className="DroneList-table-container mt-4"
        >
          <Table>
            <TableHead>
              <TableRow>
                {headCells.map((headCell) => (
                  <TableCell
                    key={headCell.id}
                    sortDirection={orderBy === headCell.id ? order : false}
                  >
                    <TableSortLabel
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order : "asc"}
                      onClick={() => handleRequestSort(headCell.id)}
                    >
                      <b>{headCell.label}</b>
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedData.map((row) => (
                <TableRow key={row.sn} className="table-row">
                  <TableCell>{row.sn}</TableCell>
                  <TableCell>{row.team}</TableCell>
                  <TableCell>{row.droneNo}</TableCell>
                  <TableCell>{row.areaCovered}</TableCell>
                  <TableCell>{row.hoursFlown}</TableCell>
                  <TableCell>{row.roiPercent}</TableCell>
                  <TableCell>{row.lifeRemaining}</TableCell>
                  <TableCell>{row.utilization}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <TeamList />
      <br />
    </>
  );
};

export default DroneList;
