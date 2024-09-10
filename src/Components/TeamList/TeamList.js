

import React, { useState, useEffect } from "react";
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
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useAuth } from "./AuthContext";
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import "./TeamList.css";
import teampage from "../../Assets/Team.gif";
import ReactGA from "react-ga4"



const headCells = [
  { id: "sn", label: "Sn" },
  { id: "team", label: "Team" },
  { id: "employeeName", label: "Employee Name" },
  { id: "salaryMonthly", label: "Salary Monthly" },
  { id: "role", label: "Role" },
  { id: "revenueGenerated", label: "Revenue Generated" },
  { id: "efficiency", label: "Efficiency (%)" },
  { id: "drone", label: "Drone" },
];

const TeamList = () => {
  const { user } = useAuth();
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("sn");
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);




  useEffect(() => {
    axios
      .get("https://65f13bf1da8c6584131d2154.mockapi.io/zuppa/users")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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
    if (["salaryMonthly", "revenueGenerated", "efficiency"].includes(orderBy)) {
      return order === "asc"
        ? a[orderBy] - b[orderBy]
        : b[orderBy] - a[orderBy];
    }
    return order === "asc"
      ? a[orderBy].localeCompare(b[orderBy])
      : b[orderBy].localeCompare(a[orderBy]);
  });

  const handleEditClick = (row) => {
    navigate(`/editlist/${row.sn}`, { state: { ...row } });
  };

  const handleDeleteClick = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleDeleteConfirm = () => {
    axios
      .delete(`https://65f13bf1da8c6584131d2154.mockapi.io/zuppa/users/${selectedRow.id}`)
      .then(() => {
        setData(data.filter((item) => item.id !== selectedRow.id));
        setOpen(false);
        setSelectedRow(null);
      })
      .catch((error) => console.error("Error deleting data:", error));
  };

  const handleDeleteCancel = () => {
    setOpen(false);
    setSelectedRow(null);
  };

  const homePage = () => {
    navigate("/");
  };

  const handleCreateNew = () => {
    navigate("/createlist");
  };


  return (
    <div className="container mt-5">
      <Typography variant="h4" className="text-center headertag" >
        Team List
        {" "}
      
      </Typography>
      <div className="row justify-content-center">
        <div className="col-md-10 d-flex justify-content-around">
          <TextField
            label="Search"
            variant="outlined"
            value={filter}
            onChange={handleFilterChange}
            className="col-md-6 w-100 TeamList-filter-input" />  
          {user && user.email === "zuppa@gmail.com" && (
            <Button
              variant="contained"
              color="success"
              className="col-md-2 mb-2"
              onClick={handleCreateNew}
            >
              Create New
            </Button>
          )}
        </div>
      </div>
      <TableContainer
        component={Paper}
        className="TeamList-table-container mt-4"
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
              <TableCell>
                {user && user.email === "zuppa@gmail.com" && (
                  <b>Action</b>
                )}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.map((row, index) => (
              <TableRow key={index} className="table-row">
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.team}</TableCell>
                <TableCell>{row.employeeName}</TableCell>
                <TableCell>{row.salaryMonthly}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>{row.revenueGenerated}</TableCell>
                <TableCell>{row.efficiency}</TableCell>
                <TableCell>{row.drone}</TableCell>
                {user && user.email === "zuppa@gmail.com" && (
                  <TableCell className="d-flex justify-content-between">
                    <Button onClick={() => handleEditClick(row)}>
                      <EditIcon />
                    </Button>
                    <Button
                      color="error"
                      onClick={() => handleDeleteClick(row)}
                    >
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button variant="contained" className="text-end" onClick={homePage}>
          BACK
        </Button>
      </TableContainer>
      <Dialog
        open={open}
        onClose={handleDeleteCancel}
      >
        <DialogTitle>Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this Item ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button  onClick={handleDeleteCancel} color="primary" style={{marginRight:"150px"}}>
            Cancel
          </Button>
          <Button  onClick={handleDeleteConfirm} color="error" >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TeamList;
