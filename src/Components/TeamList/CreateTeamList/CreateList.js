import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import "./CreateList.css";
import createpage from "../../../Assets/createpage.gif";
import ReactGA from 'react-ga4';

const CreateList = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Track page view when the component mounts
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  const validationSchema = Yup.object({
    team: Yup.string().required('Team is required'),
    employeeName: Yup.string().required('Employee Name is required'),
    salaryMonthly: Yup.number().required('Salary Monthly is required').positive('Must be a positive number'),
    role: Yup.string().required('Role is required'),
    revenueGenerated: Yup.number().required('Revenue Generated is required').positive('Must be a positive number'),
    efficiency: Yup.number().required('Efficiency is required').min(0, 'Must be at least 0').max(100, 'Must be at most 100'),
    drone: Yup.string().required('Drone is required'),
  });

  const formik = useFormik({
    initialValues: {
      team: '',
      employeeName: '',
      salaryMonthly: '',
      role: '',
      revenueGenerated: '',
      efficiency: '',
      drone: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios
        .post("https://65f13bf1da8c6584131d2154.mockapi.io/zuppa/users", values)
        .then((response) => {
          console.log('New team member created:', response.data);
          ReactGA.event({
            category: 'Form',
            action: 'Submit',
            label: 'Create New Team Member'
          });
          setOpen(true);
        })
        .catch((error) => {
          console.error('Error creating new team member:', error);
        });
    },
  });

  const handleClose = () => {
    setOpen(false);
    navigate('/teamlist');
  };

  return (
    <div className='createlist-mainpage container'>
      <div className="card p-4 mt-5 mx-auto" style={{ maxWidth: '700px' }}>
        <div className="text-center mb-4">
          <img className='create-image' src={createpage} alt="Create Page" />
          <Typography variant="h5" className="create-list-title">
            Create New Team Member
          </Typography>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <TextField
              label="Team"
              variant="outlined"
              fullWidth
              name="team"
              value={formik.values.team}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.team && Boolean(formik.errors.team)}
              helperText={formik.touched.team && formik.errors.team}
            />
          </div>
          <div className="mb-3">
            <TextField
              label="Employee Name"
              variant="outlined"
              fullWidth
              name="employeeName"
              value={formik.values.employeeName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.employeeName && Boolean(formik.errors.employeeName)}
              helperText={formik.touched.employeeName && formik.errors.employeeName}
            />
          </div>
          <div className="mb-3">
            <TextField
              label="Salary Monthly"
              variant="outlined"
              fullWidth
              name="salaryMonthly"
              value={formik.values.salaryMonthly}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.salaryMonthly && Boolean(formik.errors.salaryMonthly)}
              helperText={formik.touched.salaryMonthly && formik.errors.salaryMonthly}
            />
          </div>
          <div className="mb-3">
            <TextField
              label="Role"
              variant="outlined"
              fullWidth
              name="role"
              value={formik.values.role}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.role && Boolean(formik.errors.role)}
              helperText={formik.touched.role && formik.errors.role}
            />
          </div>
          <div className="mb-3">
            <TextField
              label="Revenue Generated"
              variant="outlined"
              fullWidth
              name="revenueGenerated"
              value={formik.values.revenueGenerated}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.revenueGenerated && Boolean(formik.errors.revenueGenerated)}
              helperText={formik.touched.revenueGenerated && formik.errors.revenueGenerated}
            />
          </div>
          <div className="mb-3">
            <TextField
              label="Efficiency (%)"
              variant="outlined"
              fullWidth
              name="efficiency"
              value={formik.values.efficiency}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.efficiency && Boolean(formik.errors.efficiency)}
              helperText={formik.touched.efficiency && formik.errors.efficiency}
            />
          </div>
          <div className="mb-3">
            <TextField
              label="Drone"
              variant="outlined"
              fullWidth
              name="drone"
              value={formik.values.drone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.drone && Boolean(formik.errors.drone)}
              helperText={formik.touched.drone && formik.errors.drone}
            />
          </div>
          <div className="d-flex justify-content-between">
            <Button variant="contained" color="error" onClick={() => navigate('/teamlist')}>
              Cancel
            </Button>
            <Button variant="contained" color="success" type="submit">
              Create
            </Button>
          </div>
        </form>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Success"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            New team member created successfully!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateList;
