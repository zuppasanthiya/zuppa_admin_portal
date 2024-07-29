
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
} from '@mui/material';
import { useAuth } from './AuthContext';
import axios from 'axios';
import './TeamList.css';

const headCells = [
  { id: 'sn', label: 'Sn' },
  { id: 'team', label: 'Team' },
  { id: 'employeeName', label: 'Employee Name' },
  { id: 'salaryMonthly', label: 'Salary Monthly' },
  { id: 'role', label: 'Role' },
  { id: 'revenueGenerated', label: 'Revenue Generated' },
  { id: 'efficiency', label: 'Efficiency (%)' },
  { id: 'drone', label: 'Drone' },
];

const TeamList = () => {
  const { user } = useAuth();
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('sn');
  const navigate = useNavigate();

  useEffect(() => {
  
    axios.get('https://65f13bf1da8c6584131d2154.mockapi.io/zuppa/users')
      .then((response) => setData(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
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
    if (orderBy === 'sn') {
      return order === 'asc' ? a.sn - b.sn : b.sn - a.sn;
    }
    if (['salaryMonthly', 'revenueGenerated', 'efficiency'].includes(orderBy)) {
      return order === 'asc' ? a[orderBy] - b[orderBy] : b[orderBy] - a[orderBy];
    }
    return order === 'asc'
      ? a[orderBy].localeCompare(b[orderBy])
      : b[orderBy].localeCompare(a[orderBy]);
  });

  const handleEditClick = (row) => {
    navigate(`/editlist/${row.sn}`, { state: { ...row } });
  };

const homePage =()=>{
  navigate("/")
}


  console.log(sortedData, "sghdfkjsghdf")
  return (
    <div className="container mt-5">
      <h3 className="text-center">Team List</h3>       
      <div className="row justify-content-center">
        <div className="col-md-6">
          <TextField
            label="Search"
            variant="outlined"
            value={filter}
            onChange={handleFilterChange}
            className="w-100 TeamList-filter-input"
          />
        </div>
      </div>
      <TableContainer component={Paper} className="TeamList-table-container mt-4">
        <Table>
          <TableHead>
            <TableRow>
              {headCells.map((headCell) => (
                <TableCell key={headCell.id} sortDirection={orderBy === headCell.id ? order : false}>
                  <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : 'asc'}
                    onClick={() => handleRequestSort(headCell.id)}
                  >
                    <b>{headCell.label}</b>
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.map((row, index) => (
              <TableRow key={index} className="table-row">
                <TableCell>{index+1}</TableCell>
                <TableCell>{row.Team}</TableCell>
                <TableCell>{row.EmployeeName}</TableCell>
                <TableCell>{row.SalaryMonthly}</TableCell>
                <TableCell>{row.Role}</TableCell>
                <TableCell>{row.RevenueGenerated}</TableCell>
                <TableCell>{row.Efficiency}</TableCell>
                <TableCell>{row.Drone}</TableCell>
                {user && user.email === 'zuppa@gmail.com' && (
                  <TableCell>
                    <Button variant="contained" color="warning" onClick={() => handleEditClick(row)}>
                      Edit
                    </Button>
                  </TableCell>     
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button variant='contained' className='text-end' onClick={homePage}>BACK</Button>
      </TableContainer>

    </div>
  );
};

export default TeamList;
