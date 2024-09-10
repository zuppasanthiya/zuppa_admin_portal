

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';  

const EditList = () => {
  const { state } = useLocation();
  const { id, team, employeeName, salaryMonthly, role, revenueGenerated, efficiency, drone } = state || {};
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id,
    team,
    employeeName,
    salaryMonthly,
    role,
    revenueGenerated,
    efficiency,
    drone,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://65f13bf1da8c6584131d2154.mockapi.io/zuppa/users/${formData.id}`, formData)
      .then(() => {
        toast.success('Edit successful!');  
        setTimeout(() => navigate('/teamlist'), 2000);  
      })
      .catch((error) => {
        toast.error('Error updating data.');  
        console.error('Error updating data:', error);
      });
  };

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
        <TextField id="team" label="Team" variant="standard" value={formData.team} onChange={handleChange} />
        <br />
        <TextField id="employeeName" label="Employee Name" variant="standard" value={formData.employeeName} onChange={handleChange} />
        <br />
        <TextField id="salaryMonthly" label="Salary Monthly" variant="standard" value={formData.salaryMonthly} onChange={handleChange} />
        <br />
        <TextField id="role" label="Role" variant="standard" value={formData.role} onChange={handleChange} />
        <br />
        <TextField id="revenueGenerated" label="Revenue Generated" variant="standard" value={formData.revenueGenerated} onChange={handleChange} />
        <br />
        <TextField id="efficiency" label="Efficiency(%)" variant="standard" value={formData.efficiency} onChange={handleChange} />
        <br />
        <TextField id="drone" label="Drone" variant="standard" value={formData.drone} onChange={handleChange} />
        <Button variant='contained' type="submit">Submit</Button>
        {/* <Button variant='contained' onClick={() => navigate('/teamlist')}>Back</Button> */}
      </Box>
      <ToastContainer />  
    </div>
  );
};

export default EditList;
