import React, { useState } from 'react';
import './Login.css'; 
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../Components/TeamList/AuthContext';
import Popup from './Popup'; 

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .required('Required')
    }),
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      try {
        const response = await login(values.email, values.password); 
        if (response.message === "Login Successfully") {
          setPopupMessage(response.message);
          setShowPopup(true);
          setTimeout(() => {
            setShowPopup(false);
            navigate("/dronelist");
          }, 2000); 
        } else {
          setPopupMessage(response.message);
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 3000);
        }
      } catch (error) {
        if (error.response && error.response.data) {
          setFieldError('general', error.response.data.message);
          setPopupMessage(error.response.data.message);
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 3000);
        } else {
          setFieldError('general', 'Login failed. Please try again.');
          setPopupMessage('Login failed. Please try again.');
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 3000);
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="login-container d-flex justify-content-center align-items-center">
      <Popup message={popupMessage} show={showPopup} /> 
      <div className="parallax">
        <video src="https://cdn.pixabay.com/video/2020/11/15/56466-481961399_large.mp4" autoPlay loop muted></video>
      </div>
      <div className="login-form col-10 col-md-6 col-lg-4">
        <h2 className="text-center">Login</h2>
        <form onSubmit={formik.handleSubmit}>
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
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
          </div>
          <button type="submit" className="btn btn-block submitbutton" disabled={formik.isSubmitting}>Submit</button>
          {formik.errors.general ? (
            <div className="alert alert-danger mt-3">{formik.errors.general}</div>
          ) : null}
        </form>
        <p className="text-center">Don't have an account? <a href="/register">Register</a></p>
      </div>
    </div>
  );
};

export default Login;





// import React, { useState } from 'react';
// import './Login.css'; 
// import { useNavigate } from 'react-router-dom';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import Popup from './Popup'; 

// const Login = () => {
//   const navigate = useNavigate();
//   const [showPopup, setShowPopup] = useState(false);
//   const [popupMessage, setPopupMessage] = useState('');

//   const formik = useFormik({
//     initialValues: {
//       email: '',
//       password: ''
//     },
//     validationSchema: Yup.object({
//       email: Yup.string()
//         .email('Invalid email address')
//         .required('Required'),
//       password: Yup.string()
//         .required('Required')
//     }),
//     onSubmit: async (values, { setSubmitting, setFieldError }) => {
//       try {
//         const response = await axios.post('https://adminportal-backend.vercel.app/login', values);

//         if (response.data.message === "Login Successfully") {
//           setPopupMessage(response.data.message);
//           setShowPopup(true);
//           setTimeout(() => {
//             setShowPopup(false);
//             navigate("/dronelist");
//           }, 2000); 
//         } else {
//           setPopupMessage(response.data.message);
//           setShowPopup(true);
//           setTimeout(() => setShowPopup(false), 3000);
//         }
//       } catch (error) {
//         if (error.response && error.response.data) {
//           setFieldError('general', error.response.data.message);
//           setPopupMessage(error.response.data.message);
//           setShowPopup(true);
//           setTimeout(() => setShowPopup(false), 3000);
//         } else {
//           setFieldError('general', 'Login failed. Please try again.');
//           setPopupMessage('Login failed. Please try again.');
//           setShowPopup(true);
//           setTimeout(() => setShowPopup(false), 3000);
//         }
//       } finally {
//         setSubmitting(false);
//       }
//     },
//   });

//   return (
//     <div className="login-container d-flex justify-content-center align-items-center">
//       <Popup message={popupMessage} show={showPopup} /> 
//       <div className="parallax">
//         <video src="https://cdn.pixabay.com/video/2020/11/15/56466-481961399_large.mp4" autoPlay loop muted></video>
//       </div>
//       <div className="login-form col-10 col-md-6 col-lg-4">
//         <h2 className="text-center">Login</h2>
//         <form onSubmit={formik.handleSubmit}>
//           <div className="form-group">
//             <label>Enter Your Email Id</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
//               value={formik.values.email}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//             {formik.touched.email && formik.errors.email ? (
//               <div className="invalid-feedback">{formik.errors.email}</div>
//             ) : null}
//           </div>
//           <div className="form-group">
//             <label>Enter Your Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
//               value={formik.values.password}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//             {formik.touched.password && formik.errors.password ? (
//               <div className="invalid-feedback">{formik.errors.password}</div>
//             ) : null}
//           </div>
//           <div className="form-group form-check">
//             <input type="checkbox" className="form-check-input" id="rememberMe" />
//             <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
//           </div>
//           <button type="submit" className="btn btn-block submitbutton" disabled={formik.isSubmitting}>Submit</button>
//           {formik.errors.general ? (
//             <div className="alert alert-danger mt-3">{formik.errors.general}</div>
//           ) : null}
//         </form>
//         <p className="text-center">Don't have an account? <a href="/register">Register</a></p>
//       </div>
//     </div>
//   );
// };

// export default Login;
