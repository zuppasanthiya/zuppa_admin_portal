import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import axios from 'axios';
import './EditList.css';

const EditList = () => {
  const { state } = useLocation();
  const {  id, Team, EmployeeName, SalaryMonthly, Role, RevenueGenerated, Efficiency, Drone } = state || {};
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id,
    Team,
    EmployeeName,
    SalaryMonthly,
    Role,
    RevenueGenerated,
    Efficiency,
    Drone,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://65f13bf1da8c6584131d2154.mockapi.io/zuppa/users/${formData.id}`, formData)
      .then(() => {
        navigate('/teamlist');
      })
      .catch((error) => console.error('Error updating data:', error));
  };
const teamlistpage =()=>{
  navigate("/teamlist")
}
  return (
    <div className='container'>
      <br />
      <h3 className='text-center'>Edit Details</h3>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '55ch', ml: '25%' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField id="id" label="S.no" variant="standard" value={formData.id} onChange={handleChange} disabled />
        <br />
        <TextField id="Team" label="Team" variant="standard" value={formData.Team} onChange={handleChange} />
        <br />
        <TextField id="EmployeeName" label="Employee Name" variant="standard" value={formData.EmployeeName} onChange={handleChange} />
        <br />
        <TextField id="SalaryMonthly" label="Salary Monthly" variant="standard" value={formData.SalaryMonthly} onChange={handleChange} />
        <br />
        <TextField id="Role" label="Role" variant="standard" value={formData.Role} onChange={handleChange} />
        <br />
        <TextField id="RevenueGenerated" label="Revenue Generated" variant="standard" value={formData.RevenueGenerated} onChange={handleChange} />
        <br />
        <TextField id="Efficiency" label="Efficiency(%)" variant="standard" value={formData.Efficiency} onChange={handleChange} />
        <br />
        <TextField id="Drone" label="Drone" variant="standard" value={formData.Drone} onChange={handleChange} />
        <Button variant='contained' type="submit" onClick={teamlistpage}>Submit</Button>
      </Box>
    </div>
  );
};

export default EditList;
