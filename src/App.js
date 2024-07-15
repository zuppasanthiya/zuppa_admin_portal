import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import './css/sb-admin-2.min.css';
import Card from './Components/Card';
import MapDevice from './Components/MapDevice/MapDevice';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}/>
         <Route path='/mapdevice' element={<MapDevice/>} />
       
      </Routes>
    </Router>
  );
}

export default App; 

