import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import './css/sb-admin-2.min.css';
import Card from './Components/Card';
import MapDevice from './Components/MapDevice/MapDevice';
import Stock from './Components/StockManagement/Stock';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}/>
         <Route path='/mapdevice' element={<MapDevice/>} />
         <Route path='/stock' element={<Stock/>} />
      </Routes>
    </Router>
  );
}

export default App; 

