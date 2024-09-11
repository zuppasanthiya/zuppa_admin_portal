import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Register.css'; // Import the CSS file
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';



const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
     
        .required('Required')
    }),
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      try {
     
        const response = await axios.post(`     http://localhost:4000/register`, values);
      // const response = await axios.post(`https://adminportal-backend.vercel.app/register`, values);
        if (response.data.message === "Register Successfully") {
          alert(response.data.message);
          navigate("/login");
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        if (error.response && error.response.data) {
          setFieldError('general', error.response.data.message);
        } else {
          setFieldError('general', 'Registration failed. Please try again.');
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="register-container container-fluid d-flex align-items-center justify-content-center">
      <div className="parallax">
        <video src="https://cdn.pixabay.com/video/2020/11/15/56466-481961399_large.mp4" autoPlay loop muted></video>
      </div>
      <div className="register-form col-10 col-md-6 col-lg-4">
        <h2>Register</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label>Enter Your Name</label>
            <input
              type="text"
              name="username"
              placeholder="Name"
              className={`form-control ${formik.touched.username && formik.errors.username ? 'is-invalid' : ''}`}
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="invalid-feedback">{formik.errors.username}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label>Enter Your Email Id</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="invalid-feedback">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label>Enter Your Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="invalid-feedback">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="form-group remember-me">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <button type="submit" className="btn submitbutton w-100" disabled={formik.isSubmitting}>Submit</button>
          {formik.errors.general ? (
            <div className="alert alert-danger mt-3">{formik.errors.general}</div>
          ) : null}
        </form>
        <p>Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
};

export default Register;
