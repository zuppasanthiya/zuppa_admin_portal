import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import './css/sb-admin-2.min.css';
import MapDevice from './Components/MapDevice/MapDevice';
import Register from './Auth/Register';
import Login from './Auth/Login';
import DroneList from './Components/DroneList/DroneList';
import { AuthProvider } from './Components/TeamList/AuthContext';
import TeamList from './Components/TeamList/TeamList';
import EditList from './Components/TeamList/EditList';
import Onprogress from './Components/PagenotFound/Onprogress';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/mapdevice" element={<MapDevice />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dronelist" element={<DroneList />} />
          <Route path="/teamlist" element={<TeamList />} />
          <Route path="/editlist/:sn" element={<EditList />} />
          <Route  path="/progress" element={<Onprogress />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

