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
import CreateList from './Components/TeamList/CreateTeamList/CreateList';
import ReactGA from "react-ga4"
import { Helmet } from 'react-helmet';




const TRACKING_ID ="G-RE54PB12WJ";
ReactGA.initialize(TRACKING_ID);


const App = () => {
  return (
<div>
<Helmet>
        <title>Zuppa Tech | Drone Seller Company</title>
        <meta
          name="description"
          content="Shop the latest drone technology at Zuppa. Discover advanced drones for every purpose, from photography to surveillance. Visit shop.zuppa.io."
        />
        <meta
          name="keywords"
          content="drones, drone seller, advanced drones, Zuppa, drone technology"
        />
      </Helmet>
<AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/mapdevice" element={<MapDevice />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dronelist" element={<DroneList />} />
          <Route path="/teamlist" element={<TeamList />} />
          <Route path="/createlist" element={<CreateList />} />
          <Route path="/editlist/:sn" element={<EditList />} />
          
          <Route  path="/progress" element={<Onprogress />} />
        </Routes>
      </Router>
    </AuthProvider>
</div>
  );
};

export default App;

